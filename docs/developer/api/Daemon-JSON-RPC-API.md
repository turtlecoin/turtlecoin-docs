---
title: Daemon JSON RPC API
---

The daemon JSON RPC is a HTTP server which provides JSON 2.0 RPC interface for interacting with a daemon and a block explorer.

Currently we support the following official client bindings:

* [NodeJS](https://www.npmjs.com/package/turtlecoin-rpc)
* [PHP](https://github.com/turtlecoin/turtlecoin-rpc-php)
* [Python](https://github.com/turtlecoin/turtlecoin-rpc-python)
* [Go](https://github.com/turtlecoin/turtlecoin-rpc-go)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--NodeJS-->
```
npm i turtlecoin-rpc
```

<!--PHP-->
```
composer require turtlecoin/turtlecoin-rpc-php
```

<!--Python-->
```
pip3 install turtlecoin
```

<!--Go-->
```
go get github.com/turtlecoin/turtlecoin-rpc-go
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Interacting with the API

### API endpoint example

```
http://localhost:11898/json_rpc
```

### Configuration and Instantiation

To start the Daemon JSON RPC API server at `http://localhost:11898/json_rpc`, run:

`TurtleCoind --rpc-bind-port=11898`

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

`TurtleCoind --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

To enable block explorer API access (like for `getblocks`, `gettransactionpool`, etc.), use the `--enable-blockexplorer` switch.

`TurtleCoind --enable-blockexplorer`

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

`TurtleCoind --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898`

This would make the RPC server accessible at

`http://<your ip address>:11898/json_rpc`

and, locally at

`http://localhost:11898/json_rpc`


To make a JSON RPC request to your Daemon RPC you should use a GET request that looks like this:

`http://<service address>:<service port>/json_rpc`

Parameter            | Description
-------------------- | ------------------------------------------------------------
`<service address>`  | IP of Daemon RPC, if it is located on local machine it is either 127.0.0.1 or localhost
`<service port>`     | Daemon RPC port, by default it is bound to 11898 port, but it can be manually bound to any port you want

<!--DOCUSAURUS_CODE_TABS-->

<!--NodeJS-->
```js
const TurtleCoind = require('turtlecoin-rpc').TurtleCoind

const daemon = new TurtleCoind({
  host: '0.0.0.0', // ip address or hostname of the TurtleCoind host
  port: 11898, // what port is the RPC server running on
  timeout: 2000, // request timeout
  ssl: false // whether we need to connect using SSL/TLS
})
```

<!--PHP-->
```php
<?php
use TurtleCoin\TurtleCoind;

$config = [
    'rpcHost' => 'http://localhost',
    'rpcPort' => 11898,
];

$turtlecoind = new TurtleCoind($config);
```

<!--Python-->
```py
from turtlecoin import TurtleCoind

rpc_host = 'localhost'
rpc_port = 11898
turtlecoind = TurtleCoind(rpc_host, rpc_port)
```

<!--Go-->
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

<!--END_DOCUSAURUS_CODE_TABS-->

## getblockcount

`getblockcount()` method returns the current chain height.

No Input.

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
count            | Current chain height | int
status           | Status of request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0", "method":"getblockcount", "params":{}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockCount().then((blockCount) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $turtlecoind->getBlockCount();
echo $response;
```

<!--Python-->
```py
response = turtlecoind.get_block_count()
print(response)
```

<!--Go-->
```go
response := daemon.GetBlockCount()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->


#### Expected Output

```json
{
    "jsonrpc":"2.0",
    "result":{
        "count":560915,
        "status":"OK"
    }
}
```

## getblockhash

`getblockhash()` method returns block hash for a given height off by one.

**Input**

Argument        | Mandatory     | Description           | Format
--------------- | ------------- | --------------------- | ------
height          | Yes           | The height of the block whose previous hash is to be retrieved. | int

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
result           | Hash of previous block | int

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"on_getblockhash","params":[123456]}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockHash({
  height: 500000
}).then((blockHash) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$height = 123456;
$response = $turtlecoind->getBlockHash($height);
echo $response;
```

<!--Python-->
```py
height = 123456
response = turtlecoind.get_block_hash(height)
print(response)
```

<!--Go-->
```go
height := 123456
response := daemon.GetBlockHash(height)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":"4bd7d..."
}
```

## getblocktemplate

`getblocktemplate(reserve_size, addr)` method returns blocktemplate with an empty "hole" for nonce.

**Input**

Argument | Mandatory | Description | Format
-------- | -------- | ------------- | -----
reserve_size | Yes | Size of the reserve to be specified | int
wallet_address | Yes | Valid TurtleCoin wallet address | String

**Output**

Argument | Description | Format
-------- | ---------- | ------
blocktempate_blob | Blocktemplate with empty "hole" for nonce | string
difficulty | Difficulty of the network | int
height | Chain height of the network | int
reserved_offset | Offset reserved | int
status | Status of the network | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getblocktemplate","params":{"reserve_size":200,"wallet_address":"TRTLxxxx..."}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockTemplate({
  reserveSize: 200,
  walletAddress: 'TRTLv1pacKFJk9QgSmzk2LJWn14JGmTKzReFLz1RgY3K9Ryn7783RDT2TretzfYdck5GMCGzXTuwKfePWQYViNs4avKpnUbrwfQ'
}).then((blockTemplate) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$reserveSize = 200;
$address = 'TRTLxxxx...';
$response = $turtlecoind->getBlockTemplate($reserveSize, $address);
echo $response;
```

<!--Python-->
```py
reserve_size = 200
wallet_address = 'TRTLxxxx...'

response = turtlecoind.get_block_template(reserve_size, wallet_address)
print(response)
```

<!--Go-->
```go
reserveSize := 200
walletAddress := "TRTLxxxx..."

response := daemon.GetBlockTemplate(reserveSize, walletAddress)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
	"jsonrpc": "2.0",
	"result": {
		"blocktemplate_blob": "0100de...",
		"difficulty": 65563,
		"height": 123456,
		"reserved_offset": 395,
		"status": "OK"
	}
}
```

## submitblock

`submitblock(block_blob)` method submits mined block.

**Input**

Argument | Mandatory | Description | Format
-------- | -------- | ------------- | -----
block_blob | Yes | Block blob of the mined block | string

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
status           | Status of request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"submitblock","params":["0100b...."]}' https://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.submitBlock({
  blockBlob: '...'
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$blockBlob = '0100b...';
$response = $turtlecoind->submitBlock($blockBlob);
echo $response;
```

<!--Python-->
```py
block_blob = '0100b...'
response = turtlecoind.submit_block(block_blob)
print(response)
```

<!--Go-->
```go
blockBlob := "0100b..."
response := daemon.SubmitBlock(blockBlob)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
	"jsonrpc": "2.0",
	"result": {
		"status" : "OK"
	}
}
```

## getlastblockheader

`getlastblockheader` method returns the block header of the last block.

No Input

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the last block | int
hash | hash of the last block | string
height | height of the last block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the last block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getlastblockheader","params":{}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getLastBlockHeader().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $turtlecoind->getLastBlockHeader();
echo $response;
```

<!--Python-->
```py
response = turtlecoind.get_last_block_header()
print(response)
```

<!--Go-->
```go
response := daemon.GetLastBlockHeader()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":86171,
            "depth":0,
            "difficulty":431119113,
            "hash":"b746b...",
            "height":561342,
            "major_version":4,
            "minor_version":0,
            "nonce":715846563,
            "num_txes":4,
            "orphan_status":false,
            "prev_hash":"b8e02...",
            "reward":2930801,
            "timestamp":1529750993
        },
        "status":"OK"
    }
}
```

## getblockheaderbyhash

`getblockheaderbyhash()` returns block header by given block hash

**Input**

Argument | Mandatory | Description | Format
-------- | ---------- | ----------- | -----
hash | Yes   | Hash of the block | string

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the requested block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyhash","params":{"hash":"30706..."}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockHeaderByHash({
  hash: '7d6db7b77232d41c19d898e81c85ecf08c4e8dfa3434f975a319f6261a695739'
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$hash = '30706...';
$response = $turtlecoind->getBlockHeaderByHash($hash);
echo $response;
```

<!--Python-->
```py
hash = '30706...'
response = turtlecoind.get_block_header_by_hash(hash)
print(response)
```

<!--Go-->
```go
hash := "30706..."
response := daemon.GetBlockHeaderByHash(hash)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":11640,
            "depth":437898,
            "difficulty":70050782,
            "hash":"30706...",
            "height":123456,
            "major_version":3,
            "minor_version":0,
            "nonce":3177228614,
            "num_txes":3,
            "orphan_status":false,
            "prev_hash":"4bd7d...",
            "reward":2969487,
            "timestamp":1516631879
        },
    "status":"OK"
    }
}
```

## getblockheaderbyheight

`getblockheaderbyheight()` method returns block header by given block height

**Input**

Argument | Mandatory | Description | Format
------ | ----------- | ----------- | -----
height | Yes   | Height of the block | int

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the requested block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyheight","params":{"height":123456}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockHeaderByHeight({
  height: 502345
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$height = 123456;
$response = $turtlecoind->getBlockHeaderByHeight($height);
echo $response;
```

