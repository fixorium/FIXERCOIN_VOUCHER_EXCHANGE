const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.get('/balance', walletController.getBalance);
router.post('/transfer', walletController.transferTokens);

module.exports = router;
