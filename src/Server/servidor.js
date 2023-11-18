const express = require ("express");

const server = express();
const PORT = 3000;

server.get("/", (request, response) => {
    response.send("Hola, me hiciste una petición tipo get desde el navegador");
});

server.listen(3000);