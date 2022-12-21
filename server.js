const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const loggeer = (req, res, next) => {
    req.hello = "Hello World 2";
    console.log('Middleware has run run run');
    next();
}

app.use(loggeer);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
