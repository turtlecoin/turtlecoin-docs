# Using AA Miner

### Please note: Using your mobile to mine TurtleCoin is not effective and should only be done for the lulz. It may also cause the phone to overheat and result in premature silicon degradation, shortening the lifespan of your phone.

## Setup

1. Download the [AA Miner](https://play.google.com/store/apps/details?id=com.aaminer.miner) app from the Google Play Store.
2. Upon downloading and installing, open the app.
3. Check [AA Miner Configuration](#aa-miner-config)

*Beware, AA Miner displays a lot of ads.*

## AA Miner Configuration<a name="aa-miner-config"></a>

1. Select `CryptonightLight v1` from the `Select Algorithm` dropdown menu.
2. Specify how many cores you want to use. We recommend using half of how many cores your phone has. So if your phone has 6 cores, enter `3`
3. Enter a pool of your choice in the format `stratum+tcp://pool_url_address:pool_port`.
   For Example `stratum+tcp://pool.trtl.unipool.pro:3333`. To view a list of pools, you can go [here](Pools)
4. Enter your TurtleCoin wallet address
5. Enter the password of the pool. For most, it will be `x`
6. Click on the `Start Mining` button to start mining.

## Expected Results

The miner should now start mining and stats like hashrate and accepted shares will be displayed

![aa-miner](guides/mining/mobile-mining/images/aa-miner.png)

Congratulations! You're now mining with your phone!



Feeling the lagginess yet? ;)
