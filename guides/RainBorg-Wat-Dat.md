# RainBorg? Wat Dat?

Back in the day, we had the [#raindance bot](Participating-in-Raindance), then people took advantage of the bot and it was retired. Now we have RainBorg!

![rainborg avatar](guides/images/rainborg/rainborg-avatar.png)

This bot monitors chat activity. Once a certain criterion is met, RainBorg sends out a tip using the tipbot, [trtlbot++](Using-trtlbot-plus-plus), to people who have recently been chatting away.

## What is the criteria to get tips?

Basically, there is a tipping window *(min time/max time)* and chatting is monitored during that window. Those that "chat" during that time qualify and get added to a tip-list.

Once the list of people to be tipped reaches a threshold, and the timer has met its criteria, all the tips are issued to those on that list, woohoo!  

To avoid the system being taken advantage of, some specifics will be kept unknown to the public; only the bot operator and Ninjas will know how the bot's gears turn.

Simply participate in the chat and let RainBorg take care of the details, she knows what she's doing!

## Why does this exist?

Because it is fun and promotes an active community; it is another way that this project is different.

## So where do the TRTL's come from?

They come from all the generous people in the community. There is a pool of TRTL, the pool is filled up by anyone that wants to contribute. You could be a contributor! It is anonymous and 100% philanthropic.

The only way it stops being anonymous is if you post in chat and disclose your donation.   `ha, just sent 350k TRTL to RainBorg, megatip time yo!`

# Give me details!

Right, to get started, simply register your wallet with [trtlbot++](Using-trtlbot-plus-plus#registering-your-wallet).

Go to the  `#bots` channel in the [Discord server](http://chat.turtlecoin.lol/), type `.registerwallet TRTL...`, and replace `TRTL...` with your wallet address.

For example, you would type:

```
.registerwallet TRTLv3pFrFm2yk4cYNtKf5fxV1b594tNrZfEV2CYWJsTSqr9BWoWMrUNpQaeD9StrzQrxpRQKPCdd1FfvT6D6dAg4pY6iB7sqs
```

That's it, you're in, now start chatting with your fellow Turtles.

## To contribute to the tip rain pool

Send TRTL to this address

`TRTLv12WtKJAzTNtxSkbcXf7mjeVApSqRYACtoJE2X52UBSce7qGAQ1JQgG3MmArnZSbkJXKqBXiPX2Mno7xD4tqD3p8SySoBc5`

With this Payment ID **!! IMPORTANT !!**

`bca975edfe710a64337beb1685f32ab900989aa9767946efd8537f09db594bbd`


Alternatively, you can tip RainBorg directly, like:

```
.tip 123 @RainBorg#7008
```

_No Payment ID equals a tip for the tipbot operator, it will not be donated to RainBorg._

## Which channels does this work with?

The tips are sent out to participants in these channels.

  - \#general *(more tips sent here as this is the main channel)*
  - \#help *(everyone appreciates being helped, lend a hand, get some tips!)*
  - \#mining *(the miners are important, let's tip them as well)*
  - \#dev_general *(these guys, amiright!?)*
  - \#dev_marketing *(spread the word!)*

## Chatting right? So no chat = no TRTL?

Pretty much.  
- The active chatters get rained on.  
  - The inactive chatters don't.  
    - It's simple.  

### Hold up, I was active like 2mins ago then all these others got TRTL and I didn't

Well, let's break this down then. You WERE active *(past tense)*, and the other people who ARE active got the rain and you didn't because of the way the chatting window works.  

They were active during the time RainBorg was raining down on the active Turtles. Active Turtles win, that's the game. Be a good active Turtle and she will share her tips with you!

# OK OK, so how do I get all the TRTLs? SPAM? EXILE!

This is not how it works or why it was set up... gaming the system or attempting to game the system could land you on the exile list.  

People on the exile list never get added to the tip-list. Focus on being an engaged member of the community and let the tip mistress, RainBorg, handle raining tips on the people, she is most capable.  

There is a way to get unsolicited tips though, [be a good Turtle](https://medium.com/@turtlecoin/how-to-be-a-good-turtle-20a427028a18) and check out the tipbot, [trtlbot++](Using-trtlbot-plus-plus).

# Commands

Yes she'll respond to `$` commands:

  - `$help` - you get a DM with a list of commands from RainBorg
  - `$balance` - Check the bot's tip balance, will show in the channel
  - `$donate` - you get a DM with details on how to send a donation to the bot's tip balance
  - `$optout` - Opt out of receiving tips from the bot
  - `$optin` - Opt back into receiving tips from the bot

# Stats

Every time RainBorg rains down tips on chatty Turtles she'll post a message in the #raindance channel.
They look something like this:

> **TUT TUT**
>
> Huzzah, 500 TRTL just rained on 4 chatty turtles in #mining, they each got 125 TRTL!
>
> ![TRTL in rain](guides/images/rainborg/rainborg-rain.png)

# Wow? Megatip wat?

When an operator runs a megatip command, RainBorg splits the amount between all [tippable channels](#which-channels-does-this-work-with), and the amount in the command is split across all the active members in the eligible channels, who were in the list to get tipped originally.
It is divided equally, so if person A and B are talking in \#general, and person B and C were talking in \#help, and there was a 400 megatip, 100 TRTL would go to A and C, and 200 TRTL would go to B(100 TRTL for each channel)

# Anything not covered here?

Open a [new issue](https://github.com/turtlecoin/meta/issues/new?title=RainBorg+Question) or make some noise in `#help`.

The gaps will be filled either by you or another person, [anyone can contribute](https://github.com/turtlecoin/turtlecoin-docs) to these docs as well!
