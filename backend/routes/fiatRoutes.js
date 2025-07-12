const express = require('express');
const router = express.Router();
const fiatController = require('../controllers/fiatController');

router.post('/buy', fiatController.buyTokens);
router.post('/sell', fiatController.sellTokens);

module.exports = router;
