const conexao = require("./infra/conexao")
const Table = require('./infra/tables')
const customExpress = require("./config/customExpress")

conexao.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        const app = customExpress();
        console.log('banco de dados conectado🙌');
        Table.init(conexao)
        app.listen(3000,
            () => console.log("servidor rodando 👁️ 👄👁️"));
    }
});