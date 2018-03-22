# Simplewallet
Simplewallet is most users's portal to the TurtleCoin network. It is essentially a dumb pipe, which requests data from the RPC interface, TurtleCoind.exe, and then displays this data to the user when required.

Simplewallet unfortunately, along with a lot of the rest of the codebase, makes heavy use of global variables. They are fortunately only global to the .cpp/.h file, but it does make the code a lot harder to follow.

The two most important ones are `m_wallet`, and `m_node`. 

### m_wallet

`m_wallet` is the wallet itself, and is an implementation of the IWalletLegacy inteface, this implementation can be found in `src/WalletLegacy/WalletLegacy.cpp`
Some useful functions this class provide include:

* initAndGenerate - Makes a new wallet file with a password
* initWithKeys - Restores a wallet with a set of private keys and a password
* initAndLoad - Loads a wallet from a file with a stream to the file and a password
* getAccountKeys - Get the wallet public/private spend and view key
* save - Saves the wallet information back to the wallet file
* reset - Rewalks the blockchain looking for transactions belonging to the user - can optionally take a parameter to start walking from
* actualBalance and pendingBalance - pending balance is caused by transactions which haven't been confirmed yet, only included in a block. After a few subsequent blocks these will be moved into actual balance.
* sendTransaction

### m_node

`m_node` is your connection to the RPC interface, and lets you get more information than just the wallet can provide, such as block info, transaction info, and more. The relevant code can be found in `src/NodeRpcProxy/NodeRpcProxy.cpp`

Some useful functions this class provide include:

* getTransactions - Give it a vector of transaction hashes and it will give you all the information on them, you can then decode this with a users's private keys to determine which outputs belong to them
* getBlocks - The same as getTransactions, but with a block hash. Each block contains a vector of transactions.

Some of the functions in this class require a callback function - `const Callback& callback`. This is a bit intimidating if you don't know what it means. `Callback` is a typedef for `std::function<void(std::error_code)>;` - That's a function which returns void, and takes an error code as an argument.

When we call one of the functions which require a callback, upon the function completing, it will call this callback function if there was an error. So how the heck do we use it? Here's an example.

```
/* Here we set up the std::function and the magical async thread things.
   You can just copy these next four lines into your program. */
std::promise<std::error_code> errorPromise;
std::future<std::error_code> f_error = errorPromise.get_future();
auto callback = [&errorPromise](std::error_code e) {errorPromise.set_value(e); };
m_node->addObserver(static_cast<INodeRpcProxyObserver*>(this));

/* Here we call the function we want to use. This function gets us some
   transaction details for each of the transaction hashes we give it. 
   We pass in the callback as an argument to the function. */
m_node->getTransactions(transactionHashes, transactions, callback);

/* Now, we check if the function returned an error */
auto error = f_error.get();

/* If there was an error, we can use the logger object to print it out nicely.
   More on this later. */
if (error)
{
    logger(ERROR, BRIGHT_RED) << "Failed to find transaction hash! Ensure you entered it correctly and your daemon is fully synced.";
    return false;
}
```

Whilst it is a bit finnicky, the only bit in this example you should need to change is the function you call, and of course what you do when an error occurs.

### Logger

So what's that logger object? It's just a nice way to print messages to the user with pretty colours and timestamps. You can see the colours and the different levels in `/src/Logging/ILogger.cpp`, some nice ones are GREEN, BRIGHT_YELLOW, BRIGHT_RED, AND BRIGHT_WHITE, but there's around 15 to pick from if you're feeling artistic...

The different logger levels allow log messages to be filtered depending upon how high the log level is. A message with FATAL priority will appear even when logging is turned down quite low. You can instrument your code with logger messages in TRACE or DEBUG mode to allow you to easily view what's going on, without spamming users's terminals with tons of messages.

It's very simple to use the logger object, we can just write to it the same way we would `std::cout`. For example:

```
} catch (const std::exception& e) {
  logger(ERROR, BRIGHT_RED) << "Failed to store wallet: " << e.what();
  return 1;
}
```

As you can see, we can send both string constants and string variables to it. We don't need to add a `std::endl` to the end, as each separate logger invocation is printed on a newline.

It'll look something like this when it actually gets printed out with all the formatting.

![logger example message](logger.png?raw=true "Logger example message")

### refresh_progress_reporter_t

Simplewallet has a class inside of it, refresh_progress_reporter_t. This can be useful to hide implementation details if the classes are tighly coupled, so users don't start using the API and prevent it from being changed. Not sure if we're going to document this or not?

## Public Functions

### simple_wallet(System::Dispatcher &dispatcher, const CryptoNote::Currency &currency, Logging::LoggerManager &log) - Constructor

This creates an instance of the simple_wallet class.
The dispatcher argument is defined in src/Platform/{Linux/Windows/OSX}/System/Dispatcher.cpp. That is, it is platform independent, and there is an implementation for each platform. Not sure what it does yet.

The currency argument contains all the information about TRTL's parameters. For example, the maximum amount of coins, the amount of TRTL per block, the number of decimal places, and much more. Check src/CryptoNoteConfig.h for more info.

This is a pretty simple constructor, it assigns the variables we passed in to the global class variables, sets up the log file (simplewallet.log), and assigns a few variables to their default values. Then, it sets up the handlers on the `m_consoleHandler` variable. It binds each of the simplewallet commands, like `balance`, `transfer`, `reset`, etc, to a function in the simple_wallet class. This is used both to print out how to use the commands (when you type `help` and it lists them commands and their usage), and to call the actual function when you type in the command.

### bool init(const boost::program_options::variables_map &vm)

