                   //require chama um modulo, modulo http é presente 
let http = require('http');
                //função de callback  (res é uma resposta ao usuario)
http.createServer(function(req,res){
    res.end("Hello world, welcome to my website");
    //aparece para o cliente
}).listen(8081);

console.log("sevidor rodando!")

//criação de sevidor do modo mais antigo