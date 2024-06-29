const express = require('express')
const  app = express()
const path = require('path'); // Import Node.js path module
const port = 3000



app.get("/",(req,res)=>{
    res.sendFile("index.html", { root: __dirname + "/views" });
})


app.listen(port,() => {
    console.log("server is runnig on port "+ port)
})