const express = require("express");
const app = express();


app.get("/", (req,res)=>{
    res.send("Github")
})

app.post("/git", (req,res)=>{
    res.send("git")
})


app.listen(5000, console.log('server started'))