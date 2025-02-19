const { default: mongoose } = require("mongoose");

const customersSchema = new mongoose.Schema({
  contact_no: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true },
  MembershipId: { type: mongoose.Schema.Types.ObjectId, ref: "Membership" },
});

const customers = mongoose.model("customers", customersSchema);

module.exports = customers;
