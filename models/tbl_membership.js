const { default: mongoose } = require("mongoose");

const { STRING } = require("sequelize");

const membershipSchema = new mongoose.Schema({
  membership_name: { type: String, required: true },
  validity: { type: String, required: true },
 
});

const Membership = mongoose.model("membership", membershipSchema);

module.exports = Membership;
