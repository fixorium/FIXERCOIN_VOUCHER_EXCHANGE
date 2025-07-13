# Fixorium Library

Fixorium is a JavaScript library for building decentralized applications on the Solana blockchain. It provides a simple and intuitive API for interacting with the Solana blockchain, including token swaps and wallet connections.

## Table of Contents
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [API Documentation](#api-documentation)
* [Contributing](#contributing)
* [License](#license)

## Features
* Token swaps: Swap tokens on the Solana blockchain using the Jupiter Aggregator API.
* Wallet connections: Connect to Solana wallets and retrieve balance information.
* Token prices: Get the current price of tokens using the CoinGecko API.

## Installation
To install the Fixorium library, run the following command:
npm install fixorium-library


## USAGE

Fixorium library:
javascript
<script>
  const Fixorium = require('fixorium-library');
const connection = new Connection('https:                          
const fixorium = new Fixorium(connection);

              
fixorium.swapTokens('inputToken', 'outputToken', 100)
  .then((swapTransaction) => {
    console.log(swapTransaction);
  })
  .catch((error) => {
    console.error(error);
  });

                 
fixorium.connectWallet('walletPublicKey')
  .then((balance) => {
    console.log(balance);
  })
  .catch((error) => {
    console.error(error);
  });

                  
fixorium.getTokenPrice('solana')
  .then((price) => {
    console.log(price);
  })
  .catch((error) => {
    console.error(error);
  });
  </script>
