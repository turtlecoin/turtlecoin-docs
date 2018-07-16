# Forking TurtleCoin


So you want to fork TurtleCoin, huh?

This guide will help you change the necessary sections of the code to set up your coin how you like it.

Firstly, lets quickly talk about *licenses*.

## Licences

When you're poking around the codebase, you might see something like this:

```
// Copyright (c) 2012-2017, The CryptoNote developers, The Bytecoin developers
// Copyright (c) 2014-2018, The Monero Project
// Copyright (c) 2018, The TurtleCoin Developers
// 
// Please see the included LICENSE file for more information.
```

At the top of each file. We ask when you fork us to make sure you leave these license headers intact.
When we're programming on codebases like this, we're standing upon the shoulders of giants,
and it's both polite, and a legal requirement of the licenses used, to credit the other contributors to the code.

As you may be aware, the CryptoNote white paper set out the initial specification for CryptoNote coins.
The ByteCoin developers created the first implementation of this specification working closely with the CryptoNote developers,
and this is what has become ByteCoin today.
This was forked early on to become Bitmonero, and then Monero.
The Monero developers have contributed back significant chunks of code to the original ByteCoin codebase,
and of course, they maintain their own repositories and code.

The ForkNote Project was created as a fork of ByteCoin, to create a way to fork ByteCoin, easily
by separating the needed constants and strings out into a separate file.

TurtleCoin then forked the Forknote Project and made our own changes, some of which were then contributed back to ForkNote.

So, make sure if you're doing a find and replace that all of these lines remain intact.
You can of course start adding your own copyright line, for example,

```
// Copyright (c) 2012-2017, The CryptoNote developers, The Bytecoin developers
// Copyright (c) 2014-2018, The Monero Project
// Copyright (c) 2018, The TurtleCoin Developers
// Copyright (c) 2018, My Super Cool Coin Developers
// 
// Please see the included LICENSE file for more information.
```

Ok, now we understand about licenses, let's get the code!


## The actual forking process

