const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps.js')

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routers --> If we recieve this path, direct to linked file
app.use('/api/v1/bootcamps', bootcamps);

const logger = (req, res, next) => {
    req.hello = "Hello World 2";
    console.log('Middleware has run run run');
    next();
}

app.use(logger);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
