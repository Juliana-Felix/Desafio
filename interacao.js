const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','Juliana','jumaster01',{
  host:"localhost",
  //qual servidor 
  dialect: 'mysql' 
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log("Falha ao se conectar:" +erro)
})

//then e catch vem da programação assincrona 