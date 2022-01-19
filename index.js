const express = require("express");
                //como é um modulo que peguei no npm e fiz a instalação, n precisa dizer onde o express estar
const app = express();
       // chamei o express para criar um sevidor com express

//rota é um caminho para sua aplicação, é preciso dela para q o servidor n der erro
//é tipo oque eu coloco depois da barra "/" em uma site ex: facebook/julianaFelix é diferente de só facebook
// express é orientada a rotas
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
               //dirname retorna o diretorio raiz do arquivo
});

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/sobre.html");
})

app.get("/blog",function(req,res){
    res.send("Bem vindo ao meu blog!");
})

app.get('/ola/:nome/:sobrenome',function(req,res){
    res.send("ola " + req.params.nome);
    // você so pode chamar a função send apenas 1 VEZ
    //req é responsavel a receber dados de uma aplicação, pelo req temos acesso a todos os parametros
})

app.listen(8082, function(){
    console.log("servidor rodando na url http://localhost:8082")
}); //essa função tem que ser a ultima do script
//localhost:8081. pra mandar uma mensagem você tem q criar uma função de callback