<!--Python-->
```py
height = 123456
response = turtlecoind.get_block_header_by_height(height)
print(response)
```

<!--Go-->
```go
height := 123456
response := daemon.GetBlockHeaderByHeight(height)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":11640,
            "depth":437898,
            "difficulty":70050782,
            "hash":"30706...",
            "height":123456,
            "major_version":3,
            "minor_version":0,
            "nonce":3177228614,
            "num_txes":3,
            "orphan_status":false,
            "prev_hash":"4bd7d...",
            "reward":2969487,
            "timestamp":1516631879
        },
    "status":"OK"
    }
}
```

## getcurrencyid

`getcurrencyid()` method returns unique currency identifier.

No Input

**Output**

Argument | Description | Format
-------- | ----------- | ------
currency_id_blob | unique currency identifier | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getcurrencyid","params":{}}' http://localhost:11898/json_rpc
```


<!--NodeJS-->
```js
daemon.getCurrencyId().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $turtlecoind->getCurrencyId();
echo $response;
```

<!--Python-->
```py
response = turtlecoind.get_currency_id()
print(response)
```

<!--Go-->
```go
response := daemon.GetCurrencyID()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "currency_id_blob":"7fb97..."
    }
}
```

## getblocks

`getblocks()` method returns information on the last 30 blocks from height (inclusive)

**Input**

Argument        | Mandatory     | Description           | Format
--------------- | ------------- | --------------------- | ------
height          | Yes           | height of the last block to be included in the result. | int

**Output**

Argument |              | Description                           | Format
-------- | ------------ | -----------                           | ------
status   |              | status of the request                 | string
blocks   | **Array of** |                                       |
         | cumul_size   | size of the block                     | int
         | difficulty   | difficulty of the block               | int
         | hash         | hash of the block                     | string
         | height       | height of the block                   | int
         | timestamp    | the time at which the block is occured on the chain since Unix epoch | int
         | tx_count     | number of transactions in the block   | int


<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_blocks_list_json","params":{"height":500000}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlocks({
  height: 500000
}).then((blocks) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$height = 500000;
$response = $turtlecoind->getBlocks($height);
echo $response;
```

