---
title: Using a Remote Node
---

# Using Remote Nodes

In case you don't want to download the blockchain and verify it everytime, you can instead use a Remote Node to quickly sync the blockchain.

## WalletShell

Guide coming soon!

## zedwallet

1. Open up a command prompt window and navigate to the folder that contains *zedwallet*.
2. Use the following command to start zedwallet  

### Windows:

```
zedwallet.exe --remote-daemon host:port
```

### Mac and Linux

```
./zedwallet --remote-daemon host:port
```

Replace `host:port` with values from one of the public remote daemons available below.

You can now follow your normal process to access your wallet.

For example-

```
zedwallet.exe --remote-daemon public.turtlenode.online:11898
```

## Making a Script to Do it Automatically

*Note*: This only works on Windows

1. Open NotePad/a text editor of your choice and type the following lines inside:

```text
@echo off
zedwallet.exe --remote-daemon host:port
pause
```

1. Replace `host:port` with the values from a node in the given links below.
2. Save the filename as `start.bat` and save the file as `All files`.
3. Double click on the file to start the daemon.

#### Known remote daemons

http://trtl.nodes.pub/

https://github.com/turtlecoin/turtlecoin-nodes-json