This function is pretty large, and does the whole wallet setup. It starts by parsing the command line arguments, and checking that the daemon address/port/host cli arguments don't conflict. Then it checks if a wallet file to open or a new wallet file to create/import has been specified on the command line. If not, it will prompt the user for what they wish to do, open, generate, import, mnemonic import, or exit. Then, it asks the user for a wallet name to open/import/ etc.

We'll then do a little more error checking, that the user hasn't specified both wallet arguments, and that the wallet file they want to import/generate to doesn't already exist. Then we'll parse the daemon address if needed or set to their default values. Next, we'll read in the password if not specified on the cli. If we're importing/generating we'll prompt for the password twice, to make sure it's not typo'd, locking the user out of their wallet.

We then set up the node rpcproxy with the daemon host and port, and the logger. As you may recall, this is used for talking to the daemon. More error checking, that the node setup successfully. We give the node a pointer to the simple_wallet class, which allows it to call back into our functions when new data is available, for example, when the user receives a payment, it will call back into a simple_wallet function to print this out.

If we're generating a new wallet, we'll go ahead and do this, using the new_wallet() function, passing in the wallet filename and the password. More error checking occurs, and we print out the newly created wallet address to a file, with a .address file extension. For example, if the wallet was named `turtle`, the address file will be `turtle.address`. 

If we're importing a wallet, then we'll prompt the user for either the private spend and view key, or the mnemonic seed, as specified. If importing via mnemonics, we'll parse the mnemonic into a private spend key, then derive a private view key from that. If importing via keys, we'll parse them from strings into the keys themselves. If the private keys were specified on the command line, we'll skip this step. 

We'll then create the wallet, again using the new_wallet() function, this time with the private keys passed in as well. We'll write out an address file as well, as before.

Finally, if we're not generating, or importing, we'll attempt to open the wallet. This uses the tryToOpenWalletOrLoadKeysOrThrow() function. We pass in a reference to the WalletLegacy class, the password, the filename, and the logger. We'll give both the WalletLegacy and the node a pointer to our simple_wallet class again.

If on the cli we specified to quit after the open/import/generate operation, we'll exit instantly. If not, we'll exit this function and continue on to the console interface where users can type commands. 

### bool deinit()

### bool run()

### void stop()

### bool process_command(const std::vector<std::string> &args)

### std::string get_commands_str()

### const CryptoNote::Currency & currency() const

## Private Functions

### Logging::LoggerMessage success_msg_writer(bool color = false)

### Logging::LoggerMessage fail_msg_writer() const

### void handle_command_line(const boost::program_options::variables_map& vm);

### bool run_console_handler();

### bool new_wallet(const std::string &wallet_file, const std::string& password);

### bool new_wallet(Crypto::SecretKey &secret_key, Crypto::SecretKey &view_key, const std::string &wallet_file, const std::string& password);

### bool open_wallet(const std::string &wallet_file, const std::string& password);

### bool close_wallet();

### bool help(const std::vector<std::string> &args = std::vector<std::string>());

### bool exit(const std::vector<std::string> &args);

### bool start_mining(const std::vector<std::string> &args);

### bool stop_mining(const std::vector<std::string> &args);

### bool show_balance(const std::vector<std::string> &args = std::vector<std::string>());

### bool export_keys(const std::vector<std::string> &args = std::vector<std::string>());

### bool show_incoming_transfers(const std::vector<std::string> &args);

### bool show_payments(const std::vector<std::string> &args);

### bool show_blockchain_height(const std::vector<std::string> &args);

### bool listTransfers(const std::vector<std::string> &args);

### bool transfer(const std::vector<std::string> &args);

### bool print_address(const std::vector<std::string> &args = std::vector<std::string>());

### bool print_outputs_from_transaction(const std::vector<std::string> &args);

### bool save(const std::vector<std::string> &args);

### bool reset(const std::vector<std::string> &args);

### bool set_log(const std::vector<std::string> &args);

### bool ask_wallet_create_if_needed();

### std::string generate_mnemonic(Crypto::SecretKey &);

### void log_incorrect_words(std::vector<std::string>);

### bool is_valid_mnemonic(std::string &, Crypto::SecretKey &);

### void printConnectionError() const;

### virtual void initCompleted(std::error_code result) override;

### virtual void externalTransactionCreated(CryptoNote::TransactionId transactionId) override;

### virtual void synchronizationCompleted(std::error_code result) override;

### virtual void synchronizationProgressUpdated(uint32_t current, uint32_t total) override;

### virtual void connectionStatusUpdated(bool connected) override;

## Private Variables

As previously mentioned simplewallet makes heavy use of global header variables.

* std::string m_wallet_file_arg;
* std::string m_generate_new;
* std::string m_import_new;
* std::string m_import_path;
* std::string m_daemon_address;
* std::string m_daemon_host;
* uint16_t m_daemon_port;
* std::string m_wallet_file;
* std::string m_restore_view;
* std::string m_restore_spend;
* bool sync_from_zero;
* bool exit_after_generate;
* uint64_t sync_from_height; 
* std::unique_ptr<std::promise<std::error_code>> m_initResultPromise;
* Common::ConsoleHandler m_consoleHandler;
* const CryptoNote::Currency& m_currency;
* Logging::LoggerManager& logManager;
* System::Dispatcher& m_dispatcher;
* Logging::LoggerRef logger;
* std::unique_ptr<CryptoNote::NodeRpcProxy> m_node;
* std::unique_ptr<CryptoNote::IWalletLegacy> m_wallet;
* refresh_progress_reporter_t m_refresh_progress_reporter;
* bool m_walletSynchronized;
* std::mutex m_walletSynchronizedMutex;
* std::condition_variable m_walletSynchronizedCV;
