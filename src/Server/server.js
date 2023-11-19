//const http = require ("http");

//const server = http.createServer((req, res) => {
    //res.end("Se logró");
//});

//server.listen(3000, "localhost", () => {
    //console.log("Si funciona");
//});

//const express = require ("express");

//const server = express();
//const PORT = 3000;

//server.get("/", (req, res) => {
    //res.send("Holis, esto es una petición");
//});

//server.listen(3000);

const server = require("express")();

server.get("/login", (req, res) => {
    res.send(JSON.stringify({ user: "Holis"}));
});

server.listen(3000, () => {
    console.log("Servidor iniciado");
});