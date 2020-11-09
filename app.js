const express= require('express')
const bodyParser=require('body-parser')
require('dotenv').config()
const app =express()
const morgan= require('morgan')
const port = process.env.NODE_PORT || 4040;

app.use(bodyParser.json());
app.use(morgan('tiny'));

const userroutes = require('./userRouters')

app.get('/', (rq,rs) =>{
    rs.send('Hello everyone!');
    })

app.use('/users/',userroutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })