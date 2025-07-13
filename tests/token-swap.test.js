const TokenSwap = require('../src/token-swap');
const Connection = require('@solana/web3.js').Connection;

describe('TokenSwap', () => {
  const connection = new Connection('https:                          
  const tokenSwap = new TokenSwap(connection);

  it('//api.devnet.solana.com');
  const tokenSwap = new TokenSwap(connection);

  it('should swap tokens', async () => {
    const swapTransaction = await tokenSwap.swapTokens('inputToken', 'outputToken', 100);
    expect(swapTransaction).toBeDefined();
  });
});
