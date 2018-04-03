# How to use trtlbot++


## Registering your wallet

Go to #wallets and type `.registerwallet <walletaddress>`. 

For example, you would type- `.registerwallet TRTLv3pFrFm2yk4cYNtKf5fxV1b594tNrZfEV2CYWJsTSqr9BWoWMrUNpQaeD9StrzQrxpRQKPCdd1FfvT6D6dAg4pY6iB7sqsG`

## Depositing Turtle

After your wallet address has been registered, PM `trtlbot++` with `.deposit`. 

### CLI Wallet

- Copy/paste the command he gives you into the CLI Wallet. 
- Replace `<amount>` with however much you want to send and press enter.

For example, if I PM the bot `.deposit` and get back this-

```transfer 3 TRTLv12WtKJAzTNtxSkbcXf7mjeVApSqRYACtoJE2X52UBSce7qGAQ1JQgG3MmArnZSbkJXKqBXiPX2Mno7xD4tqD3p8SySoBc5 <amount> -p ac8889dfb7c93471a9a43c287f3fa40854b64454e62eb0006b13e510e6ad8a8e```

Then I will replace `<amount>` with how much I want to send to trtlbot++, let's say 100. So the command I will enter is-

```transfer 3 TRTLv12WtKJAzTNtxSkbcXf7mjeVApSqRYACtoJE2X52UBSce7qGAQ1JQgG3MmArnZSbkJXKqBXiPX2Mno7xD4tqD3p8SySoBc5 100 -p ac8889dfb7c93471a9a43c287f3fa40854b64454e62eb0006b13e510e6ad8a8e```

Then press enter to send your transaction.

