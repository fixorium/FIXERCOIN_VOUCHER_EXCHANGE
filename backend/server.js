const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const walletRoutes = require('./routes/walletRoutes');
const fiatRoutes = require('./routes/fiatRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/wallet', walletRoutes);
app.use('/api/fiat', fiatRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
