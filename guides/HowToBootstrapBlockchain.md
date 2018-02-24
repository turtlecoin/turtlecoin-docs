# How to Bootstrap the TurtleCoin Blockchain

This guide will help you install a recent copy of the blockchain. This should significantly speed up the task of getting the blockchain synced up so you can use your wallet.

## Windows:
1. Make sure TurtleCoind.exe is not running.
2. Open File Explorer and Type %APPDATA%\TurtleCoin and hit enter.
![file explorer](../images/file_explorer.jpg)

**Note: if the folder doesn't exist, just go to %APPDATA% instead and create the TurtleCoin folder.**

3. Delete the following if they exist:

 * blockindexes.bin
 * blocks.bin
 * "DB" folder


4. Download the zip file with the largest block number here:

 * https://turtle-blockchain.s3.amazonaws.com/index.html

5. Move the two new downloaded files the %APPDATA%\TurtleCoin folder.
6. Start TurtleCoind.exe like you normally do.
7. See [Expected Results](#ExpectedResults) section below.



## Mac & Linux:
1. Make sure TurtleCoind is not running.
2. Open "Finder".
3. Use this shortcut "Command+Shift+G" to bring up 'Go to Folder':
![findergoto.jpg](../images/findergoto.jpg)

4. Delete the files: blockindexes.bin, blocks.bin, and the "DB" folder if it exists
5. Download these two files:
	* https://s3-us-west-2.amazonaws.com/turtlecoin.blockchain.bootstrap/blockindexes.bin
	* https://s3-us-west-2.amazonaws.com/turtlecoin.blockchain.bootstrap/blocks.bin
6. Move the two downloaded files blockindexes.bin and blocks.bin into the  ~/.TurtleCoin/ folder
7. Start TurtleCoind like you normally do.
8. See the [Expected Results](#ExpectedResults) section below.

## Expected Results if Done Correctly <a name="ExpectedResults"></a>

When you start TurtleCoind you should see this:
(the blocksize, ie: 150246 in this example will be a different number - that's ok)
```
2018-Feb-01 18:43:37.216471 INFO    Initializing core...
2018-Feb-01 18:43:37.225492 INFO    Importing blocks from blockchain storage
2018-Feb-01 18:43:37.741587 INFO    Imported block with index 1000 / 150246
2018-Feb-01 18:43:38.258202 INFO    Imported block with index 2000 / 150246
2018-Feb-01 18:43:38.928033 INFO    Imported block with index 3000 / 150246
2018-Feb-01 18:43:39.454094 INFO    Imported block with index 4000 / 150246
2018-Feb-01 18:43:40.142969 INFO    Imported block with index 5000 / 150246
2018-Feb-01 18:43:40.830674 INFO    Imported block with index 6000 / 150246
```

After it completes it will start syncing incrementally like so:
```
2018-Feb-01 18:47:48.075930 INFO    Imported block with index 150000 / 150246
2018-Feb-01 18:47:48.860470 INFO    Core initialized OK
2018-Feb-01 18:47:48.860470 INFO    Initializing p2p server...
```


If you found this useful, you can tip me at this address:
**TRTLv2fZMTGXh5shmiJZwPFhRx571Se942obz3tLsRqBPaUK1THGV5bEpLD3m7vNpB5mPvsn3K5uN7dcW7E2RRj27c25MRq6WpB**
