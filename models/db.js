const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp','Juliana','jumaster01',{
    host:"localhost",
      //qual servidor 
    dialect: 'mysql' 
  })

  //exportar Sequelize e sequelize
module.exports = {
    Sequelize : Sequelize,
    sequelize:sequelize
}