<!--Python-->
```py
height = 500000
response = turtlecoind.get_blocks(height)
print(response)
```

<!--Go-->
```go
height := 500000
response := daemon.GetBlocks(height)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc": "2.0",
    "result": {
        "blocks":[
            {
                "cumul_size": 22041,
                "difficulty": 285124963,
                "hash": "62f00...",
                "height": 500000,
                "timestamp": 1527834137,
                "tx_count": 4
            }
        ],
        "status": "OK"
    }
}
```


## getblock

`getblock()` method returns information on a single block

**Input**

Argument        | Mandatory     | Description           | Format
--------------- | ------------- | --------------------- | ------
hash            | Yes           | hash of the block     | string

**Output**

Argument | Description | Format
------- | ---------- | --------
alreadyGeneratedCoins | total number of coins generated in the network upto that block | string
alreadyGeneratedTransactions | total number of transactions present in the network upto that block | int
baseReward | calculated reward | int
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
effectiveSizeMedian | fixed constant for max size of block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
orphan_status | whether the requested block was an orphan or not | bool
penalty | penalty in block reward determined for deviation | float
prev_hash | hash of the previous block | string
reward | total reward of the block after removing penalty | str
sizeMedian | calculated median size from last 100 blocks | int
timestamp | the time at which the block is occured on chain since Unix epoch | int
totalFeeAmount | total fees for the transactions in the block | int
transactions | Array of transactions in the block | array
transactionsCumulativeSize | total sum of size of all transactions in the block | int
status | status of the request | string

Transaction Attributes:

