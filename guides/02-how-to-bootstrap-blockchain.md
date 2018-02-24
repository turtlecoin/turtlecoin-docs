# How to Bootstrap the TurtleCoin Blockchain

This guide will help you install a recent copy of the Blockchain.  This should significantly speed up the task of getting the Blockchain synced up before you can use your wallet.

## Windows:
1. Make sure TurtleCoind.exe is not running
2. Open File Explorer and Type %APPDATA%\TurtleCoin and hit enter.
![file explorer](images/file_explorer.jpg)

**Note: if the folder doesn't exist, just go to %APPDATA% instead and create the TurtleCoin folder**

3. Delete the following if they exist

 * blockindexes.bin
 * blocks.bin
 * "DB" folder


4. Download this ZIP file:

 * https://s3.amazonaws.com/trtlpeers/trtl_block_204235.zip

5. Extract the zip into your %APPDATA%\TurtleCoin folder, there should now be two files in there
6. Start TurtleCoind.exe like you normally do
7. See [Expected Results](#ExpectedResults) section below



## Mac & Linux:
1. Make sure TurtleCoind is not running
2. Open "Finder"
3. Use this shortcut "Command+Shift+G" to bring up Go to folder
![findergoto.jpg](images/findergoto.jpg)

4. Delete the files: blockindexes.bin and blocks.bin and "DB" folder if they exist
5. Download the zip file with the largest block number here:
	* https://turtle-blockchain.s3.amazonaws.com/index.html
6. Extract the zip into your ~/.TurtleCoin/ folder, there should now be two files in there
7. Start TurtleCoind like you normally do
8. See [Expected Results](#ExpectedResults) section below

## Expected Results if done correctly <a name="ExpectedResults"></a>

When you start TurtleCoind you should see this: (the blocksize, ie: 204236 in this example may be a different number - that's ok)
```
2018-Feb-21 17:43:37.216471 INFO    Initializing core...
2018-Feb-21 17:43:37.225492 INFO    Importing blocks from blockchain storage
2018-Feb-21 17:43:37.741587 INFO    Imported block with index 1000 / 204236
2018-Feb-21 17:43:38.258202 INFO    Imported block with index 2000 / 204236
2018-Feb-21 17:43:38.928033 INFO    Imported block with index 3000 / 204236
2018-Feb-21 17:43:39.454094 INFO    Imported block with index 4000 / 204236
2018-Feb-21 17:43:40.142969 INFO    Imported block with index 5000 / 204236
2018-Feb-21 17:43:40.830674 INFO    Imported block with index 6000 / 204236
```

After it completes it will start syncing incrementally like so:
```
2018-Feb-21 17:47:48.075930 INFO    Imported block with index 204000 / 204236
2018-Feb-21 17:47:48.860470 INFO    Core initialized OK
2018-Feb-21 17:47:48.860470 INFO    Initializing p2p server...
```


If you found it to be useful, you can tip me at this address:
**TRTLv2fZMTGXh5shmiJZwPFhRx571Se942obz3tLsRqBPaUK1THGV5bEpLD3m7vNpB5mPvsn3K5uN7dcW7E2RRj27c25MRq6WpB**
