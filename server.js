const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

const bootcamps = require('./routes/bootcamps');
//  Load env files
dotenv.config({
  path: './config/config.env'
});

//  DB Connection
connectDB();

//  App Instance
const app = express();

if (process.env.NODE_ENV === 'development') {
  //  Logger Middleware
  app.use(morgan('tiny'));
}

//  Routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold
  )
);

process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  server.close(() => process.exit(1));
});
