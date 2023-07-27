const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const imageRoutes = require('./src/router/router');
const database = require('./src/config/database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(imageRoutes);
console.log('Testing');
database.on('open', () => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
database.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error);
});