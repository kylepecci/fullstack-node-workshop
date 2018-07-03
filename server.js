const express = require("express");
const path = require("path");

const compliments = [
    "You look nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "No one loves you",
    "You're ugly",
    "You will die alone",
    "Donald Trump is a better person than you",
    "Dumbest person I've ever met",
];


function getRandomCompliment(){
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

function getRandomInsult(){
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/compliment", function(req, res){
    res.json({
        compliment: getRandomCompliment()
    })
    .end();
});

app.get("/insult", function(req, res){
    res.json({
        compliment: getRandomInsult()
    })
    .end();
});

app.use("/public", express.static("./public"));

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function(){
    console.log("listening on Port 3000");

});


/////// Creating basic server \\\\\\\\
// const http = require("http");

// const server = http.createServer(function(req, res){
//     console.log(`user visited ${req.url}`);
//     res.end("hello!");
// });

// console.log("listening on http://localhost:3000");
// server.listen(3000);