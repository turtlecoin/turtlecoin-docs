# Getting Started

## Downloading

Binary distributions can be found at https://github.com/turtlecoin/turtlecoin/releases/latest.

Select the appropriate file for the target platform (Windows, Mac, Linux). Windows binaries are provided in *.zip* format, while Mac and Linux are provided in *.tar.gz* format.

## Installing

### Installing on Windows

Extract the *.zip* file (`turtlecoin...-windows.zip`).

### Installing on Mac

Extract the *.tar.gz* file:

```bash
tar -xzf turtlecoin..-mac.tar.gz
```

### Installing on Linux

Extract the *.tar.gz* file: 

```bash
tar -xzf turtlecoin..-linux.tar.gz
```

## Synchronizing the Blockchain

Running `TurtleCoind` will start the *TurtleCoind* network daemon, which will connect to the network and begin downloading and verifying the TurtleCoin blockchain.  

Because the blockchain is constantly growing, the file size is always increasing, and *TurtleCoind* must verify each block (CPU intensive). To save time, consider downloading a cached 'bootstrap' of the blockchain (see [Bootstrapping the Blockchain](Bootstrapping-the-Blockchain) for more info).

In **versions 0.4.3+** you can sync a fresh chain from 0 much quicker by using the `--load-checkpoints checkpoints.csv` argument of `TurtleCoind`. Download the latest checkpoints.csv here: https://github.com/turtlecoin/checkpoints/raw/master/checkpoints.csv


### Windows

Run the `TurtleCoind.exe` executable extracted from the Windows binary zip:

```powershell
TurtleCoind.exe
```

### Mac

Run the `TurtleCoind` binary extracted from the Mac binary tarball:

```bash
./TurtleCoind
```

### Linux

Run the `TurtleCoind` binary extracted from the Linux binary tarball:

```bash
./TurtleCoind
```

## Using Simplewallet

With `TurtleCoind` still running in the background or another terminal/shell/command prompt, open Simplewallet in a new shell:

#### Windows

Run the `simplewallet.exe` executable extracted from the Windows binary zip:

```powershell
simplewallet.exe
```

#### Mac

Run the `simplewallet` binary extracted from the Mac binary tarball:

```bash
./simplewallet
```

#### Linux

Run the `simplewallet` binary extracted from the Linux binary tarball:

```bash
./simplewallet
```

### Creating a Wallet

In the running *simplewallet* client:  
Press `G` to generate new wallet.  
Enter a filename for the wallet (default is _wallet.bin_).  
Enter a passphrase for the wallet.

```
Welcome, please choose an option below:

        [G] - Generate a new wallet address
        [O] - Open a wallet already on your system
        [S] - Regenerate your wallet using a seed phrase of words
        [I] - Import your wallet using a View Key and Spend Key
        [V] - Import a view only wallet (Unable to send transactions)

or, press CTRL_C to exit: G
What would you like to call your new wallet?: MyWallet
Give your new wallet a password: **********
Confirm your new password: **********
Welcome to your new wallet, here is your payment address:
TRTLv_this_is_your_public_address_ok_to_share_key_Rq6WpB

Please copy your secret keys and mnemonic seed and store them in a secure location:
Private spend key: really_long_random_spend_key_do_not_share_this
Private view key: really_long_random_view_key_do_not_share_this
Mnemonic seed: random_words_mnemonic_seed_do_not_share_this

If you lose these your wallet cannot be recreated!

Your wallet is syncing with the network in the background.
Until this is completed new transactions might not show up.
Use bc_height to check the progress.

Use the help command to see the list of available commands.
Use exit when closing to ensure your wallet file doesn't get corrupted.

[TRTL MyWallet]:
```

### Opening a Wallet

In the running *simplewallet* client:  
Press `O` to open an existing wallet file.  
Enter the filename given for the wallet when it was created.  
Enter the passphrase given for the wallet when it was created.

```
Welcome, please choose an option below:

        [G] - Generate a new wallet address
        [O] - Open a wallet already on your system
        [S] - Regenerate your wallet using a seed phrase of words
        [I] - Import your wallet using a View Key and Spend Key
        [V] - Import a view only wallet (Unable to send transactions)

or, press CTRL_C to exit: O
What is the name of the wallet you want to open?: MyWallet
Enter password: **********

Making initial contact with TurtleCoind.
Please wait, this sometimes can take a long time...

Your wallet TRTLv_this_is_your_public_address_ok_to_share_key_Rq6WpB has been successfully opened!

Scanning through the blockchain to find any new transactions you received whilst your wallet wasn't open.
Please wait, this may take some time.

XXX of XXXXXX
...
XXXXXX of XXXXXX

[TRTL MyWallet]:
```

