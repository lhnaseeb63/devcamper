const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');


// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps.js')

const app = express();

// Dev logging middleware --> Only want it to run if we are in the development environment
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


// Mount routers --> If we recieve this path, direct to linked file
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection',(err, promise)=>{
    console.log(`Unhandled Rejection (Error): ${err.message}.red`);

    // Close server and exit process with failure (1)
    server.close(()=>process.exit(1));
})