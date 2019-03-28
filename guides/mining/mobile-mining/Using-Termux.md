# Using Termux

### Please note: Using your mobile to mine TurtleCoin is not effective and should only be done for the lulz. 
It may also cause the phone to overheat and result in premature silicon degradation, shortening the lifespan of your phone.

1. Download [Termux](https://termux.com) from the [Play Store](https://play.google.com/store/apps/details?id=com.termux) 
   or from [F-droid](https://f-droid.org/repository/browse/?fdid=com.termux).
2. Upon downloading and installing, open the app.
3. Run `apt update`
4. Run `apt install wget git cmake libuv-dev clang nano`
5. Run `wget "https://github.com/xmrig/xmrig/releases/download/v2.14.1/xmrig-2.14.1-xenial-x64.tar.gz`
6. Run `tar xzvf xmrig-2.14.1-xenial-x64.tar.gz`
7. Run `cd xmrig-2.14.1`
8. Run `mkdir build && cd build`
9. Run `cmake .. -DWITH_HTTPD=OFF -DWITH_TLS=OFF`
10. Run `make`
11. Run `cp ~/xmrig-2.14.1/config.json config.json`
12. Run `nano config.json` and adjist your config settings to match you wallet and pool etc.
13. Find and change the following lines:
* `"algo: "cryptonight-lite"` to `"cryptonight-pico/trtl"`
* `"url: "[pool address]"`
* `"user: "[wallet address]"
* **be sure to keep the quotes "" around your pool address and wallet address**
14. Run `./xmrig-notls`




