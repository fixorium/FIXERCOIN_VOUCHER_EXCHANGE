const Wallet = require('../src/wallet');
const Connection = require('@solana/web3.js').Connection;

describe('Wallet', () => {
  const connection = new Connection('https:                          
  const wallet = new Wallet(connection);

  it('//api.devnet.solana.com');
  const wallet = new Wallet(connection);

  it('should connect wallet', async () => {
    const walletPublicKey = 'walletPublicKey';
    const balance = await wallet.connectWallet(walletPublicKey);
    expect(balance).toBeDefined();
  });
});
