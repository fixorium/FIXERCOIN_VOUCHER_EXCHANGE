const app = require('../backend/server');

module.exports = async (req, res) => {
  await app(req, res);
};
