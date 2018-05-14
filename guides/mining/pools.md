# List of Mining Pools

Unless you want to solo mine, which is unfeasible for many people, you will need a pool to mine towards. Make sure to choose the one closest to you!

Here are some of the TurtleCoin mining pools (arranged alphabetically):

|                          Pool Name                           | Total Fee and Method |                 Min. Payout                  |        Location        |                            Notes                             |
| :----------------------------------------------------------: | :------------------: | :------------------------------------------: | :--------------------: | :----------------------------------------------------------: |
|            [Auspool](https://auspool.turtleco.in)            | 0.05%, Proportional  |                    1 TRTL                    |       Australia        |                              -                               |
| [Bathmat's TRTL Mining Pool](turtle.bathmatminingpools.com)  |     0.1%, PPLNS      |  Wallet: 100 TRTL <br />Exchange: 500 TRTL   |          USA           |                   Supports XMR-Node-Proxy                    |
|        [CryptoKnight](https://cryptoknight.cc/turtle)        |          0%          |                   100 TRTL                   |        Germany         |                    Seems to be very shady                    |
|     [CryptoNote Social](https://cryptonote.social/trtl)      |  0%, (Proportional)  | 0 TRTL(anything higher than transaction fee) |       California       | **No payments page, be wary.** Read `details details details` section carefully. |
|         [Mine2Gether](https://trtl.mine2gether.com)          |  0.1%, Proportional  |                   500 TRTL                   |        Germany         |                              -                               |
|              [MineTRTL](http://ny.minetrtl.us)               |  0.1%, Proportional  |                   500 TRTL                   |        New York        |                           No HTTPS                           |
|    [Tortuga Amor Mining Pool](http://mine.tortugamor.cf)     |          0%          |                  0.01 TRTL                   |          USA           |                           No HTTPS                           |
|       [TRTL Cryptonight](https://trtl.cryptonight.nl)        |          0%          |                   500 TRTL                   |      Netherlands       |                    Broken(Partial) HTTPS                     |
|               [TRTL Ninja](https://trtl.ninja)               |  0.1%, Proportional  |                   100 TRTL                   |         France         |                              -                               |
|        [TRTL POOL PARTY](https://turtle.atpool.party)        | 0.05%, Proportional  |                   500 TRTL                   |     Multi-Regional     |                              -                               |
|          [TRTL semiPOOL](https://trtl.semipool.com)          |     0.1%, PPLNS      |  Wallet: 500 TRTL<br />Exchange: 1000 TRTL   |     Multi-Regional     |                   Supports XMR-Node-Proxy                    |
|           [TRTL Unipool](https://trtl.unipool.pro)           |     0.01%, PPSL      |                   100 TRTL                   |         Canada         |             Special mining modes, PPSR and PSM.              |
|   [Turtle CryptoAsiaPool](http://trtl.cryptoasiapool.com)    |          0%          |                   100 TRTL                   |          Asia          |                           No HTTPS                           |
|    [TurtleCoin CryptoPool](https://trtl.cryptopool.space)    |     0.1%, PPLNS      |  Wallet: 100 TRTL <br /> Exchange: 500 TRTL  | St. Ghislain / Belgium |                     Supports XMRIG-Proxy                     |
|    [TurtleCoin HashParty](http://turtlecoin.hashparty.io)    |   1%, Proportional   |                   100 TRTL                   |          USA           |                           No HTTPS                           |
|     [Turtle MiningGarden](https://turtle.mining.garden)      | 0.01%, Proportional  |                   100 TRTL                   |        Germany         |                              -                               |
|     [TurtlePool Space, EU](https://eu.turtlepool.space)      |  0.1%, Proportional  |                  1000 TRTL                   |         London         |                              -                               |
|     [TurtlePool Space, HK](https://hk.turtlepool.space)      |  0.1%, Proportional  |                  1000 TRTL                   |       Hong Kong        |                              -                               |
|     [TurtlePool Space, US](https://us.turtlepool.space)      |  0.1%, Proportional  |                  1000 TRTL                   |         Dallas         |                              -                               |
| [TurtlePower ChallengeCoin](http://turtlepower.challengecoin.io) |   1%, Proportional   |                   500 TRTL                   |          USA           |                           No HTTPS                           |
|              [YouPool](https://youpool.io/TRTL)              |         0.2%         |                  1000 TRTL                   |         China          |                              -                               |
|                 [z-pool](https://z-pool.com)                 |  0.1%, Proportional  |                   500 TRTL                   |        Germany         |                                                              |

## Definition of Fees

Rather simple; the pool operator will take a percentage of the reward of the block found for himself.

Example-

- the fee is 0.1%
- the block reward is 30000 TRTL
- 30000 x 0.1% = 300

Therefore, the pool operator will take 300 TRTL for himself. 



## Definition of Different Types of Methods

### Proportional

A proportional pool carries no risk to the pool operator as miners are simply paid out when a block is found. No blocks, no payout! 

With a proportional pool the risk is all on the miners if it takes longer than expected to find a block then the miners earn less. On the flip side, if the pool is lucky (they will all average out the same eventually) the miners get more. 

Example-

- A block is found after 100,000 shares
- You submitted 1,000 of those shares (you have 1% of the pool's total hash power)
- There’s 30000 TRTL per block

Quite simply you will get 1% of the block = 300 TRTL. 

Now if the pool has a bad round (a round is the time taken to find a block) and it takes 200,000 shares to find a block (twice as long) and you have submitted 2,000 shares (as you’ve been mining twice as long), you still only get 1% of the block = 300 TRTL

This can also work in the miners favour too, as if it takes half the time (50,000 shares) to find a block and you submitted only 500 shares - again 1% - 300 TRTL.

Basically, you always get a percentage of the block and you win/lose depending on the “luck” of the pool.



The drawbacks to a proportional pool are that there is often a fee although some pool operators rely on donations only and you will have to bear the variance of the block times and luck unlike a PPLNS pool. 

Also they are susceptible to “pool hoppers” where PPLNS pools are not.

### PPLNS (Pay Per Last *n* Shares)

PPLNS does not pay out per block found, rather it pays based on the number of shares you last submitted, and helps to dissuade pool hoppers.

How it works is, 

* you start mining with a PPLNS pool. 
* Rather than paying you out based on the number of shares you submitted since you started mining/the last block was found, it will pay depending on how many shares you submitted in a period of time, called the window, which is an estimate of the time in which the pool in question finds a block. 
* So, after you start mining, it will take a few hours for you to earn your normal earnings - and since the effect of pool hoppers is lessened, you may make comparatively more than other methods. 

Basically, you get paid based on 

- the number of shares you submitted
- and how long you have been mining.






