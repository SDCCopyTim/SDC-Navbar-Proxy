const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

let port = 3000;
app.listen(port, () => console.log(`Connected and listening on port ${port}`));