- See [Expected Results](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#expected-results) section below

### GUI Wallet

- Copy the part from `3` to `<amount>` and enter that as the wallet address. 
- Then, copy the part after `-p` and enter that as the payment address. 
- In amount, mention how much you want to send, set the mixin as 3 and press send.

For example, if I PM the bot `.deposit` and get back this-

```transfer 3 TRTLv12WtKJAzTNtxSkbcXf7mjeVApSqRYACtoJE2X52UBSce7qGAQ1JQgG3MmArnZSbkJXKqBXiPX2Mno7xD4tqD3p8SySoBc5 <amount> -p ac8889dfb7c93471a9a43c287f3fa40854b64454e62eb0006b13e510e6ad8a8e```

Then I will copy the part from `3` to `<amount>`; that is, `TRTLv12WtKJAzTNtxSkbcXf7mjeVApSqRYACtoJE2X52UBSce7qGAQ1JQgG3MmArnZSbkJXKqBXiPX2Mno7xD4tqD3p8SySoBc5` and enter that as the address.

Then I'll copy the part after `-p`; that is, `ac8889dfb7c93471a9a43c287f3fa40854b64454e62eb0006b13e510e6ad8a8e` and enter that as the Payment ID.

- See [Expected Results](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#expected-results) section below

***PLEASE ENTER YOUR OWN VALUES WHICH THE BOT SENDS YOU!***

#### Expected Results

When the bot recieves the payment, it will send you a PM letting you know. Now you can tip people! 

 ![received](master/images/dep.png)

## Checking your Balance

Before you can tip, you need to know how much balance you have. Balance is the amount of TRTL you have in your tipjar wallet to tip to others.

To tip others, type `.balance`. trtlbot++ will PM you with how much balance you have remaining in your tipjar wallet.

If it shows `0.00`, then make sure you have [deposited](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#depositing-turtle) some TRTL and it has [bee
n received](https://github.com/turtlecoin/turtlecoin/wiki/Using-trtlbot-plus-plus#expected-results)

![receive](images/dep.png)

## Tipping People
To tip someone, type `.tip <amount> <@person>`. 

`<amount>` is how much you will tip the person. 
`<@person>` is whom you'll tip it to.

For example, `.tip 1 @RockSteady#7588` will tip the user called "RockSteady"  1 TRTL.

*The minimum you can send is 0.11 TRTL, and the bot will take an extra 0.1 TRTL on top of what you tipped to account for fees
So if you tipped 1 TRTL, 1.1 TRTL will be pulled from your account so that the full 1 TRTL reaches the recipient*

### Adding a Message when tipping

***The syntax for tipping someone is- `.tip <amount> <@person>`***
     
- Trying to add a message before it, will not work. 
 For example, `hey .tip 1 @RockSteady#7588` will **not** send RockSteady 1 TRTL.

- Trying to add it on a seperate line in 1 message will not work.
  For example,
  ```
  heyo there.
  I'm tipping you
    
  .tip 1 @RockSteady#7588
  ```
  
  will **not** send RockSteady 1 TRTL.

- Trying to add a message *after* it will **will** work.
- For example, `.tip 1 @RockSteady#7588 hey` **will** send RockSteady 1 TRTL

- Trying to add a message after the command on a seperate line in an existing message **will** work.
  For example,
  ``` 
  .tip 1 @RockSteady#7588

  hey
  ```
  will send RockSteady 1 TRTL.
  
  Trying to add a message *between* the *amount* and the *recipient* **will** work.
  For example, `.tip  1 hey @RockSteady#7588` **will** send RockSteady 1 TRTL.
  
- If you make a typo in the command, like `.tpi 1 @RockSteady#7588` and trying to edit the message to fix the typo, like- `.tip 1 @RockSteady#7588` will **not** work.
  
**Basically, keep these in mind-**  

* Any text must go **after** the command
* Trying to **edit** the command will *not* work

### Tipping with Emojis

Reacting with the emoji :almost100: on someone's message will tip them 99 TRTL.

If someone has tipped someone, then reacting with :tip: on the message on which they tipped the person(`.tip 1 @RockSteady#7588`) will send the recipient (in this case, RockSteady) with the same amount he was originally tipped (in this case, 1). So the recipient (RockSteady) gets 2 TRTL.

### Tipping Multiple People

The syntax for tipping multiple people is- `.tip 1 <@person1 @person2>`

For example, `.tip 1 @RockSteady#7588 @bebop#2640`

This will tip RockSteady *and* bebop 1 TRTL **each** (it will not divide the 1 TRTL in between the 2).

The bot will still pull a fee of 0.1 TRTL extra from your balance.


This can be used to tip - so far - an unlimited amount of people, given that you have enough balance.
The bot will PM you after it has sent the payments to everyone, letting you know the TX Hash, your updated balance, and how many people it sent it to, along with the number of 
- successful payments(the recipent had registered their wallet and the payment was successfully sent)
- unsuccessful payments (the recipent had not registered their wallet and/or the payment was not successfully sent)

If you tip multiple people, some who have registered their wallets and some who haven't, the bot will react with :almost100: and :sos: for both(only once).
However, it will not let you know whose wallet has not been registered, simply the amount of people it did send it to(so you can deduce the no. of people it was not able to send to by subtracting the number of successful payments from the number of people you tipped).

*Sadly, trying to tip "Roles" (like `@dev-turtle`, `@everyone`, `@here` etc) and expecting the bot to automatically tip everyone with that said role won't work, as it has not been programmed to do so :(*

### What happens when you tip someone/you get tipped

When you tip someone, then the desired amount + 0.1 TRTL is pulled from your tipjar wallet balance and sent to the recipient's registered wallet (if he has not registered his wallet, he cannot receive tips).

When you get tipped, then the sender sends the desired amount + 0.1 TRTL, pulled from his tipjar wallet balance, directly to your registered wallet(if you haven't registered your wallet, you can't receive tips).

It *does not* send the TRTL to your tipjar balance. It sends it *directly* to your **wallet**.
This is to ensure that more and more TRTL is introduced into the ecosystem, rather than the same TRTL being circulated around.


- If you try to tip someone who isn't registered, the bot will react with :sos: and PM him with instructions on how to register their wallet and tip. 

## Security of trtlbot++'s wallet

trtlbot++ was created and is owned by @krruzic(@madk#1044  in the chat). When he was asked about the security of trtlbot++'s wallet, he said-

"the wallet is pretty secure. All ports are closed except 80, whatever minecraft is and my SSH port. The SSH has no root login and only two valid keys. ~~One of the keys is for an account that has no permissions to go anywhere but one folder (I may revoke this key)~~ *[This key has since been revoked]*. There are other security features but I don't want to reveal any possible attack surfaces by accident."

and follows up with-

"And if the wallet gets hacked I will refund people's coins."

and ends it with-

"I'm not gonna up and run with the tipjar like the doge tipbot guy either :)"

So rest assured, as trtlbot++'s wallet is extremely secure, and in the rare occasion that anything *does* happen, you can relax knowing that you'll get it back :)



That's it! Enjoy tipping and getting tipped :)
