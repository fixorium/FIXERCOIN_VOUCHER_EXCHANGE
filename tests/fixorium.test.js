const Fixorium = require('../src/fixorium');
const Connection = require('@solana/web3.js').Connection;

describe('Fixorium', () => {
  const connection = new Connection('https:                          
  const fixorium = new Fixorium(connection);

  it('//api.devnet.solana.com');
  const fixorium = new Fixorium(connection);

  it('should swap tokens', async () => {
    const swapTransaction = await fixorium.swapTokens('inputToken', 'outputToken', 100);
    expect(swapTransaction).toBeDefined();
  });

  it('should connect wallet', async () => {
    const wallet = 'walletPublicKey';
    const balance = await fixorium.connectWallet(wallet);
    expect(balance).toBeDefined();
  });

  it('should get token price', async () => {
    const price = await fixorium.getTokenPrice('solana');
    expect(price).toBeDefined();
  });
});
