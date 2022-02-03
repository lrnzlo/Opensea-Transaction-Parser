# Description
A simple transaction parser for Opensea.
Trough @ethersproject library component, decode the log from event that occur on Opensea transaction when an NFT is selled.

Info decoded:
  - Seller
  - Buyer
  - Price
  - Royalty payed to Opensea
  - Address of Royalty Collector Contract
  - NFT Id
  - NFT Collection Address + Name (If exists on chain)
# Installation
Run
```
yarn add || npm i
```
Fill ``.env`` variable as needed.

# Usage
Run
```
yarn test || npm run test
```
If everything passed, you can
```js
import {GetTransactionData, DecodeTransactionInfo} from "src/index"

GetTransactionData(TrxHash, EtherscanApiKey).then(logs => {
  DecodeTransactionInfo(logs).then(res => {
    console.log(res) // Decoded Transaction as Object
  })
})
```

Or you can deploy it on ```aws``` as API Endpoint via
```
yarn serverless deploy
```
In order to do this you will need an ```aws account``` and aws credential set as explained in [serverless docs](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/).

After that you can test the api endpoint serverlesss return to you via a ```POST``` request like
```
curl POST url/returned/by/serverless/ -d {"TrxHash": "transaction hash to decode"}
```

