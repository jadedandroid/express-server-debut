const express = require("express");
const { response } = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>My very first server</h1> \n Hello");
})
app.get("/contact", function(req, res){
    res.send("Contact me at lacroixjaded@gmail.com");
})
app.get("/about", function(req, res){
    res.send("<h1>Hardwork beats talent if talent doesnt work hard</h1>  ")
})
app.get("/hobbies", function(req, res){
    res.send("fun things")
})
app.listen(3000, ()=> {
    console.log("Server has started on port")
});