* The easiest way to fork TurtleCoin, is to start by making a GitHub account.
You can do this [here](https://github.com/join) if you don't have an account already.

* Make sure you're signed in. Next, head over to the TurtleCoin repo, and hit `Fork` in the top right corner.

* It should look something like this:

  ![Fork it!](https://i.imgur.com/ZNUS8ED.png)

* Next, you want to get the source code on your computer.
  Head over to the repository you just forked, and click the `Clone or Download` button.
  We want to clone the source code, so we can make changes, then push it back up to GitHub.

* It should look something like this:

  ![Clone it!](https://i.imgur.com/UlqtvF6.png)

* Now, take this URL shown, and copy it.

* Next, you will need to download a git client.
  If you are a windows user, I would suggest [Git  for Windows](https://gitforwindows.org/),
  whilst if you are a Linux or Mac user, you should have this either already installed,
  or can install it from your repos or with brew.

* Once you have opened up git bash or a terminal, you should be able to type `git clone URL`,
  where `URL` is the link you copied earlier, from GitHub.

* It should look something like this:

![Bop it!](https://i.imgur.com/Fv435iR.png)

* Great, now the code is on our computer. We're almost ready to start changing it!


Next, I'd like to talk quickly about *atomic units*. You can skip this section if you're a pro already.

## Atomic Units

All of the constants in CryptoNoteConfig.h and most of the code, that refers to the actual amount of coins, is in *Atomic Units*.

**What does this mean?**

Well, if we're talking about TurtleCoin, we have 2 decimal places.
That means, to get the atomic units of an amount of TRTL, we need to multiply the amount by 100, or 10^2.

If we have 10.23 TRTL, this is 1023 in atomic units. Atomic units have no decimal point,
and so can be represented as an integer, in the code.
Some different currencies have a special name for their atomic units, to make it easier to talk about.
In Bitcoin, this is called a *satoshi*, and in TurtleCoin, it is called a *shell*.

**Why is this helpful?**

Computers are unable to accurately store floating point numbers (or, numbers with a decimal point),
and so performing math on them is often problematic.

For example, let's say we want to split 10.00 TRTL between 3 people.
If you perform `10.00 / 3` in a programming language, you will probably see a result similar to `3.3333333333333335`.
Where did that 5 come from?! The computer is incapable of storing this number to its full amount of decimal places.

**How do we fix this?**

Now, let's demonstrate how we can solve this issue, with *atomic units*.
Again, we have 10.00 TRTL, and we want to split it between 3 people.
Recall that to get the number of atomic units, we need to multiply by 100.
So, we have a value of 1000 in atomic units. Now we can perform *integer division* instead.
Let's perform `1000 / 3` - make sure you are using *integral division* in your programming language -
and you should get a result of `333`.

That's correct, each person can only get 333 units, or, if we want to convert back to TRTL, 3.33 TRTL.
You might have noticed we're missing one atomic unit, or 0.01 TRTL.
We have to use remainders when dealing with atomic values, as one atomic unit cannot be split down anymore.

So, the code might look something like this, when using atomic units.

```cpp
/* 10.00 TRTL in atomic units */
float trtl = 10.00;
int shells = static_cast<int>(trtl) * 100;

int numPeople = 3;

int shellsPerPerson = shells / numPeople;
int remainder = shells % numPeople;

std::cout << "Splitting " << trtl << " TRTL" between << numPeople << " gives "
          << (shellsPerPerson / 100) << " TRTL each, with " << (remainder / 100)
          << " TRTL spare." << std::endl;
```

Usually, we will *always* use atomic units in our code,
and only convert back to the expected representation with a decimal point when we print things to the user.

Ok, we know what atomic units are, lets go change some stuff!

## Changing the name of your binaries, i.e. CMakeLists.txt

We're gonna start with some boring stuff - changing the name of your binaries.

Open up CMakeLists.txt in the `src/` folder. 

Note that there is also a CMakeLists.txt in the root directory, this is not the file you want!

The lines we want to be changing are at the very bottom of the file.

```
set_property(TARGET Daemon PROPERTY OUTPUT_NAME "TurtleCoind")
set_property(TARGET zedwallet PROPERTY OUTPUT_NAME "zedwallet")
set_property(TARGET PaymentGateService PROPERTY OUTPUT_NAME "walletd")
set_property(TARGET PoolWallet PROPERTY OUTPUT_NAME "poolwallet")
set_property(TARGET Miner PROPERTY OUTPUT_NAME "miner")
```

To change the name of a binary, change the final string in one of these lines. For example:

`set_property(TARGET Daemon PROPERTY OUTPUT_NAME "AppleCoind")`

Save the file, and recompile.


## Changing version numbers

Another boring one - changing the version numbers. This is the thing that
appears when you start up TurtleCoind, e.g. `Welcome to TurtleCoin v0.6.4.1264`

Open up `src/version.h.in`.

The values are pretty self-explanatory. Set `PROJECT_NAME` to the name of your coin,
`PROJECT_SITE` to your coins website, and `PROJECT_COPYRIGHT` to your copyright string.

Next, the version numbers.

`APP_VER_MAJOR` determines the first part of the version.
You usually increment this value if you make a substantial change to your code,
which potentially breaks APIs, wallet formats, blockchain formats, and so on.

`APP_VER_MINOR` determines the second number of the version.
This is usually incremented for significant upgrades, such as hard forks.

`APP_VER_BUILD` determines the final number of the version.
This is usually incremented for small changes, such as bug fixes, speedups, small wallet changes, and so on.

These numbers are then combined to form the full version number, in the format:

`APP_VER_MAJOR`.`APP_VER_MINOR`.`APP_VER_BUILD`.

For example, if we set the 3 values to 0, 6, and 4, we would end up with a version number of 0.6.4.

A good start for your project is 0.0.1, so

```
#define APP_VER_MAJOR 0
#define APP_VER_MINOR 0
#define APP_VER_REV 1
```

## CryptoNoteConfig.h

Ok, now onto the fun stuff!

Open up the file `CryptoNoteConfig.h`, located in the `src` folder.

Let's start at the top. We'll only focus on the constants which need changing, as some of them are fine to keep as they are.  


#### `const uint64_t DIFFICULTY_TARGET = 30; // seconds`<br/><br/>

This is how fast you want blocks to be. In TurtleCoin, we have blocks on average every 30 seconds.
If you wanted blocks to be every 2 minutes, you would set this to be:

- `const uint64_t DIFFICULTY_TARGET = 120; // seconds`  





#### `const uint64_t CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 3914525;`<br/><br/>

This defines what the addresses will start with. In TurtleCoin, this decodes to `TRTL`.

So how do we get this prefix? We can use this [handy tool](https://cryptonotestarter.org/tools.html).

![Prefix Generator](https://i.imgur.com/F2ZARZ9.png)

Scroll down to the prefix generator, and enter your desired address prefix.
Note that some characters are disabled, so you may not be able to get the perfect prefix.
For example, `aPPLE` is allowed, but `APPLE` isn't.

You may note that TRTL's prefix is a number, while the output of this generator is not.
These values are in hex format, and will automatically be decoded into a number when compiled,
though you can use any standard hexadecimal to decimal converter to change the prefix into a number if you prefer.

So, if we wanted our prefix to be 'aPPLE', we would set this to be:

- `const uint64_t CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 0x1e1f8cc7;`<br/><br/>






#### `const uint32_t CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW = 40;`<br/><br/>

This value defines how many blocks need to be followed in the current chain
before releasing the reward for mining a block for spending.

We would suggest you set this value to be roughly equal to 20 minutes - in
TurtleCoins case that's exactly what we have - 40 blocks * 30 seconds = 20
minutes.

If you have a block time of 2 minutes for example, we would set this value
to 10.

- `const uint32_t CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW = 10;`<br/><br/>





#### `const uint64_t MONEY_SUPPLY = UINT64_C(100000000000000);`<br/><br/>

This line is a pretty significant one. It determines the max supply of coins your cryptocurrency will have.
In TurtleCoin, this is 1 trillion TRTL, but as previously mentioned, all these values are in *atomic units*,
so this value also includes the amount after the decimal point.
Thus, this value is 1 trillion * 100, as TurtleCoin has 2 places after the decimal point.

Therefore, we suggest you decide how many decimal places your coin has, before filling in this value.

If you want your coin to have 6 decimal places, and the total supply to be ten thousand (10,000),
the MONEY_SUPPLY value would be: `10^6 (or 1,000,000) * ten thousand (10,000) = 10000000000`.

So, we would then pop this value in to give us: 

- `const uint64_t MONEY_SUPPLY = UINT64_C(10000000000);`<br/><br/>





#### `const uint32_t ZAWY_DIFFICULTY_BLOCK_INDEX = 187000;`<br/><br/>

Next up we have the height where we want the first zawy difficulty algorithm to go live.
The difficulty algorithm determines how hard it is to mine a block based on the speed the previous blocks came in.

This difficulty algorithm has had some flaws found with it, and a newer zawy algorithm is now in use.
I would suggest you set this to `0`, to instantly activate it,
and then we will switch to the newer zawy algorithm directly at the height of `1`.

- `const uint32_t ZAWY_DIFFICULTY_BLOCK_INDEX = 0;`<br/><br/>





#### `const uint64_t LWMA_2_DIFFICULTY_BLOCK_INDEX = 620000;`<br/><br/>

This value sets the height for the newer zawy algorithm that was previously mentioned.
I would suggest you set this value to `1`, to activate it instantly after the previous algorithm.
This difficulty algorithm is much more resistant to pulse mining and time warping.

- `const uint64_t LWMA_2_DIFFICULTY_BLOCK_INDEX = 1;`<br/><br/>




#### `const unsigned EMISSION_SPEED_FACTOR = 25;`<br/><br/>

This value defines how fast the maximum supply will be emitted.
A smaller value means the supply will be emitted faster,
and a higher values means it will take longer for the supply to be released.
You can again use the website [linked earlier](https://cryptonotestarter.org/tools.html)
to experiment with different values for the emission and how they will affect how long it takes for the supply to be distributed.

If we wanted a fast emission, we could set this to a value like 21.


- `const unsigned EMISSION_SPEED_FACTOR = 21;`<br/><br/>




#### `const size_t CRYPTONOTE_DISPLAY_DECIMAL_POINT = 2;`<br/><br/>

This value defines how many numbers there are after the decimal point in your currency.
In TurtleCoin, this value is 2, so we have amounts like 10.23 TRTL.
If we set this to 6, we would have an amount like 10.234567 TRTL instead.
Remember, as previously mentioned, this affects your money supply and other parameters which depend upon atomic units.

- `const size_t CRYPTONOTE_DISPLAY_DECIMAL_POINT = 6;`<br/><br/>





#### `const uint64_t MINIMUM_FEE = UINT64_C(10);`<br/><br/>

This value defines what the minimum fee a user must spend to send a transaction is.
Note this doesn't apply to fusion transactions.

A lower value allows cheaper transactions, but can mean your network can be spammed by lots of small transactions.

A happy medium is generally desired, though you could optionally raise this at a later date.

This value is defined again in *atomic units*,
so multiply your desired minimum fee by 10 * the number of numbers after the decimal point in your coin.


- `const uint64_t MINIMUM_FEE = UINT64_C(1000);`<br/><br/>




#### `const uint64_t MINIMUM_MIXIN_V1 = 0;`<br/><br/>

This section will cover all of these, because they are all related:

```
const uint64_t MINIMUM_MIXIN_V1                              = 0;
const uint64_t MAXIMUM_MIXIN_V1                              = 100;
const uint64_t MINIMUM_MIXIN_V2                              = 7;
const uint64_t MAXIMUM_MIXIN_V2                              = 7;

const uint32_t MIXIN_LIMITS_V1_HEIGHT                        = 440000;
const uint32_t MIXIN_LIMITS_V2_HEIGHT                        = 620000;

const uint64_t DEFAULT_MIXIN = MINIMUM_MIXIN_V2;
```

These set the mixin values that are allowed on the network, and at what height they are applied.
If you want a private coin from the get-go,
I would suggest setting MIXIN_LIMITS_V1_HEIGHT to 0, and MIXIN_LIMITS_V2_HEIGHT to 1.
Then, set the MINIMUM_MIXIN_V1/V2 and MAXIMUM_MIXIN_V1/V2 values as appropriate.

Don't set a value that is *too* high, otherwise your network will have difficulty processing transactions.
You shouldn't set the minimum anymore than 100, and sane values would be somewhere in the 0 - 30 range.

`DEFAULT_MIXIN` is used to set the mixin value used in zedwallet, so set it to a sane value.

Make sure your minimum is less than or equal to your maximum!

```
const uint64_t MINIMUM_MIXIN_V1                              = 0;
const uint64_t MAXIMUM_MIXIN_V1                              = 100;
const uint64_t MINIMUM_MIXIN_V2                              = 7;
const uint64_t MAXIMUM_MIXIN_V2                              = 7;

const uint32_t MIXIN_LIMITS_V1_HEIGHT                        = 0;
const uint32_t MIXIN_LIMITS_V2_HEIGHT                        = 1;

const uint64_t DEFAULT_MIXIN = MINIMUM_MIXIN_V2;
```
<br/><br/>




#### `const uint64_t DEFAULT_DUST_THRESHOLD  = UINT64_C(10);`<br/><br/>


This section will cover all of these, because they are all related:

```
const uint64_t DEFAULT_DUST_THRESHOLD = UINT64_C(10);
const uint64_t DEFAULT_DUST_THRESHOLD_V2 = UINT64_C(0);

const uint32_t DUST_THRESHOLD_V2_HEIGHT = MIXIN_LIMITS_V2_HEIGHT;
```

The dust threshold determines the smallest amount that can be sent in a transaction,
and can lead to lots of tiny amounts accumulating in your wallet which cannot be sent.

Setting the dust threshold to zero prevents this, but has a side effect of making transactions slightly bigger.

I suggest setting DUST_THRESHOLD_V2_HEIGHT to 0, to make small amounts always spendable.

- `const uint32_t DUST_THRESHOLD_V2_HEIGHT = 0;`<br/><br/>




#### `const uint32_t UPGRADE_HEIGHT_V4 = 350000;`<br/><br/>


This value determines when the mining algorithm will transition to Original CryptoNight,
also known as CN v0, to CryptoNight Lite v1, also known as CryptoNight Lite v7.

Original CN currently allows ASICs on the network, so we suggest you set this upgrade height to 3,
to near instantly switch to the ASIC resistant CryptoNight Lite v1.

However, if you would prefer to stay on original CryptoNight,
you can either find where this variable is used and patch it out, or,
you can set the upgrade height to `std::numeric_limits<uint32_t>::max()`

(You will probably need to add `#include <limits>` to the top of the file if you choose this option)

- `const uint32_t UPGRADE_HEIGHT_V4 = 3; // Upgrade height for CN-Lite Variant 1 switch.`<br/><br/>




#### `const uint64_t FORK_HEIGHTS[] =`<br/><br/>

This variable is used by the `status` command in zedwallet and TurtleCoind to notify users when a fork is upcoming,
or their software is outdated. We suggest you set up some regular forks ahead of time,
if you then need to update the software this will let users know when to expect this.

If you wish to not pre-prepare any forks, you can empty the list.

This will set the status command to notify of a fork at 100k and 300k blocks.

- ```
  const uint64_t FORK_HEIGHTS[] =
  {
    100000,
    300000
  };
  ```
  <br/><br/>
  


#### `const uint8_t CURRENT_FORK_INDEX = FORK_HEIGHTS_SIZE == 0 ? 0 : 3;`<br/><br/>

This value relates to the previous FORK_HEIGHTS array.
It determines which fork heights the software supports. (This value is zero-indexed).
For example, if our `FORK_HEIGHTS = {100, 200, 300}` and `CURRENT_FORK_INDEX = 1`
then the software will support the fork at FORK_HEIGHTS[1] - which is the fork at 200 blocks.

We have a ternary to check FORK_HEIGHTS_SIZE so if you wish to empty the FORK_HEIGHTS array,
you don't need to set a CURRENT_FORK_INDEX.

- `const uint8_t CURRENT_FORK_INDEX = FORK_HEIGHTS_SIZE == 0 ? 0 : 1;`<br/><br/>




#### `const char CRYPTONOTE_NAME[] = "TurtleCoin";`<br/><br/>

This is an obvious one. It's the name of your coin!

- `const char CRYPTONOTE_NAME[] = "SuperCoolCoin";`<br/><br/>





#### `const int P2P_DEFAULT_PORT` and `const int RPC_DEFAULT_PORT`

These values define the ports that are used by the daemon to communicate.
There is no real issue with using the same values as the TurtleCoin software,
but if you are running both a TurtleCoin daemon and your own daemon, you would
have to change the port one uses, as they will both need control over the
port.

Ports can be in the range of 0 - 65535, however using ports in the 0 - 1023
range is not recommended, as on unix systems a program will require administrative
permissions to use these ports.

- `const int P2P_DEFAULT_PORT = 10101;`
- `const int RPC_DEFAULT_PORT = 10102;`
<br/><br/>




#### `const static boost::uuids::uuid CRYPTONOTE_NETWORK =`

This value sets the 'Network ID' of your coin. This ensures your network
will not respond to network connections from other coins, such as TurtleCoin.

This value is using hex values, which should be in the form 0x?? where `?` is
a valid hex value (0-9, a-f).

- ```
  const static boost::uuids::uuid CRYPTONOTE_NETWORK =
  {
      {  0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff, 0x00  }
  };
  ```
<br/><br/>



#### `const char* const SEED_NODES[] = {`<br/><br/>

This variable defines the seed nodes daemons will connect to on the very first launch,
before they are aware of any peers. You will need to run these on different servers,
to bootstrap other nodes. Once your coin is established,
it might be a good idea to ask other trusted community members to host some seed nodes,
to help decentralize your coin.

- ```
  const char* const SEED_NODES[] =
  {
      "111.111.111.111:11897",
      "222.222.222.222:11897",
  };
  ```
  <br/><br/>
  
  
  

## Premine

You may have noticed we skipped 

```
const uint64_t GENESIS_BLOCK_REWARD = UINT64_C(0);
```

and

```
const char GENESIS_COINBASE_TX_HEX[] = "010a01ff000188f3b501029b2e4c0281c0b02e7c53291a94d1d0cbff8883f8024f5142ee494ffbbd088071210142694232c5b04151d9e4c27d31ec7a68ea568b19488cfcb422659a07a0e44dd5";
```

I wanted to put these in a different section,
because generating a premine requires a tad more effort than the previous config tweaks.

To start with, put your premine amount in `const uint64_t GENESIS_BLOCK_REWARD = UINT64_C(0);`,

e.g.

- `const uint64_t GENESIS_BLOCK_REWARD = UINT64_C(100);`

As always, this value is in *atomic units*. The above code would premine 1 TRTL, assuming 2 decimal places are being used.

Next, compile your code.

Once it has compiled, use zedwallet to generate an address. Don't worry about running the daemon, we don't need that yet.

Save this address somewhere, and make sure to save your wallet keys somewhere safe as well.

Now, take this address, and run your daemon with the following arguments: 

`--print-genesis-tx --genesis-block-reward-address <premine wallet address>`

Replacing <premine wallet address> with the address you just generated.

For example:

```
TurtleCoind --print-genesis-tx --genesis-block-reward-address TRTLv2Fyavy8CXG8BPEbNeCHFZ1fuDCYCZ3vW5H5LXN4K2M2MHUpTENip9bbavpHvvPwb4NDkBWrNgURAd5DB38FHXWZyoBh4wW
```

This will print out a long hash. Take this hash, and replace the value of

`const char GENESIS_COINBASE_TX_HEX[] =` with this value.

- ```
  const char GENESIS_COINBASE_TX_HEX[] = "012801ff000100023f6cd7a559d3b5d88fc6396a7a261c70a5212608bdeeb73ac53ff5dad157326221015bf857a5c95d6066c23800a6563e79acc85d450d7563cf68995d1c5c92b1567a";
  ```

Now, recompile your code, and set up your seed nodes.
Once you start mining, the premine should appear in the wallet you previously created.
Make sure you have your private keys to restore this wallet.

## WalletConfig.h

Next up to modify is WalletConfig.h, located in `src/zedwallet/WalletConfig.h`

These fields are all pretty well documented already, but we'll go over them anyway.<br/><br/>

#### `const std::string addressPrefix = "TRTL";`<br/><br/>

This value is used to check inputted addresses are correct.
This value corresponds to the value you chose for your address prefix earlier,
in `const uint64_t CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX =`

- `const std::string addressPrefix = "aPPLE";`<br/><br/>




#### `const std::string ticker = "TRTL";`<br/><br/>

This refers to the 'short name' your coin has, which is often used as a ticker on exchanges.
For example, in TurtleCoin this is TRTL, in Monero this is XMR, and in Bitcoin this is BTC.

- `const std::string ticker = "APPLE";`<br/><br/>




#### `const std::string daemonName = "TurtleCoind";`<br/><br/>

This variable determines what the name of your daemon is.
We'll talk about changing the names of the executables generated in the `CmakeLists.txt` section.
We'll skip mentioning `walletName`, and `walletdName` as these both follow the same format.

- `const std::string daemonName = "AppleCoind";`<br/><br/>



#### `const std::string contactLink = "http://chat.turtlecoin.lol";`<br/><br/>

This value is used to let the user know where they can get support if their wallet gets stuck whilst syncing.
In our case, this is the TurtleCoin discord. Maybe you have a forum or an IRC chat instead?

- `const std::string contactLink = "https://applecoin.com/livechat"`<br/><br/>




#### `const long unsigned int standardAddressLength = 99;`

This value is used to verify inputted addresses are correct.
You can easily get this value by compiling, generating an address with zedwallet, and checking how long it is.


- `const long unsigned int addressLength = 100;`<br/><br/>





#### `const long unsigned int integratedAddressLength = 236;`<br/><br/>

This value is used to verify inputted addresses are correct.
An integrated address is an address which also contains an embedded payment ID,
to alleviate users from having to remember to supply one with the transaction.

You can easily get this value by compiling, generating an address with zedwallet,
then using the `make_integrated_address` command, and checking how long it is.

You can use your own address with this command, and any payment ID.
If you don't know how to generate a payment ID, here's a random one for you to use.

`8eba031ca60bf9b9f680309819bddf071e619c53ff71766e48e365812e229452`

- `const long unsigned int integratedAddressLength = 237;`<br/><br/>



#### `const uint64_t defaultMixin = CryptoNote::parameters::DEFAULT_MIXIN;`<br/><br/>

This sets the mixin value to be used with transactions.
Make sure this is in the bounds you set earlier, with `MINIMUM_MIXIN_V1/V2` and `MAXIMUM_MIXIN_V1/V2`.


- `const uint64_t defaultMixin = 7;`<br/><br/>




#### `const uint64_t defaultFee = CryptoNote::parameters::MINIMUM_FEE`<br/><br/>

If you want to set a higher default fee, perhaps to make transactions go through quicker, you can do that here.
As usual, this is in *atomic units*.
You may also wish to change `const uint64_t minimumFee = CryptoNote::parameters::MINIMUM_FEE;`
to prevent users from sending a lower fee than desired.

Remember this limit is only enforced by zedwallet, and the user can change the limit and recompile,
or use a different wallet program.
If you want to enforce higher fees across the network,
change the value of `CryptoNote::parameters::MINIMUM_FEE` in `CryptoNoteConfig.h`.


- `const uint64_t defaultFee = 100;`<br/><br/>




#### `const bool mixinZeroDisabled = true;`<br/><br/>

Is a mixin of zero allowed on the network? If at some point a mixin of zero will be disabled,
but that point is at a later fork, still set this to `true`.

If you set this to true, you can change the value of

```
const uint64_t mixinZeroDisabledHeight = CryptoNote::parameters::MIXIN_LIMITS_V2_HEIGHT;
```

To determine what block height a mixin of zero gets disabled.
In TurtleCoin's case, this was disabled at block 620k,
but being a new network, you have the advantage of being able to disable a mixin of zero much earlier,
or even from the launch of your network.

Again, this is only a client-side limitation.
Ensure you have set your mixin limits in `CryptoNoteConfig.h` so that the network will enforce the mixin limits. Any ideas you always want to happen, need to be done at the network level, else custom daemons/wallets etc. can be written to avoid those ideas/limits.

If you want to allow zero mixins, then `mixinZeroDisabledHeight` does nothing.

- ```
  const bool mixinZeroDisabled = true;
  const uint64_t mixinZeroDisabledHeight = 0;
  ```
  <br/><br/>
  
  
  



## Setup

Ok, so you've finished tweaking all the configs, and now you're ready to go!
To start with, you will need to compile your code. See the compiling section below.

Make sure you've got the IPs of your seed nodes filled in in the config,
3 daemons need to be connected to the network for your coin to work.

Once you've compiled the code on all your machines,
you can start up your daemon.
If you are unable to connect to the seed nodes,
you will see something like `Failed to connect to seed nodes` in your daemon output.

Ensure your firewalls are not preventing the daemon connection,
you may need to open the p2p and RPC ports for the daemon, which by default are 11898 and 11897.

If your daemons are now talking to each other, you can start mining, and launch your blockchain!

You can use the solo mining `miner` executable for this.
From a command prompt or terminal, launch the miner like so: `miner --threads 1 --log-level 3 --address <your address>`,
replacing <your address> with an address you have generated and control.

You can, of course, increase the threads value, however as you are the only one currently mining on the network,
there is not much point in that yet!

E.g.

```
./miner --threads 8 --log-level 3 --address TRTLuyTvsJZjAsbtgbYmZeV1pb43dXqcv1jNdYNwokv8GUa1ZbYzivzg2gEgXeAfUqJF12APf3Rq89UneaQKiZ1nGW1vYqkGb8Y
```

If you've done this correctly, you should see output like this:
`Block successfully submitted, hash xxxx`, and in your daemon window,
you should see the `New block detected` value increasing in height.

Congratulations!

## Compiling

You can always find the latest instructions on how to compile TurtleCoin on our
[GitHub](https://github.com/turtlecoin/turtlecoin#how-to-compile).


## Support, Questions?

Something not clear? Head over to our [Discord](http://chat.turtlecoin.lol) and ask in the #help channel,
and hopefully, someone will be able to help you out. 

Let us know if something is wrong with this guide, or missing, so we can update it and make it better!

Good luck with your new coin!