Argument | Description | Format
------- | ---------- | --------
amount_out | output amount of the transaction | int
fee | fees for the transaction | int
hash | hash of the transaction | string
size | size of the transaction | int

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_block_json","params":{"hash":"980ff..."}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlock({
  hash: 'f11580d74134ac34673c74f8da458080aacbe1eccea05b197e9d10bde05139f5'
}).then((block) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$hash = '980ff...';
$response = $turtlecoind->getBlock($hash);
echo $response;
```

<!--Python-->
```py
hash = '980ff...'
response = turtlecoind.get_block(hash)
print(response)
```

<!--Go-->
```go
hash := "980ff..."
response := daemon.GetBlock(hash)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block":{
            "alreadyGeneratedCoins":"1659188157030",
            "alreadyGeneratedTransactions":1097221,
            "baseReward":2930784,
            "blockSize":384,
            "depth":1,
            "difficulty":264289473,
            "effectiveSizeMedian":100000,
            "hash":"980ff...",
            "height":561537,
            "major_version":4,
            "minor_version":0,
            "nonce":60779,
            "orphan_status":false,
            "penalty":0.0,
            "prev_hash":"c37f8...",
            "reward":2930784,
            "sizeMedian":265,
            "timestamp":1529757254,
            "totalFeeAmount":0,
            "transactions":[
                {
                    "amount_out":2930784,
                    "fee":0,
                    "hash":"c0a2d...",
                    "size":265
                }
            ],
            "transactionsCumulativeSize":265
        },
        "status":"OK"
    }
}
```

## gettransaction

`gettransaction()` method returns information on single transaction.

**Input**

Argument        | Mandatory     | Description                   | Format
--------------- | ------------- | ---------------------         | ------
hash            | Yes           | hash of the transaction       | string

**Output**

Argument | Description | Format
------- | ---------- | --------
block | details of the block in which transaction is present | json object
status | status of the request | string
tx | sub-transactions in the transaction | json object
txDetails | details of the transaction | json object

Block attributes:

Argument | Description | Format
------- | ---------- | --------
cumul_size | size of the block | int
difficulty | difficulty of the block | int
hash | hash of the block | string
height | height of the block | int
timestamp | the time at which the block is occured on chain since Unix epoch | int
tx_count | number of transactions in the block | int

Transaction Details attributes:

Argument | Description | Format
------- | ---------- | --------
amount_out | total amount present in the transaction | int
fee | total fees of the transaction | int
hash | hash of the transaction | string
mixin | mixin of the transaction | int
paymentId | payment Id of the transaction | string
size | total size of the transaction | int

Transaction attributes:

Argument | Description | Format
------- | ---------- | --------
extra | Transaction extra which can be any information in hex | string
unlock_time | delay in unlocking the amount | int
version | - | int
vin | array of input transactions | array
vout | array of output transactions | array

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_transaction_json","params":{"hash":"702ad..."}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getTransaction({
  hash: '702ad5bd04b9eff14b080d508f69a320da1909e989d6c163c18f80ae7a5ab832'
}).then((transaction) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$hash = '702ad...';
$response = $turtlecoind->getTransaction($hash);
echo $response;
```

<!--Python-->
```py
hash = '702ad...'
response = turtlecoind.get_transaction(hash)
print(response)
```

<!--Go-->
```go
hash := "702ad..."
response := daemon.GetTransaction(hash)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block":{
            "cumul_size":22041,
            "difficulty":106780143,
            "hash":"62f00...",
            "height":500000,
            "timestamp":1527834137,
            "tx_count":4
        },
        "status":"OK",
        "tx":{
            "extra":"019e4...",
            "unlock_time":500040,
            "version":1,
            "vin":[
                {
                    "type":"ff",
                    "value":{
                        "height":500000
                    }
                }
            ],
            "vout":[
                {
                    "amount":80,
                    "target":{
                        "data":{
                            "key":"5ce69..."
                        },
                        "type":"02"
                    }
                }
            ]
        },
        "txDetails":{
            "amount_out":2936280,
            "fee":0,
            "hash":"702ad...",
            "mixin":0,
            "paymentId":"",
            "size":266
        }
    }
}
```

## gettransactionpool

`gettransactionpool()` returns the list of transaction hashes present in mempool

No Input

**Output**

Argument | Description | Format
------- | ---------- | --------
status | status of the request | string
transactions | array of transactions in mempool | array

Transactions attributes:

Argument | Description | Format
------- | ---------- | --------
amount_out | output amount of the transaction | int
fee | fees for the transaction | int
hash | hash of the transaction | string
size | size of the transaction | int

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_on_transactions_pool_json","params":{}}' http://localhost:11898/json_rpc
```

<!--NodeJS-->
```js
daemon.getTransactionPool().then((transactions) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $turtlecoind->getTransactionPool();
echo $response;
```

<!--Python-->
```py
response = turtlecoind.get_transaction_pool()
print(response)
```

<!--Go-->
```go
response := daemon.GetTransactionPool()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "status":"OK",
        "transactions":[
            {
                "amount_out":8990,
                "fee":10,
                "hash":"a5e88...",
                "size":541
            }
        ]
    }
}
```


## License

[![Creative Commons License](../../assets/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document was originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://github.com/bcndev/bytecoin).

Also of note, TurtleCoin developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.
