# Daemon HTTP RPC API

Daemon HTTP RPC is a HTTP server which provides additional information regarding Network and Daemon connections.

Currently we support the following official client bindings:

* [NodeJS](https://www.npmjs.com/package/turtlecoin-rpc)
* [PHP](https://github.com/turtlecoin/turtlecoin-rpc-php)
* [Python](https://github.com/turtlecoin/turtlecoin-rpc-python)
* [Go](https://github.com/turtlecoin/turtlecoin-rpc-go)

```php
composer require turtlecoin/turtlecoin-rpc-php
```

```python
pip3 install turtlecoin
```

```go
go get github.com/turtlecoin/turtlecoin-rpc-go
```

## Interacting with the API

> API endpoint example

```
http://localhost:11898
```

> Configuration and Instantiation

```javascript
const TurtleCoind = require('turtlecoin-rpc').TurtleCoind

const daemon = new TurtleCoind({
  host: '0.0.0.0', // ip address or hostname of the TurtleCoind host
  port: 11898, // what port is the RPC server running on
  timeout: 2000, // request timeout
  ssl: false // whether we need to connect using SSL/TLS
})
```

```php
<?php
use TurtleCoin\TurtleCoind;

$config = [
    'rpcHost' => 'http://localhost',
    'rpcPort' => 11898,
];

$turtlecoind = new TurtleCoind($config);
```

```python
from turtlecoin import TurtleCoind

rpc_host = 'localhost'
rpc_port = 11898
turtlecoind = TurtleCoind(rpc_host, rpc_port)
```

```go
import (
  "fmt"
  trpc "github.com/turtlecoin/turtlecoin-rpc-go"
)

rpcHost := "localhost"
rpcPort := 11898

daemon := trpc.TurtleCoind{
  URL: rpcHost,
  Port: rpcPort}
```

To start the Daemon JSON RPC API server at `http://localhost:11898`, run:

`TurtleCoind --rpc-bind-port=11898`

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

`TurtleCoind --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

To enable block explorer API access (like for `getblocks`, `gettransactionpool`, etc.), use the `--enable-blockexplorer` switch.

`TurtleCoind --enable-blockexplorer`

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

`TurtleCoind --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

This would make the RPC server accessible at

`http://<your ip address>:11898`

and, locally at

`http://localhost:11898`


To make a HTTP RPC request to your Daemon RPC you should use a GET request that looks like this:

`http://<service address>:<service port>`

Parameter            | Description
-------------------- | ------------------------------------------------------------
`<service address>`  | IP of Daemon RPC, if it is located on local machine it is either 127.0.0.1 or localhost
`<service port>`     | Daemon RPC port, by default it is bound to 11898 port, but it can be manually bound to any port you want


## getheight

```shell
curl http://localhost:11898/getheight
```

```javascript
daemon.getHeight().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

```php
<?php
$response = $turtlecoind->getHeight();
echo $response;
```

```python
response = turtlecoind.get_height()
print(response)
```

```go
response := daemon.Height()
fmt.Println(response)
```

> Expected Output:

```json
{
    "height":614214,
    "network_height":614218,
    "status":"OK"
}
```

`getheight()` returns the height of the daemon and the network

No Input.

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
height            | Current daemon height | int
network_height    | Current Network height | int
status           | Status of request | string

## getinfo

```shell
curl http://localhost:11898/getinfo
```

```javascript
daemon.getInfo().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

```php
<?php
$response = $turtlecoind->getInfo();
echo $response;
```

```python
response = turtlecoind.get_info()
print(response)
```

```go
response := daemon.Info()
fmt.Println(response)
```

> Expected Output:

```json
{
    "alt_blocks_count":1,
    "difficulty":250340644,
    "grey_peerlist_size":493,
    "hashrate":8344688,
    "height":614321,
    "incoming_connections_count":28,
    "last_known_block_index":614319,
    "major_version":4,
    "minor_version":0,
    "network_height":614321,
    "outgoing_connections_count":8,
    "start_time":1531403048,
    "status":"OK",
    "supported_height":620000,
    "synced":true,
    "testnet":false,
    "tx_count":720189,
    "tx_pool_size":0,
    "upgrade_heights":[
        187000,
        350000,
        440000,
        620000,
        .....
    ],
    "version":"0.6.3",
    "white_peerlist_size":43
}
```

`getinfo()` returns information related to the network and daemon connection

No Input.

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
alt_blocks_count | - | int
difficulty    | difficulty of the top block | int
gray_peerlist_size | - | int
hashrate | hashrate of the network | int
height | height of the daemon | int
incoming_connections_count | number of incoming connections to the daemon | int
last_known_block_index | - | int
major_version | - | int
minor_version | - | int
network_height | height of the network | int
outgoing_connections_count | number of outgoing connections from the daemon | int
start_time | - | int
status           | Status of request | string
supported_height | supported fork height | int
synced | sync status | bool
testnet | whether the daemon is on testnet or not | bool
tx_count | transaction count in the network | int
tx_pool_size | - | int
upgrade_heights | pre-determined fork heights | array
version | version of the daemon | string
white_peerlist_size | - | int

## gettransactions

```shell
curl http://localhost:11898/gettransactions
```

```javascript
daemon.getTransactions({
  hashes: [
    '549828e75151982b0e51b27e8f53b26ebc174f0ef78063984c8952b13e2a3564',
    '549828e75151982b0e51b27e8f53b26ebc174f0ef78063984c8952b13e2a3563'
  ]
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

```php
<?php
$response = $turtlecoind->getTransactions();
echo $response;
```

```python
response = turtlecoind.get_transactions()
print(response)
```

```go
Not Implemented
```

> Expected Output:

```json
{
    "missed_tx":[],
    "status":"OK",
    "txs_as_hex":[]
}
```

`gettransactions()` method returns list of missed transactions

No Input

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
missed_tx            | array of missed transactions | array
status           | Status of request | string
txs_as_hex   | array of hex values of missed transactions | array

## getpeers

```shell
curl http://localhost:11898/getpeers
```

```javascript
daemon.getPeers().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

```php
<?php
$response = $turtlecoind->getPeers();
echo $response;
```

```python
response = turtlecoind.get_peers()
print(response)
```

```go
response := daemon.Peers()
fmt.Println(response)
```

> Expected Output:

```json
{
    "peers":[
        "192.222.157.172:11897",
        "94.23.49.75:11897",
        "112.78.10.43:11897",
        .....
    ],
    "status":"OK"
}
```

`getpeers()` method returns the list of peers connected to the daemon

No Input.

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
peers           | array of peers (peer_ip:peer_port) | array
status           | Status of request | string

## feeinfo

```shell
curl http://localhost:11898/feeinfo
```

```javascript
daemon.feeInfo().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

```php
<?php
$response = $turtlecoind->getFeeInfo();
echo $response;
```

```python
response = turtlecoind.get_fee_info()
print(response)
```

```go
response := daemon.Fee()
fmt.Println(response)
```

> Expected Output:

```json
{
    "address":"",
    "amount":0,
    "status":"Node's fee address is not set"
}
```

`feeinfo()` method returns information about the fee set for the remote node.

No Input.

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
address            | address to which the fee is paid | string
amount    | fee amount | int
status           | Status of fees for the node | string


## License

[![Creative Commons License](/images/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document were originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://wiki.bytecoin.org/).

Also of note, TurtleCoin developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.

_TurtleCoin developers 2018_
