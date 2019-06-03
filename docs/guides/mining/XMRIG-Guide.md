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

XMRig needs to be compiled for nVidia and AMD. Instructions for compiling are linked below(Ubuntu):

* [XMRig CPU Miner](https://github.com/xmrig/xmrig/wiki/Ubuntu-Build) 
* [XMRig GPU Nvidia Miner](https://github.com/xmrig/xmrig-nvidia/wiki/Ubuntu-Build) 
* [XMRig GPU AMD Miner](https://github.com/xmrig/xmrig-amd/wiki/Ubuntu-Build) 

## Downloading and Installing for Mac

Needs to be compiled. Instructions [here](https://github.com/xmrig/xmrig/wiki/OS-X-Build).

## XMRig Setup and Configuration

### CPU XMRig Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesn't delete the files)
2. Open the `config.json` file with Notepad
3. Find and change the following lines:

* `"algo: "cryptonight-turtle"`
* `"url: "[pool address]"`
* `"user: "[wallet address]"`
* `"variant": 1`

- Instead of `[wallet address]`, simply paste your TurtleCoin wallet's address. Make sure to keep the `"`!

- If you don't have one yet, you can generate a [paper wallet](../wallets/Making-a-Paper-Wallet) to mine towards for now, and later import into a CLI or GUI wallet.

- In place of `[pool address]`, you'll need to choose a pool to mine towards. You can check the full list [here](Pools). Make sure to keep the `"`s!  

4.  Save the file and:
  * start `xmrig.exe` if you're mining with your CPU,
  * `xmrig-amd.exe`. if you're mining with an AMD GPU,
  * or `xmrig-nvidia.exe` if you're mining with a nVidia GPU.

**Remember:** if you want to mine with both your CPU and your GPU you must have both programs open at the same time!

That's it! You should be mining away now! :)
