'use strict';

const express = require('express');
const io = require('socket.io-client');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

// Models
const Moisture = require('./models/moisture.js');
const moisture = new Moisture();

const socket = io.connect('http://localhost:3005');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

let moistureSensor = (message) => {
  console.log('Hello World from TCP');
  console.log('Message: ', message);
  // Save to DB
};

app.get('/data', (req, res) => {
  let payload = 'Hello World from client';
  socket.emit('req-data', payload);
  res.status(200).send(payload);
});

app.get('*', (req, res) => {
  res.status(404).send('404 not found');
});

app.use((err, req, res) => {
  res.status(500).send('Server error!');
});

socket.on('moisture-sensor', moistureSensor);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || 3006;
    console.log('Hello World!');
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
