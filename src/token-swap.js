const { Connection, PublicKey } = require('@solana/web3.js');
const { Jupiter } = require('@jup-ag/core');

class TokenSwap {
  constructor(connection) {
    this.connection = connection;
    this.jupiter = new Jupiter(connection);
  }

  async swapTokens(inputToken, outputToken, amount) {
    const quote = await this.jupiter.getQuote(inputToken, outputToken, amount);
    const swapTransaction = await this.jupiter.swap(quote);
    return swapTransaction;
  }
}

module.exports = TokenSwap;
