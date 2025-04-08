// Node.js example: Simple HTTP server using Express and fs

const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/data', (req, res) => {
  const dataFile = 'data.json';
  
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify({ message: 'Hello world' }), { flag: 'w' });
  }
  
  try {
    res.send(fs.readFileSync(dataFile));
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to read data file');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
