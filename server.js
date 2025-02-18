const express = require("express");
const Database = require("./database/database");
const customers = require("./models/tbl_customers");
const membership = require("./models/tbl_membership");
const app = express();
// customers.hasOne("membership");
// membership.belongsToMany("customers")
customers.belongsTo(membership);
membership.hasMany(customers);
Database.sync(() => {
  app.listen(2000, () => {
    console.log("hello");
  });
});
