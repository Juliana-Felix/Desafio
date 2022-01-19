const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','Juliana','jumaster01',{
  host:"localhost",
    //qual servidor 
  dialect: 'mysql' 
})
//tabela postagens
const Postagem = sequelize.define('postagens', {
	//colunas
	titulo: {
	    type: Sequelize.STRING
	},
	conteudo: {
	    type: Sequelize.TEXT
	}
})

//Postam.sync({force:true})  ISSO GERA A TABELA REAL, execute só 1vez

//inserir dados dentro da tabelas
Postagem.create({
    titulo: "um titulo qualquer",
    conteudo: "dfjsdfoisjfoejofjeogj"
})


//tabela
const Usuario = sequelize.define('usuarios', {
	//columns
	nome: {
	  type: Sequelize.STRING
	},
	sobrenome: {
	  type: Sequelize.STRING
	},
	idade: {
	  type: Sequelize.INTEGER
	},
	email: {
	  type: Sequelize.STRING
	}
})

//inserir dados dentro da tabela
Usuario.create({
    nome: "Fernanda",
    sobrenome: "Lima",
    idade: 20,
    email: "julygomesfs@gmail.com"
})

//Usuario.sync({force:true}) sincronizar com o Banco ISSO GERA A TABELA REAL, ao executar deixe como comentario
//gera a tabela usuario