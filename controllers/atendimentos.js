module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        res.send("voce entrou em atendimentos");
    });
    app.post("/atendimentos", (req, res) => {
        res.send("voce entrou em atendimentos, rota de post");
    });
}