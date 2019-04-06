# Using Termux

### Please note: Using your mobile to mine TurtleCoin is not effective and should only be done for the lulz. 
It may also cause the phone to overheat and result in premature silicon degradation, shortening the lifespan of your phone.

1. Download [Termux](https://termux.com) from the [Play Store](https://play.google.com/store/apps/details?id=com.termux) 
   or from [F-droid](https://f-droid.org/repository/browse/?fdid=com.termux).
2. Upon downloading and installing, open the app.
3. Run `apt update`
4. Run `apt install wget nano`
5. Run `wget "https://github.com/xmrig/xmrig/archive/v2.14.1.tar.gz"` or `wget "https://is.gd/QOZi6d"`
6. Run `tar xzvf v2.14.1.tar.gz`
7. Run `cd xmrig-2.14.1`
8. Run `nano config.json` and adjust your config settings to match you wallet and pool etc.
9. Find and change the following lines:
* `"algo: "cryptonight-lite"` to `"cryptonight-pico/trtl"`
* `"url: "[pool address]"`
* `"user: "[wallet address]"
* **be sure to keep the quotes "" around your pool address and wallet address**
10. Run `./xmrig-notls`
