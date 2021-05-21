---
title: Running a Node on a Pi
---

This guide is going to walk you through the process of installing and setting up a 64 bit OS, downloading the TurtleCoin ARM binaries and syncing your node on a Raspberry Pi. ARM builds just recently got fixed, so this is great news for anyone that has been wanting to run a node on one.

## Requirements

You'll need: 

 - a raspberry pi with a 64bit processor (Raspberry Pi 2, 3, 3B and 3B+)
	 - Recommended: [Raspberry Pi 3 B](https://www.amazon.com/ELEMENT-Element14-Raspberry-Pi-Motherboard/dp/B07BDR5PDW/ref=sr_1_4?keywords=raspberry%20pi%203%20b&qid=1548102902&sr=8-4)
- a microSD card for the OS (keep in mind faster is better here)
- a SATA to USB adapter such at [this one](https://www.amazon.com/StarTech-com-SATA-Drive-Adapter-Cable/dp/B00HJZJI84/ref=sr_1_3?keywords=startech%20usb%20to%20sata&qid=1548102862&sr=8-3)
- A 2.5" SATA SSD of at least 120GB (I recommend 240gb to future proof it)
- A 64 bit OS image file (I'm using pi64 lite edition for this tutorial, which you can find [here](https://github.com/bamarni/pi64/releases))  
- [Etcher](https://www.google.com/search?client=firefox-b-1-ab&q=etcher) installed in order to flash the micro SD card easily

## Setting Up the OS

Make sure you've downloaded and installed [Etcher](https://www.google.com/search?client=firefox-b-1-ab&q=etcher) and have the pi64.img file saved somewhere on your hard drive. Insert your microSD card into your computer, select the image file in Etcher, click flash and wait for completion. When it's finished flashing and validating, remove the microSD from your computer and insert it into the pi. 

## OS Setup

Connect your ethernet cable and plug in the pi. Either install a keyboard, mouse and monitor in order to do preliminary setup or SSH into the pi from another computer (open-ssh server is installed and enabled by default on pi64.)  The default user is `pi` and its password `raspberry`, it has passwordless root privileges escalation through `sudo`.

Once logged in, you might want to run `sudo pi64-config` in order to get assisted with your setup! Otherwise, set up the linux environment to your liking.

## Download TurtleCoind

Once you're either ssh'd into your OS or using it directly with a mouse and keyboard, we're going to need to download the TurtleCoin software. You can use these commands to do so:

`cd ~`
`mkdir turtlecoin`
`cd turtlecoin`
`sudo apt install p7zip-full`
`wget https://cdn.discordapp.com/attachments/405183171999694849/536768869570969620/Release.7z`
`7z xz Release.7z`

and check that it's working ok with 

`./TurtleCoind --version`

>Note: you'll notice we're wgetting this link from discord's servers. With the ARM builds being fixed so recently, none of the official releases have been updated yet. Once a new official released is pushed this link will be updated.

## Mount your SSD

TurtleCoind needs alot of space on a fast drive for the database. So plug in your SSD to one of the USB ports on the pi and we'll create a mount point for it.

First, run this command to view your available disks.

`lsblk`

Look at the options and take note of which one is your SSD. It should say something about "SCSI Device" and have the correct size as your drive. For me, it was located at /dev/sda1.

I recommend formatting the device to exFAT so that I can access it easily on both windows and linux systems. In order to mount this type of format, we'll need some additional packages...

`sudo apt install exfat-fuse exfat-utils`

Now, we can create a folder called .blockchain in the home directory and mount the SSD there.

`cd ~`
`mkdir .blockchain`
`sudo mount /dev/sda1 /home/pi/.blockchain`

>Note: replace /dev/sda1 with your drive location and pi with your username if you changed it.

That will temporarily mount the drive in ~/.blockchain, but we want it to be permanent. We'll need to edit the fstab file.

`sudo nano /etc/fstab`

Scroll to the bottom and add 

`/dev/sda1 /home/pi/.blockchain exFAT defaults 0 2`

Save and close by pressing `Ctrl+X`, `y`

## Run TurtleCoind and Keep it Running

`sudo apt install screen`

> install screen to keep the daemon running in the background

`cd ~/turtlecoin/`
`./TurtleCoind --data-dir '/home/pi/.blockchain' --save-config 'daemon.conf'`  

>(point TurtleCoind to use the mount point we made earlier as the database location, and save a config file to do so automatically in the future)

`screen -d -m ./TurtleCoind -c daemon.conf` 

>tell turtlecoin to run with the config file we just generated inside of a detached screen session

Now just wait to sync!

## Speeding Up Synchronization

There's a couple things you can do to speed up the blockchain sync. One is to use checkpoints: follow the directions [here](../guides/wallets/Using-Checkpoints).

Alternatively, if you have another computer that already has a synced blockchain, you can copy the data in the .TurtleCoin or Appdata/Roaming/TurtleCoin folder onto your SSD and enjoy starting with a fully synced chain!

## Special Thanks

Thanks to LeoCuvee, thinkpol, ibmcd, zpalm, rocksteady, and anyone else who helped get these binaries functional on ARM architecture! 
