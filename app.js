const express = require('express');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware để xử lý JSON
app.use(express.json());

// Định nghĩa route
app.use('/api', contactRoutes);

// Xử lý lỗi cho URL không tồn tại
app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

module.exports = app;