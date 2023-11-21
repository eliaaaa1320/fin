const express = require("express")();
const server = express();
const cors = require("cors");

server.use(cors()); //Permite la conexión con otros servidores
server.use(express.json()); //Para leer los json

server.get("/", (req, res) => {
    res.send("Holis");
});

server.listen(3000, () => {
    console.log("Servidor iniciado");
});
