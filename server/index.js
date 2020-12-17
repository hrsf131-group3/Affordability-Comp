//require('newrelic');
/* eslint-disable no-console */
const express = require('express');
const {getListing} = require('../controller/mongo.js');
// const path = require('path')
const connectDB = require('../DataBase/mongo.js');
connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('*/:id/mortgage', getListing);
// app.get('dbs', mongoCont.getAll);
