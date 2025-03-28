const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK' });
});

// Ne pas écouter sur le port si on est en test
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

module.exports = app;