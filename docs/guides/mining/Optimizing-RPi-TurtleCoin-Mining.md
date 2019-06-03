---
title: Optimizing Mining on a RPi
---

## Notes

Looking for a more general SBC setup guide? Check out [this guide](Mining-with-SBC).

# Overview

To maximize your hashrate, it is very important that you select a 64-bit OS image, a quality miner and the most current compiler that you can.

# OS Image
The 64-bit Ubuntu Server for Raspberry Pi3 is a good choice:

http://cdimage.ubuntu.com/ubuntu/releases/bionic/release/ubuntu-18.04.2-preinstalled-server-arm64+raspi3.img.xz

You will need to write this image to an SD card with a utility such as Etcher (https://www.balena.io/etcher). Once your OS is written, insert your SD Card and boot your Pi.

Once you've got it booted, you'll be asked for a username and password. These are both `ubuntu`.

Once you've logged in, you'll be asked to change the password. For the current password, enter `ubuntu` again. Then, enter a new password, and confirm it.

# Get the Latest Compiler

You will need to edit your sources.list file and add the debian testing repository in order to install gcc-8 and g++-8 on your system:

``` 
sudo nano /etc/apt/sources.list
```
Add this line to the end of the file:

`deb http://ftp.us.debian.org/debian testing main contrib non-free`

Then save it with `Ctrl-x` and then the following:

```
sudo apt-get update
sudo apt-get install gcc-8 g++-8
```

# Download Compile, and Configure Your Miner

Now you need to install the required dependencies and the latest release of the xmrig miner and compile it with gcc-8.

```bash
sudo apt-get install git build-essential cmake libuv1-dev libmicrohttpd-dev libssl-dev
git clone https://github.com/xmrig/xmrig.git
cd xmrig
sudo mkdir build
cd build
sudo cmake .. -DCMAKE_C_COMPILER=gcc-8 -DCMAKE_CXX_COMPILER=g++-8
sudo make -j4
```

Compiling the miner could take several minutes to complete. When your miner is ready you need to create a configuration file with your TurtleCoin settings. Navigate to your home directory and create a file named config.json.trtl.

```bash
cd ~
sudo nano config.json.trtl
```

Populate your configuration file with something similar to the code below. Make sure that "url", "pass", and "miner" are populated with the your own unique and proper values.

```json
{
    "algo": "cryptonight-pico/trtl",
    "background": false,
    "colors": true,
    "retries": 5,
    "retry-pause": 5,
    "donate-level": 1,
    "syslog": false,
    "log-file": null,
    "print-time": 60,
    "av": 0,
    "safe": false,
    "max-cpu-usage": 100,
    "cpu-priority": null,
    "threads": null,
    "pools": [
        {
            "url": "trtl.muxdux.com:4444",
            "user": "YOUR_TURTLE_ADDRESS_GOES_HERE",
            "pass": "YOUR_MINER_NAME_GOES_HERE",
            "keepalive": true,
            "nicehash": false,
            "variant": -1
        }
    ]
}
```

Create a separate miner start script so that you can easily start the miner and invoke the proper cofiguration file with a single command. I like to name it "mineturtle".

```
sudo nano mineturtle
```

Place the following code into the mineturtle file:

```bash
#!/bin/bash
sudo sysctl -w vm.nr_hugepages=8
~/xmrig/build/xmrig --config=config.json.trtl
```

Make the file executable as a script:

```
sudo chmod +x mineturtle
```

Now you can start the miner using the start script:

```
./mineturtle
```

# Conclusion

Happy mining and make sure to support small pools and keep TurtleCoin mining decentralized.


