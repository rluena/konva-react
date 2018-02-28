const express = require('express');
const path = require('path');
const app = express();

 const PORT = 3300;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(express.static('public'));

app.listen(PORT, (err) => {
  console.log(`Server listening to port ${PORT}`);
});