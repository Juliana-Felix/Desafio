const express = require("express");
                //como é um modulo que peguei no npm e fiz a instalação, n precisa dizer onde o express estar
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
//receber o Post que foi exportado
//conexão com o banco de dados, chamamos o template engenie handblebars na versão do express q nos permite
// fazer loop, condicional etc. no html, e chamamos o express para fazer a conexao http e criar rotas


//precisamos falar para o express que queremos usar o handlebars como template engennier
//config
   //template engine                                main é um template padrao da sua aplicação
      app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
      app.set('view engine', 'handlebars')
      //body parser configure
      app.use(bodyParser.urlencoded({extended: false}))
      app.use(bodyParser.json())
      //conexão com o banco 
    

// rotas
      app.get('/',function(req,res){
        Post.findAll({order: [['id','DESC']]}).then(function(posts){
          res.render('home',{posts:posts})
        })
        //vai retornar tudo da tabela post
      })

      app.get('/cad',function(req,res) {
          res.render('formulario')
          //renderizar o arquivo formulario
      })

      app.post('/add',function(req,res){
        Post.create({
          titulo:req.body.titulo,
          conteudo:req.body.conteudo
        }).then(function(){
          res.redirect('/')
          //res.send("post criado com sucesso")
        }).catch(function(erro){
          res.send("Houve um erro: "+ erro)
        })
        //res.send("texto:" + req.body.título+ "Conteudo:" +req.body.conteudo)
      })

      app.get('/deletar/:id',function(req,res){
        Post.destroy({where:{'id': req.params.id}}).then(function(){
          res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
          res.send("Esta postagem não existe!")
        })
      })

app.listen(8083, function(){
    console.log("servidor rodando na url http://localhost:8083")
});