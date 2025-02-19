// const { Sequelize } = require("sequelize");
// const Database = new Sequelize("projectdummy","root","root",{
//     dialect:"mysql",
//     host:"localhost",
// })
// module.exports=Database

const mongoose = require("mongoose");
const Database = async () => {
  try {
    await mongoose.connect("mongodb+srv://shivam5676:123shivam@cluster0.byjmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected to mongo db");
  } catch (err) {
    console.log("wrr ehile connecting to mongo db", err);
  }
};
module.exports = Database;
