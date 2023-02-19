const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors')

const db = require('./utils/database')

db()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('api is running')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
})