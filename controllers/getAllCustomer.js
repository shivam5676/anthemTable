const customers = require("../models/tbl_customers");
const Membership = require("../models/tbl_membership");
// Membership
const getAllCustomers = async (req, res) => {
  try {
    const customersData = await customers.find().populate({
      path: "MembershipId", // Ensure this matches the reference in the customers schema
      model: Membership, // Explicitly specify the model
      select: "membership_name",
    });

    if (!customersData) {
      return res.status(400).json({ msg: "no customers data found..." });
    }
    console.log(customersData.MembershipId);
    return res.status(200).json({
      data: 
        customersData,
      
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "something went wrong", err: error });
  }
};
module.exports = getAllCustomers;
