---
title: Mining with XMRig
---

XMRig uses separate miners for CPU and GPU, you need to download a CPU and GPU miner separately and run two separate instances on your computer.

## Downloading and Installing for Windows

XMRig has separate miners for CPU and GPU. You can download them from here:

* [XMRig CPU Miner](https://github.com/xmrig/xmrig/releases)
* [XMRig GPU Nvidia Miner](https://github.com/xmrig/xmrig-nvidia/releases)
* [XMRig GPU AMD Miner](https://github.com/xmrig/xmrig-amd/releases)

**Note:** You will need to download and run two separate instances if you want to mine with your GPU and CPU at the same time.

## Downloading and Installing for Linux

You can directly use the pre-built binaries for XMRig CPU. Download the `xmrig-*-xenial-amd64.tar.gz` file [here](https://github.com/xmrig/xmrig/releases).  
Run the file using `./xmrig`. 

XMRig needs to be compiled for Nvidia and AMD. Instructions for compiling are linked below(Ubuntu):

* [XMRig GPU Nvidia Miner](https://github.com/xmrig/xmrig-nvidia/wiki/Ubuntu-Build) 
* [XMRig GPU AMD Miner](https://github.com/xmrig/xmrig-amd/wiki/Ubuntu-Build) 

* [XMRig CPU Miner](https://github.com/xmrig/xmrig/wiki/Build) (instructions for multiple platforms)

## Downloading and Installing for Mac

Needs to be compiled. Instructions [here](https://github.com/xmrig/xmrig/wiki/OS-X-Build).

## XMRig Setup and Configuration

### CPU XMRig Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesn't delete the files)
2. Open the `config.json` file with Notepad
3. Find and change the following lines:

* `"algo: "cryptonight-pico"`
* `"url: "[pool address]"`
* `"user: "[wallet address]"`

- Instead of `[wallet address]`, simply paste your TurtleCoin wallet's address. Make sure to keep the `"`!
  - If you don't have one yet, you can find out how to create a wallet [here](../wallets/Making-a-Wallet)

- In place of `[pool address]`, you'll need to choose a pool to mine towards. You can learn more about them [here](Pools). Make sure to keep the `"`s!  

1.  Save the file and:
  * start `xmrig.exe` if you're mining with your CPU,
  * `xmrig-amd.exe`. if you're mining with an AMD GPU,
  * or `xmrig-nvidia.exe` if you're mining with a Nvidia GPU.

**Remember:** if you want to mine with both your CPU and your GPU you must have both programs open at the same time!

That's it! You should be mining away now! :)
