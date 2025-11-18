const express = require('express');
const morgan = require('morgan');
const path = require('path');
const data = require('./data.json');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Serve data
app.get('/data', (req, res) => {
  res.json(data);
});

// Root route
app.get('/', (req, res) => {
  res.status(200).send("It's working");
});

module.exports = app;

// Only start server when run directly
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}