const express = require('express');
const PORT = process.env.port || 8080;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'form', 'build')));

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});