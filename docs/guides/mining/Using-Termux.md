---
title: Mining with Termux
---

### Please note: Using your mobile to mine TurtleCoin is not effective and should only be done for the lulz. It may also cause the phone to overheat and result in premature silicon degradation, shortening the lifespan of your phone.

## Downloading and Compiling XMRig

1. Download [Termux](https://termux.com) from the [Play Store](https://play.google.com/store/apps/details?id=com.termux) 
   or from [F-droid](https://f-droid.org/repository/browse/?fdid=com.termux).
2. Upon downloading and installing, open the app.
3. Run `apt update`
4. Run `apt install git cmake libuv-dev clang nano -y`
5. Run `git clone --single-branch https://github.com/xmrig/xmrig.git`
6. Run `cd xmrig`
7. Run `mkdir build && cd build`
8.  Run `cmake .. -DWITH_HTTPD=OFF -DWITH_TLS=OFF`
9.  Run `make`
10. Run `cp ../src/config.json config.json`
11. Run `nano config.json` and adjust your config settings to match you wallet and pool etc.
12. [Configure it](#configuring-xmrig)
13. Run `./xmrig-notls`

---

Alternatively, instead of copy pasting each command individually you can copy paste what is below into termux after you open it. 

```bash
apt update && apt upgrade -y  && \
apt install git cmake libuv-dev clang nano -y && \
git clone --single-branch https://github.com/xmrig/xmrig.git && \
cd xmrig && \
mkdir build && cd build && \
cmake .. -DWITH_HTTPD=OFF -DWITH_TLS=OFF && \
make && \
cp ../src/config.json config.json && \
nano config.json
```

Then, it'll open the config file where you can [configure it](#configuring-xmrig).  
After that, you can run `./xmrig-notls` to run the miner.


## Configuring XMRig

A few notes:
- to navigate between lines, either use the up/down arrows in the right or swipe on the screen
- `^E` means `CTRL` on the given bar in termux + `E` on the default keyboard
- To edit a line:
  - move your cursor to it
  - press `^E` to navigate to the end of it
  - backspace till where needed and edit appropriately
  - make *sure* you include the *ending quote(`"`)* and *comma(`,`)*. Not doing this will cause your miner to not work

---

1. Find and change the following lines:
   * `"algo: "cryptonight-lite"` to `"cryptonight-pico"`
   * `"url: "[pool address]"` (include the port number)
   * `"user: "[wallet address]"`
   * **be sure to keep the quotes `""` around each field**

2. Press `^X` (`CTRL` + `X`)
3. Press `Y` to confirm your changes
4. Press enter/return (on default keyboard) to save file

Continue with normal steps

## View your hashrate

The miner automatically prints out hashrate ever so often; however, if you'd like to view it at any time, simply press `h`.  
Know that this is the most reliable source of your hashrate; the value displayed on your pool is an estimate and may vary wildly from the truth. 

When possible, refer to the 15m avg.

## Stopping the Miner
In order to stop the miner if ever needed, you can press `^C` (`CTRL` + `C`)  

To restart it, type `./xmrig-notls`. Or, press the up arrow and press enter.

You can also use the commands `p` and `r` to pause and the resume the miner, respectively.

## Expected Results

If all goes well, you should see something like this:

![termux-miner](../../assets/termux-miner.png)