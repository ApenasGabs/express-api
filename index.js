const customExpress = require("./config/customExpress")
const conexao = require("./infra/conexao")

conexao.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('banco de dados conectado🙌');
        app.listen(3000,
            () => console.log("servidor rodando 👁️ 👄👁️"));
    }
});
const app = customExpress();