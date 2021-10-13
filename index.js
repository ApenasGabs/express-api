const express = require("express");
const app = express();
app.get("/", (req, res) => {
    console.log("servidor rodando");
    res.send("voce entrou em home");
});

app.listen(3000);