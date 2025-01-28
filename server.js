const express = require("express");
const app = express();
const PORT = 4000;

app.get("/",(res,req)=>{
    res.send("Hi I am Lakshmi Shankar!");
})

app.listen(PORT, ()=>{
    console.log(`The HTTP link---> http://localhost:${PORT}`);
})