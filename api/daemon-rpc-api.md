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

## getblockcount()

```python
from turtlecoin import TurtleCoind

host = 'localhost' (you may also use `public.turtlenode.io`)
port = 11898

turtlecoind = turtlecoin.TurtleCoind(host, port)
blockcount = turtlecoind.getblockcount()
print(blockcount)
```
