const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const bootcamps = require('./routes/bootcamps');
//  Load env files
dotenv.config({
  path: './config/config.env'
});

const app = express();

//  Logger Middleware
app.use(morgan('tiny'));

//  Routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
