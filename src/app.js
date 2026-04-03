const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const rateLimiter = require('./middleware/rateLimiter');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/test', require('./routes/testRoutes'));
app.use('/api/records', require('./routes/recordRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/export', require('./routes/exportRoutes'));

require('./jobs/cronJobs');

module.exports = app;