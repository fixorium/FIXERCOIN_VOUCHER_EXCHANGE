const TokenSwap = require('./token-swap');
const Wallet = require('./wallet');
const Utils = require('./utils');

class Fixorium {
  constructor(connection) {
    this.connection = connection;
    this.tokenSwap = new TokenSwap(connection);
    this.wallet = new Wallet(connection);
  }

  async swapTokens(inputToken, outputToken, amount) {
    return this.tokenSwap.swapTokens(inputToken, outputToken, amount);
  }

  async connectWallet(wallet) {
    return this.wallet.connectWallet(wallet);
  }

  async getTokenPrice(token) {
    return Utils.getTokenPrice(token);
  }
}

module.exports = Fixorium;
