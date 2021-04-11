---
title: Restoring A TurtleCoin Wallet From A Specific Block Height
---

If you find yourself waiting what seems like forever to sync your wallet and you've started syncing from 0, you can probably speed things up by utilizing the scan height feature of the wallet software. This will save you quite a bit of time during the syncing process. Below is a quick guide on how to use the scan height feature of the wallet software.

## Step 1: Find The Estimated Block Height When You Created Your Wallet

It's not necessary to scan blocks and transactions from before your wallet was created. The chances of there being funds in a wallet before it was created are infinitely small. As such, scanning from before the creation block only wastes time.

To find the block-height of a current date, head on over to the [tools page of the explorer](https://explorer.turtlecoin.lol/tools.html). At the bottom of the screen you will find a date selection box that allows you to select the date you believe you created the wallet. If in doubt, choose the first of the relevant month.

In the following example, I remember making my wallet sometime in April of 2019. Thanks to the Blockchain Explorer we can easily find a suitable block height to start our wallet sync as shown below: 

![](https://i.imgur.com/vqPeYpN.png)

As you can see, it gives us the block height of `1367900` which we can utilize to synchronize our wallet in a much speedier manner *(Thanks to having a block height to start our wallet scan from, our client no longer has to scan the entire blockchain from its genesis block).*

## Step 2: Restoring Your Wallet Using A Specific Scan Height

This guide covers both the Proton Wallet (GUI-based wallet) as well as Zedwallet (CLI-based wallet). 

### TurtleCoin Wallet / Proton Wallet (GUI)

Begin by opening up the TurtleCoin Wallet Application. Under the menu options, select **File** and then choose the **Restore** option.
    
![](https://i.imgur.com/MshmSr5.png)

Next, we have the option of restoring our wallet file from either our seed or our key file. In this example we will restore our wallet via our seed phrase.

![](https://i.imgur.com/r9xcEa5.png)

You will be asked to either enter your seed or wallet keys. In this example we will use the seed phrase we wrote down from when we first created our wallet to begin our restoration process and also enter the scan height of `1367900` we discovered in Step #1.

![](https://i.imgur.com/3ZKVZ6R.png)

The wallet software will show our Wallets address as a confirmation. If this address is wrong, simply go back and double-check that the seed/key file is correct. Simply click **Next** to continue.

![](https://i.imgur.com/nnf4HTg.png)

You will be prompted for a new password to set for the wallet. Afterwards, simply click **Save Wallet As**

![](https://i.imgur.com/unhKDRe.png)

Congratulations, Our wallet is now restored! It will start scanning from the scan height that we entered. Be patient as it may still take some time to scan through the blocks and transactions depending on how long ago you created the wallet.

### Zedwallet (CLI)

*Note*: You can find more information on how to use Zedwallet via the [documentation](https://docs.turtlecoin.lol/guides/wallets/using-zedwallet).

For the purposes of this guide, we presume that you have a basic understanding of how to use a Zedwallet.
    
Begin by opening Zedwallet. You will be greeted by the following screen.

![zed](https://i.imgur.com/J3s8sdi.png)

Since we wish to restore our wallet, we will select either option (3) or (4). 

In this example we will restore via our wallet seed, so we will enter option **3**. 

This will prompt us to enter our wallet's seed phrase.

![](https://i.imgur.com/vwrCiwl.png)

Next, we are prompted to type in our starting blockheight. We will use the block height discovered from Step #1 above.

![](https://i.imgur.com/DKGu4kU.png)

After a brief moment, Zedwallet will begin scanning from the block height that we provided.

![](https://i.imgur.com/JkRYxT4.png)

Congratulations, Our wallet is now restored! It will start scanning from the scan height that we entered. Be patient as it may still take some time to scan through the blocks and transactions depending on how long ago you created the wallet.
