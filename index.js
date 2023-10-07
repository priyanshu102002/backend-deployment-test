require('dotenv').config()
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Helloooo!");
});

app.get('/login',(req,res) => {
    res.send("<h1>Please Login</h1>")
})

app.get("/signup",(req,res)=>{
    res.send("<h1>signUp page Dosto</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`hello , ${process.env.PORT}`);
});