### Viewing Wallet Address

To view a wallet's public address, in the running _simplewallet_ client, after opening a wallet, type `address` and press `enter`.

```
[TRTL MyWallet]: address
TRTLv_this_is_your_public_address_ok_to_share_key_Rq6WpB
[TRTL MyWallet]:
```

### Exporting Keys

Each TurtleCoin  wallet is, essentially, just a pair of keys (*View Key* and *Spend Key*) from which the public address is derived.

It is **very** important to export these keys and back them up somewhere that is safe and secure (meaning somewhere reliable/permanent that no one else can access). In the event of a lost or corrupted wallet file, computer crash, etc., the *View Key* and *Spend Key* are the only way to restore a wallet and recover the funds it holds.

Remember that **anyone with access to the View Key and Spend Keys will be able to access this wallet and take the funds it holds! Anyone with these keys will also be able to view all prior transactions from this wallet. Keep them secure!**

In the running *simplewallet* client, after opening a wallet, type `export_keys` and press `enter`.  
The *View Key* and *Spend Key* will appear. Copy them and store them **safely and securely**.

```
[TRTL MyWallet]: export_keys
Enter password: **********
Private spend key: really_long_random_spend_key_do_not_share_this
Private view key: really_long_random_view_key_do_not_share_this
Mnemonic seed: random_words_mnemonic_seed_do_not_share_this
[TRTL MyWallet]:
```

### Viewing Wallet Balance

In the running _simplewallet_ client, after opening a wallet, type `balance` and press enter to see the wallet's balance.

```
[TRTL MyWallet]: balance
Available balance: 1000.10 TRTL
Locked (unconfirmed) balance: 100.10 TRTL
Total balance: 1100.10 TRTL
[TRTL MyWallet]:
```

### Sending TurtleCoin Transactions

In the running _simplewallet_ client, after opening a wallet, type:

```
transfer <mixin> <destination_address> <amount>
```

Example:

```
transfer 8 TRTLuy1h55aUuVp7HUcv16biZEArk8RRH93KMWBFCMjijj5iSraHyCMd3Eu1H7b8aZQTeK4rhfm8cSgH2WWVN5Rt3am4Z2BWTY6 100000000
```

Mixin is how many times a transaction is "mixed" with others for obfuscation and privacy. Most people suggest a mixin of 5 or more. Larger mixin's will take longer to be confirmed unless a higher fee is used. A mixin of 0 can be used to have a non private transaction.

You can also just type `transfer` and press `enter` to be walked through a wizard that makes transfers easier.

#### Payment ID

Because transactions on the TurtleCoin blockchain are privatized, in some situations a payment ID is necessary for the recipient to be able to determine where the payment came from, for instance when depositing to an exchange or other service.  
To send a transaction with a payment ID, use the `-p` flag:

```
transfer 8 TRTLuy1h55aUuVp7HUcv16biZEArk8RRH93KMWBFCMjijj5iSraHyCMd3Eu1H7b8aZQTeK4rhfm8cSgH2WWVN5Rt3am4Z2BWTY6 100000000 -p abcdefghijklmnop
```

Note that, typically, the service/recipient will generate and provide the required payment ID.

### Saving the Wallet

'Live' wallets loaded into the *simplewallet* client must be synced with the blockchain in order to properly calculate balance, view transaction history, etc. It is important to properly save the wallet data before exiting *simplewallet* so that the synchronized data is not lost.

To save a wallet's data, in the running *simplewallet* client, with an open wallet, type `save` and press `enter`

```
[TRTL MyWallet]: save
Saving.
Saved.
[TRTL MyWallet]:
```

### Help

You can always type `help` to see a list of commands and a short description of each command.

```
[TRTL MyWallet]: help
Available commands:
help                     List this help message
reset                    Discard cached data and recheck for transactions
bc_height                Show the blockchain height
balance                  Display how much TRTL you have
export_keys              Export your private keys
address                  Displays your payment address
exit                     Exit and save your wallet
save                     Save your wallet state
incoming_transfers       Show incoming transfers
outgoing_transfers       Show outgoing transfers
list_transfers           Show all transfers
quick_optimize           Quickly optimize your wallet to send large amounts
full_optimize            Fully optimize your wallet to send large amounts
transfer                 Send TRTL to someone
[TRTL MyWallet]:
```
