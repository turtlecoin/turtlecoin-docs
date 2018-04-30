# How to Mine TurtleCoin with an SBC

This guide will get you started mining TurtleCoin on a Raspberry Pi or similar SBC (single-board computer).

## Setup

Make sure you've already created a wallet on your PC. You'll need the wallet address to store any coins you mine. Follow the guide [here](Using-Simplewallet) to get started (follow the guide for Linux).

For the SBC, download the latest non-desktop version of [Raspbian](https://www.raspberrypi.org/downloads). Follow their installation guide on how to write the OS image onto the MicroSD card. Once you've plugged in the SD Card, booted the Raspberry Pi, and connected it to the internet, run the following commands:


	sudo apt-get update && sudo apt-get upgrade

This may take a few minutes. Next, we'll have to install some required tools to compile and run the miner. Enter this command:


	sudo apt-get install git automake autoconf pkg-config libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev make g++

## Install the Miner

Next, we need to obtain a CPU miner. We'll use `rPi-xmrig-gcc7.3.0`

1. Download the `.zip` source code from the [Releases page](https://github.com/auto-joe/rPi-xmrig-gcc7.3.0/releases/latest)


2. Download it to a directory of your choice and extract it to a folder called `rPi-xmrig`, or anything of your choice


## Configure and Run the Miner

Run the miner with the following parameters:


	./start.sh --algo=cryptonight-lite --variant=1 --user=[public address] --url=[pool address]

* Instead of `[public address]`, simply paste your TurtleCoin wallet's address.

  If you don't have one yet, you can generate a [paper wallet](Making-a-Paper-Wallet) to mine towards for now, and later import into a CLI or GUI wallet.
* In place of `[pool address]`, you'll need to choose a pool to mine towards. You can check the full list [here](Pools).

After entering this command, the miner will start scanning your hardware and begin to mine. 

Happy mining! :)
