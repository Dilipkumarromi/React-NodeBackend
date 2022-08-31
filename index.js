require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser=require("body-parser");
const db=require('./Config/dbConnection')
const router=require('./Router/Router')

app.use(bodyParser.json({}))

app.use(cors());
app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT,PATCH,OPTIONS");
    next();
 })
 app.use(cors({
    origin:'*'
  }));
  app.use(router)
  const port=process.env.SERVER_PORT

  app.listen(port,(req, res) => {
    console.log(`listening on port${port}`)
})