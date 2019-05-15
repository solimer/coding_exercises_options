const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./lib/routes');
const config = require('../config');

mongoose.connect('mongodb://admin:Sparks123@ds157256.mlab.com:57256/matches', { useNewUrlParser: true });
// mongoose.set('useCreateIndex', true);
// mongoose.Promise = global.Promise;

const app = express();
const port = config.server.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });
}

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
