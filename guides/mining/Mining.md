# Mining

Mining TurtleCoin is fun, fast, and easy. This guide will help you get started.

## Mining Software

TurtleCoin can be mined with a number of mining tools, particularly just about any Monero or Cryptonote-compatible miner. Totally radical, dude!

### XMR-Stak

#### Downloading and Installing

##### Windows

1. Download and install [XMR-Stak Unified Miner](https://github.com/fireice-uk/xmr-stak/releases/latest) - This will auto-detect your hardware, and tune everything for you.

2. Make a folder called **TurtleCoin Miner** on your desktop and unzip the file you just downloaded for XMR-Stak in there.

3. Double-click on `xmr-stak.exe`

4. Click yes when it asks if you want to run as Administrator. This is so that the program can see what hardware you're running.

##### Linux

Native binaries may be available for your distribution's package manager. If no binaries are available, or you prefer to compile, see https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile.md and https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_Linux.md.

##### Mac

See https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile.md and https://github.com/fireice-uk/xmr-stak/blob/master/doc/compile_MacOS.md

#### XMR-Stak Setup and Configuration

Upon first launching XMR-Stak, the software will ask you several setup and configuration questions.

1. `Currency: 'monero' or 'aeon'?`  
Enter `monero`

2. `Pool address:`  
Choose a pool from any of the [available pools](#mining-pools) that is **closest to you** and enter its URL (you will be able to add more later)

3. `Username (Wallet address or pool username):`  
Enter your wallet's public TRTL address * .  
 * If you have not yet downloaded and ran the TurleCoin core sofwate to sync the blockchain and create a wallet, you can make a [paper wallet]( http://turtlecoin.lol/wallet) to start mining toward now, and import the wallet later.

4. `Password:`  
Enter `x`

5. `Does this pool port support TLS/SSL? Use no if unknown. (y/N)`  
In most cases, `N` is fine.

6. `Do you want to use nicehash on this pool? (y/n)`  
Enter `n`

7. `Do you want to use multiple pools? (y/n)`  
Enter `y` if you would like to add more pools. Give them all a weight of 10 if you're tired of reading, or if you want the best experience, give the pools nearest to you a higher number, and the ones further from you a lower number.  
XMR-Stak will prioritize the first/highest weight pool, and fall back to the others if it cannot connect.

Done!! The miner will now start scanning your hardware and will begin mining. Cowabunga dude!  
After the first run of XMR-Stak, it will save your configuration in a `config.txt` file in the same directory from which XMR-Stak is running. Run XMR-Stak again from the same directory to reuse the configuration.

## Mining Pools

- auspool.turtleco.in
- cryptoknight.cc/turtle
- etnchina.io/trtl
- slowandsteady.fun
- trtl.mine2gether.com
- trtl.ninja
- trtl.flashpool.club
- trtl.blockchainera.net
- trtlpool.ninja
- eu.turtlepool.space
- us.turtlepool.space
- hk.turtlepool.space
- turtlecoinpool.ml
- turtle.mining.garden
- turtle.atpool.party
- z-pool.com

## Checking Balances and Payments

To check the earned balance, payments from the pool, and statistics, go to the URL of the pool you are mining on type your public TRTL wallet address into the search box in the middle of the page.
![image](https://user-images.githubusercontent.com/34389545/34903526-17cf3536-f7f9-11e7-98fd-580bdcf3faed.png)
You can also see how far until the next payout by clicking "payments" at the top of the screen.
![image](https://user-images.githubusercontent.com/34389545/34903536-36bb8904-f7f9-11e7-8b92-d886ba15bdc5.png)

## Cloud Mining

### Google Cloud Platform (GCP) Mining

Get started with GCP at https://cloud.google.com/compute/docs/quickstart-linux. Once you have a GCP instance, SSH into it and enter:

```bash

sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev git

git clone https://github.com/fireice-uk/xmr-stak.git

mkdir xmr-stak/build

cd xmr-stak/build

cmake -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF ..

make install

cd bin

./xmr-stak
```
Now, follow the [XMR-Stak Setup and Configuration](#xmr--stack-setup-and-configuration) instructions

## Mining with RaspberryPi/SBC

See [Mining with SBC](https://github.com/turtlecoin/turtlecoin-wiki/blob/master/guides/mining/Mining-with-SBC.md).
