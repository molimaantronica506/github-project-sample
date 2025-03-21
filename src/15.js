const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to GitHub Project Sample</h1>
    <p>This is a simple Node.js application.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
