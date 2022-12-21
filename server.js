const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamps.js')

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logging middleware --> Only want it to run if we are in the development environment
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


// Mount routers --> If we recieve this path, direct to linked file
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
