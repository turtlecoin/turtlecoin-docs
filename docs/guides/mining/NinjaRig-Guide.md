---
Title: Mining with SRBMiner-Multi
---

## Downloading and Installing for Windows or Linux

NinjaRig can be downloaded from the [GitHub page](https://github.com/doktor83/SRBMiner-Multi/releases)

## Downloading and Installing for OS X

There are currently no compilation instructions available.
[SRBMiner-Munti Official Page](https://www.srbminer.com)

## SRBMiner-Multi Setup and Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesn't delete the files)
2. Run the file `guided-setup.bat`
3. Follow the Instructions :

  > `TRTL_miner`
  > `n`
  > `argon2id_chukwa2`
  > If pool uses ssl : `stratum+ssl://pool:port` or just `pool:port`
  > `wallet address`
  > `miner1`
  > `y`
  > `n`
  > `y`



## Detailed Instructions :
```
= Guided setup =

Configuration name:

: TRTL_miner


Do you want to use multi algorithm mining ?
[y - yes, n - no]
: n

Available algorithms :
+ argon2d_dynamic
+ argon2id_chukwa
+ argon2id_chukwa2
+ argon2id_ninja
+ autolykos2
+ balloon_zentoshi
+ bl2bsha3
+ blake2b
+ blake2s
+ circcash
+ cpupower
+ cryptonight_cache
+ cryptonight_ccx
+ cryptonight_gpu
+ cryptonight_heavyx
+ cryptonight_talleo
+ cryptonight_upx
+ cryptonight_xhv
+ curvehash
+ eaglesong
+ etchash
+ ethash
+ heavyhash
+ k12
+ kadena
+ keccak
+ minotaur
+ panthera
+ phi5
+ randomarq
+ randomepic
+ randomhash2
+ randomkeva
+ randomsfx
+ randomwow
+ randomx
+ randomxl
+ rx2
+ scryptn2
+ ubqhash
+ verthash
+ verushash
+ yescrypt
+ yescryptr16
+ yescryptr32
+ yescryptr8
+ yespower
+ yespower2b
+ yespoweric
+ yespoweriots
+ yespoweritc
+ yespowerlitb
+ yespowerltncg
+ yespowermgpc
+ yespowerr16
+ yespowerres
+ yespowersugar
+ yespowertide
+ yespowerurx

Enter algorithm 0 name :
: argon2id_chukwa2

[0]Address and port of mining pool
If pool uses SSL/TLS, add prefix stratum+ssl://
[address:port]
: turtlecoin.herominers.com:10380 [you can replace this with your pool]

[0]Wallet address
[max. 200 characters]
: your wallet address

[0]Password
[max. 200 characters]
: your mienr name

Do you want to use your CPU for mining algorithm 0 ?
[y - yes, n - no]
: y

Do you want to enable logging ?
[y - yes, n - no]
: n


Do you want to enable compute mode ?
[compute mode enables maximum GPU mining performance]
[y - yes, n - no]

: y

```

4. Now simple run the file `TRTL_miner.bat` for windows and `TRTL_miner.sh` for linux.


That's it! You should be mining away now! :)

![SRBMiner-working](https://user-images.githubusercontent.com/34623886/121830366-828ebd80-cce2-11eb-8b18-c7d61781e949.png)

If you want to read more about the project then head over to the project's [README.md](https://github.com/doktor83/SRBMiner-Multi/blob/master/Readme)
