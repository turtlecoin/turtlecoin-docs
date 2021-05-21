# Subwallets

Lets start with the obvious question.

## What are subwallets?

Subwallets are a way to use multiple distinct addresses in one wallet 'container'. Each subwallet has the same, shared private and public view keys as other wallets in the container; however, they have different private and public spend keys.

## Why would I want to use subwallets?

The first reason is simple: It allows each of your users to have their own unique address, without having to fire up a wallet-api or turtle-service instance for each.

The second reason is performance. Syncing 1000 subwallets is nearly as fast as syncing 1 wallet, and far, far faster than syncing 1000 unrelated wallets.

### Why is syncing subwallets faster?

Remember how each subwallet has the same, shared private and public view keys?

Well, when you sync a wallet, you start by downloading a range of blocks from the daemon, then, you perform a quite slow 'derivation' using your private view key, and the transaction public key. Finally, you check if the public spend key generated in this process matches one of your wallets public spend keys.

Since you are using the same private view key for each wallet, we only have to perform this expensive derivation once for each transaction, instead of 1000 times for each wallet.

We then just check if the public spend key generated matches one of the 1000 subwallets public spend key, which is very fast.

## What are the downsides of using subwallets?

Because each subwallet shares the same private view key, they also share the same *public* view key. Since the public address is the combination of the public spend key, public view key, and a checksum in base58, the first half of every address from the same subwallet container will be identical. This makes it easy to detect if a specific address belongs to your service.

Another downside is that you cannot give out mnemonic seeds to a subwallet address. A mnemonic seed is just a friendly representation of a private spend key. When you import a mnemonic, this private spend key is hashed to derive the private view key. Since subwallets must all have the same private view key, this process is not possible.

## Can I give out the private keys to subwallets?

Yes! You can safely give out the private spend key and shared private view key of each subwallet to your users.

However, there is one caveat - since every wallet has the same shared private view key, if anyone knows the address of another user of your service, they will be able to import this into a *view only wallet*. This allows them to view only *incoming* transactions of this wallet. They cannot spend the funds, or see any outgoing transactions the wallet has sent.

If you're wondering why a view wallet cannot see outgoing transactions, this is because without a private spend key you cannot generate key images. The generated key images are then included in outgoing transactions sent, and so we can detect an outgoing transaction made by us if the key images match ones we have previously generated.
