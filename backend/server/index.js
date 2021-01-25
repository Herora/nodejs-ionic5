const express = require("express");
const server = express();
const cors = require("cors");
const { Technology } = require("../models");

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", async(req, res) => {
    let technologies = await Technology.find();
    technologies = technologies.map(technology => {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return technology;
    });

    return res.send({ error: false, data: technologies });
});

server.get("/api/technology/:id", async(req, res) => {
    const { id } = req.params;
    let technology = await Technology.findById(id);
    return res.send({ error: false, data: technology });
});

server.get("/api/technology/search/:line_number", async(req, res) => {
    const { line_number } = req.params;
    let technologies = await Technology.find({
        line_number: { $regex: new RegExp(line_number, "i") }
    });

    return res.send({ error: false, data: technologies });
});

server.delete("/api/technology/:id", (req, res) => {
    const { id } = req.params;
    Technology.findById(id, (err, Technology) => {
        if (err) res.status(500).send({ message: `Error al pagar la cuenta: ${err}` })
        Technology.remove(err => {
            if (err) res.status(500).send({ message: `Error al pagar la cuenta: ${err}` })
            res.status(200).send({ message: `La cuenta ha sido pagada` })
        });
    })
});

module.exports = server;