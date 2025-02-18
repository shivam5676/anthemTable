const sequelize = require("sequelize");
const Database = require("../database/database");

// const database=require("")
const membership = Database.define("tbl_membership", {
  id: { type: sequelize.INTEGER, allowNull: false ,autoIncrement:true,primaryKey:true},
  membership_name: { type: sequelize.STRING, allowNull: false },
  validity: { type: sequelize.STRING, allowNull: false },
  email: { type: sequelize.STRING, allowNull: false },
  status: { type: sequelize.STRING, allowNull: false },
});
module.exports = membership;
