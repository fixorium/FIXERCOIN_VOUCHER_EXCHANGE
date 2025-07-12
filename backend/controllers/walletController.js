const Wallet = require('../models/Wallet');

exports.getBalance = async (req, res) => {
  const wallet = await Wallet.findOne({ userId: req.user.id });
  res.json({ balance: wallet?.balance || 0 });
};

exports.transferTokens = async (req, res) => {
  // logic
};
