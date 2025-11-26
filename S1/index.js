// Cerinta 1

// var http = require("http");

// //create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello web!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

//---------------------------------------------------------//

// Cerinta 2

const express = require("express");

const app = express();
// express() = factory function

app.use(express.static(__dirname + "/public"));

app.get("/", (req, resp) => {
  resp.send("hello world!");
});

// modificați serverul ca atunci când scriem in bara de adresă http://server/ping să răspundă cu pong
app.get("/ping", (req, resp) => {
  resp.send("pong");
});

app.listen(8080);

// npm = node package manager -> dependency management
