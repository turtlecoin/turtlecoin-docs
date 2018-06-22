# Daemon RPC API

TurtleCoin RPC Wallet is a HTTP server which provides JSON 2.0 RPC interface for TurtleCoin payment operations and address management.

Currently we support the following official client bindings:

* [JavaScript](https://github.com/turtlecoin/turtlecoind-rpc-js)
* [Python](https://github.com/turtlecoin/turtlecoin-walletd-rpc-python)

```javascript
npm install turtlecoin-rpc
```

```python 
pip3 install turtlecoin
```

## Interacting with the API

<!-- idk any endpoint exmaple, can i use the same? -->

>  Configuration and instantiation

```python 
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
```

To make a JSON RPC request to TurtleCoind you should use one of the documented methods
<!-- i have no frigging idea, is this correct? i never used any post request or url typing or opening -->

## getblockcount

```python 
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
blockcount = turtlecoind.getblockcount()
print(blockcount)
```

> Expected Output:
```python 
{'count': 286373, 'status': 'OK'}
```
`getblockcount()` returns the current chain height.

No input

**Output**

Argument|   Description        | Format
------- |   ----------------   | ------
count   | Current chain height | string 
status  | Status of blockchain | string

## getblocktemplate

```python 
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
blocktemplate = turtlecoind.getblocktemplate(reserve_size,wallet_address)
print(blocktemplate)
```

> Expected Output:
```python
{
    'blocktemplate_blob': '0300f29a5cddd1a88f9b95...',
    'difficulty': 273666101,
    'height': 286393,
    'reserved_offset': 412,
    'status': 'OK'
}
```

`getblocktemplate(reserve_size,addr)` returns blocktemplate with an empty “hole” for nonce.

**Input**

Argument | Mandatory | Description | Format
-------- | -------- | ------------- | -----
reserve_size | Yes | Size of the reserve to be specified <!-- lmao idk --> | int
wallet_address | Yes | Valid TurtleCoin wallet address | String

**Output**

Argument | Description | Format
-------- | ---------- | ------
blocktempate_blob | Blocktemplate with empty "hole" for nonce | string
difficulty | Difficulty of the network | int
height | Chain height of the network | int
reserved_offset | Offset reserved <!-- once again, no idea --> | int
status | Status of the network | string

## getcurrencyid

```python 
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
currencyid = turtlecoin.getcurrencyid()
print(currencyid)
```

> Expected output:
```python
{'currency_id_blob': '7fb97df81221dd1366051b2...'}
```

`getcurrencyid()` returns unique currency identifier.

No input

**Output**

Argument | Description | Format
-------- | ----------- | ------
currency_id_blob | unique currency identifier | string

## getlastblockheader

```python 
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
lastbheader = turtlecoin.getlastblockheader()
print(lastbheader)
```

> Expected output:
```python
{
    'block_header': {
        'depth': 0,
        'difficulty': 226559499,
        'hash': '34aa8777302f4856e360fef49a0a7b6c78cc8eff999c0c716bad234837917986',
        'height': 286397,
        'major_version': 3,
        'minor_version': 0,
        'nonce': 18205,
        'orphan_status': False,
        'prev_hash': '522f53dae525f0a66064377c41bc1f78c6eb4eea2b3e7630efccd395bb17f43f',
        'reward': 2954906,
        'timestamp': 1521732086
    },
    'status': 'OK'
}
```

`getlastblockheader()` returns information about the last block header

No input

**Output**

Argument | Description | Format
------- | ---------- | --------
depth | height away from the known top block <!-- not sure plz confirm --> | int
difficulty | difficulty of the last block | int
hash | hash of the last block | string
height | height of the last block | int
major_version | - <!-- idk --> | int
minor_version | - <!-- idk --> | int
nonce | - <!-- idk --> | int
orphan_status | whether the last block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | time when the block occured, in some sort of unit <!-- idk --> | int
status | status of the blockchain | string

##  getlastblockheaderbyhash

```python 
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
headerbhash = turtlecoin.getlastblockheaderbyhash(hash)
print(headerbhash)
```

> Expected output:

See getlastblockheader

`getlastblockheaderbyhash()` returns information about a block header from its hash

**Input**

Argument | Mandatory | Description | Format
------ | ----------- | ----------- | -----
hash | Yes   | Hash of the block | string

**Output**

See getlastblockheader

## getlastblockheaderbyheight


```python 
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
headerbheight = turtlecoin.getlastblockheaderbyheight(height)
print(headerbheight)
```

> Expected output:

See getlastblockheader

`getlastblockheaderbyheight()` returns information about a block header from it height

**Input**

Argument | Mandatory | Description | Format
------ | ----------- | ----------- | -----
height | Yes   | Height of the block | int

**Output**

See getlastblockheader


<!-- do i need this? -->
## License

[![Creative Commons License](/images/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document were originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://wiki.bytecoin.org/).

Also of note, TurtleCoin developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.

_TurtleCoin developers 2018_
