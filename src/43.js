const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to GitHub Project Sample</h1>
    <p>This is a sample application using Node.js and Express.</p>
  `);
});

app.listen(3000, () => console.log('Server running on port 3000'));
