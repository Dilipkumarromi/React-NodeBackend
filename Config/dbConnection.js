const { dnsPrefetchControl } = require('helmet');
const {Sequelize,DataTypes}=require('sequelize');

require('dotenv').config()
 
const user=process.env.USER
const password=process.env.PASSWORD
const database=process.env.DATABASE
 
const localHost=process.env.HOST

const sequelize=new Sequelize(database,user,password,{
    host: localHost,
    dialect: 'mysql',  
    dialectOptions: {
        // Observe the need for this nested `options` field for MSSQL
        options: {
          // Your tedious options here
          useUTC: false,
          dateFirst: 1,
          encrypt: false
          
        }
        
      }
      
});
    sequelize.authenticate().then(() => {
        console.log("Connect Sequelize to MSSQL Server");
       
    })
    .catch(err => {
        console.log("Error",err)
    })

  const db={}
  db.Sequelize = Sequelize
  db.sequelize=sequelize

  db.StudentRegistration=require('../Model/StudentRegistrationModel')(sequelize,DataTypes)
  
     
  db.sequelize.sync()
  .then(() => {
      console.log("MyDB:- Re-sync")
      
  })
module.exports=db