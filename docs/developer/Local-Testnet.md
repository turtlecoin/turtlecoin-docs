---
title: Local Testnet
---

Setting up a testnet using just one PC is very easy, and lets you test things out with very minimal setup.

# Setup

## Disabling outside peers

First, we need to disable incoming peers, so they don't interfere with our testnet. This step is not mandatory, but it's likely you'll get other daemons connected to you (or you will connect to the seed nodes), messing up your testnet.

You can block the p2p port of your daemon with `ufw`, or another firewall program.

We need to apply this to each daemon p2p port we launch.

```
sufo ufw enable
sudo ufw deny 10000;
sudo ufw deny 10001;
sudo ufw deny 10002;
```

Once you're done, and want to re-enable, either disable ufw, or run

```
sudo ufw disable
sudo ufw allow 10000;
sudo ufw allow 10001;
sudo ufw allow 10002;
```

## Clearing checkpoints

If you're wanting to mine any blocks, you'll want to empty the checkpoints file. Open up `src/config/CryptoNoteCheckpoints`, and empty the checkpoints there. Recompile.

## Data directories

First, we need three new folders to be the location for the blockchains for each daemon.

In this example, I'm simply going to use the folder `a`, `b`, and `c`.

On linux: `mkdir a b c`, to make the folders.

# Running

## Launching daemons

Next we need to launch three daemons. Each need to have a different p2p port, different rpc port, and different data directory, to not conflict.

In the below commands, replace `TurtleCoind` with the name of your daemon executable, if you are a TurtleCoin fork.

### Daemon 1

```
./TurtleCoind --data-dir a --add-exclusive-node 127.0.0.1:10001 --add-exclusive-node 127.0.0.1:10002 --p2p-bind-port 10000 --rpc-bind-port 20000
```

### Daemon 2

```
./TurtleCoind --data-dir b --add-exclusive-node 127.0.0.1:10000 --add-exclusive-node 127.0.0.1:10002 --p2p-bind-port 10001 --rpc-bind-port 20001
```

### Daemon 3

```
./TurtleCoind --data-dir c --add-exclusive-node 127.0.0.1:10000 --add-exclusive-node 127.0.0.1:10001 --p2p-bind-port 10002 --rpc-bind-port 20002
```

And you're done! The three daemons should connect to each other.

Start up a miner, and test stuff out. Remember to use the rpc port you started one of your daemons on with your wallet/miner.
