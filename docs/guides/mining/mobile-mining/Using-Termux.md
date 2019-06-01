# Using Termux

### Please note: Using your mobile to mine TurtleCoin is not effective and should only be done for the lulz. 
It may also cause the phone to overheat and result in premature silicon degradation, shortening the lifespan of your phone.

1. Download [Termux](https://termux.com) from the [Play Store](https://play.google.com/store/apps/details?id=com.termux) 
   or from [F-droid](https://f-droid.org/repository/browse/?fdid=com.termux).
2. Upon downloading and installing, open the app.
3. Run `apt update`
4. Run `apt install wget cmake libuv-dev clang nano`
5. Run `wget "https://github.com/xmrig/xmrig/archive/v2.14.1.tar.gz"` or `wget "https://is.gd/QOZi6d"`
6. Run `tar xzvf v2.14.1.tar.gz`
7. Run `cd xmrig-2.14.1`
8. Run `mkdir build && cd build`
9. Run `cmake .. -DWITH_HTTPD=OFF -DWITH_TLS=OFF`
10. Run `make`
11. Run `cp ../src/config.json config.json`
12. Run `nano config.json` and adjust your config settings to match you wallet and pool etc.
13. Find and change the following lines:
* `"algo: "cryptonight-lite"` to `"cryptonight-pico/trtl"`
* `"url: "[pool address]"`
* `"user: "[wallet address]"`
* **be sure to keep the quotes "" around your pool address and wallet address**
14. Run `./xmrig-notls`

Instead of copy pasting each command individually you can copy paste what is below into `termux` after you open it. It'll open the config file where you can make the edits as advised in step `13` above; and once you close nano:  

1. `ctrl+x` to exit then
2. `y` to confirm want to save then
3. `enter` to use the same file  

xmrig will start.

```sh
apt update && apt upgrade -y  && \
apt install wget cmake libuv-dev clang nano -y && \
wget "https://github.com/xmrig/xmrig/archive/v2.14.1.tar.gz" && \
tar xzvf v2.14.1.tar.gz && \
cd xmrig-2.14.1 && \
mkdir build && cd build && \
cmake .. -DWITH_HTTPD=OFF -DWITH_TLS=OFF && \
make && \
cp ../src/config.json config.json && \
nano config.json && \
./xmrig-notls
```
