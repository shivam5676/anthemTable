const sequelize = require("sequelize");
const Database = require("../database/database");

// const database=require("")
const customers = Database.define("tbl_customer", {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  contact_no: { type: sequelize.STRING, allowNull: false },
  first_name: { type: sequelize.STRING, allowNull: false },
  last_name: { type: sequelize.STRING, allowNull: false },
  email: { type: sequelize.STRING, allowNull: false },
  status: { type: sequelize.STRING, allowNull: false },
});
module.exports = customers;
