const { Sequelize } = require("sequelize");
const Database = new Sequelize("projectdummy","root","root",{
    dialect:"mysql",
    host:"localhost",
})
module.exports=Database