const Fixorium = require('../src/fixorium');

describe('Fixorium', () => {
  it('should swap tokens', async () => {
    const fixorium = new Fixorium(null); // Mock connection
    const swapTransaction = await fixorium.swapTokens('inputToken', 'outputToken', 100);
    expect(swapTransaction).toBeDefined();
  });

  it('should connect wallet', async () => {
    const fixorium = new Fixorium(null); // Mock connection
    const wallet = {}; // Mock wallet
    await fixorium.connectWallet(wallet);
    expect(fixorium.wallet).toBeDefined();
  });

  it('should get token price', async () => {
    const fixorium = new Fixorium(null); // Mock connection
    const price = await fixorium.getTokenPrice('solana');
    expect(price).toBeDefined();
  });
});
