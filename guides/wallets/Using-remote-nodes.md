# Using Remote Nodes

In case you don't want to download the blockchain and verify it everytime, you can instead use a Remote Node to quickly sync the blockchain.

## Nest Wallet

Nest wallet automatically syncs from a [remote node](Using-nest-wallet#synchronizing-the-blockchain)

## How to do it

1. Open up a command prompt window and navigate to the folder that contains *zedwallet*.
2. Use the following command to start ZedWallet  

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
zedwallet.exe --remote-daemon public.turtlenode.io:11898
```

## Making a Script to Do it Automatically

1. Open NotePad/a text editor of your choice and type the following lines inside:

```text
@echo off
zedwallet.exe --remote-daemon host:port
pause
```

1. Replace `host:port` with one of the values from the table below
2. Save the filename as `start.bat` and save the file as `All files`.
3. Double click on the file to start the daemon.

#### Known remote daemons

|         Host         | Port  |        Website        |
| :------------------: | :---: | :-------------------: |
| public.turtlenode.io | 11898 | https://turtlenode.io |
| us-west.turtlenode.io | 11898 | https://turtlenode.io |
| us-east.turtlenode.io | 11898 | https://turtlenode.io |
| europe.turtlenode.io | 11898 | https://turtlenode.io |
| asia.turtlenode.io | 11898 | https://turtlenode.io |
| daemon.turtle.link | 11898 | https://turtle.link/ |
| public.turtlenode.net | 11898 | https://turtlenode.net/ |
| public.turtle-node.com | 11898 | https://turtle-node.com/ |
| usa.turtle-node.com | 11898 | https://turtle-node.com/ |
| eu.turtle-node.com | 11898 | https://turtle-node.com/ |
| public.turtlenode.uk | 11898 | - |
| turtle-node.me | 11898 | - |
| 79.122.99.180 | 11898 | - |
| turtlenode.co.uk | 11898 | - |
