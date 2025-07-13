const axios = require('axios');

class Utils {
  static async getTokenPrice(token) {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`);
      return response.data[token].usd;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = Utils;
