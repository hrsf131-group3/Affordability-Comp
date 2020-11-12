const express = require('express');
const path = require('path')

var app = express();
var PORT = 8020;

app.use(express.static('client/dist'));

app.listen(PORT, ()=>{
  console.log(`Listening on 127.0.0.1:${PORT}`)
});

// app.get('/', (req, res) => {
//   res.send('Hello from Server')
// })
