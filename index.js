const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello, World</h1>")
});

app.get("/greet",(req,res) => {
    res.send("<h1>Greetings to the World!!!</h1>")
})

app.listen(8800, () => {
    console.log("🚀 Server running");
})