const express = require("express");
const route = express.Router();


route.get('/display', (req, res) => {
    res.send("My first application");
});

route.get('/display/:name', (req, res) => {
    res.send(`Hi,${req.params.name} welome to Node js Application`);
});


module.exports = route;