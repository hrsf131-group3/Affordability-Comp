/* eslint-disable no-console */
const express = require('express');
const mongoCont = require('../controller/mongo.js');
// const path = require('path')

const app = express();
const PORT = 8020;

app.use(express.json());
app.use('/mortgage/:id', express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('*/:id/db', mongoCont.get);
// app.get('dbs', mongoCont.getAll);
