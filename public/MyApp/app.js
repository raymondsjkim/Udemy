console.log("yoyoyo node good!");

var express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(request, response) {
    response.send("Goodbye!"); 
});

// "/dog" => "MEOW!"
app.get("/dog", function(request, response) {
    console.log("someone has made a request to /dog");
    response.send("MEOW!"); 
});

app.get("*", function(request, response) {
    response.send("You are a star!!"); 
});

// Tell Express to listen for requests (start server) 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!");
});