require('dotenv').config();

process.on(`uncaughtException`, console.error); // When does this kick in?

//const {config} = require('dotenv');

//config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req,res)=>{
  res.send(`\nHello World\n`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
