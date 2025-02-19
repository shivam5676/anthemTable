const { isValidObjectId } = require("mongoose");
const customers = require("../models/tbl_customers");
const Membership = require("../models/tbl_membership");

const saveCustomer = async (req, res) => {
  if (!req?.body) {
    return res.status(400).json({ msg: "send required fields" });
  }
  const { first_name, last_name, status, email, contact_no, membershipId } =
    req.body;
  if (!first_name) {
    return res.status(400).json({ msg: "first name can not be blank" });
  }
  if (!last_name) {
    return res.status(400).json({ msg: "last name can not be blank" });
  }
  if (!status) {
    return res.status(400).json({ msg: "status can not be blank" });
  }
  if (!contact_no) {
    return res.status(400).json({ msg: "contact no can not be blank" });
  }
  if (!membershipId) {
    return res.status(400).json({ msg: "membership can not be blank" });
  }
  if (!email) {
    return res.status(400).json({ msg: "email can not be blank" });
  }
  if (!email.includes("@") || !email.includes(".com")) {
    return res
      .status(400)
      .json({ msg: "provide proper email with @ and .com " });
  }
  try {
    if (!isValidObjectId(membershipId)) {
      return res.status(400).json({ msg: "invalid membershipId format" });
    }
    const MembershipData = await Membership.findOne({ _id: membershipId });
    console.log(MembershipData);
    if (!MembershipData) {
      return res
        .status(400)
        .json({ msg: "no membership data found for provided Id" });
    }
    const customerData = await customers.create({
      first_name,
      last_name,
      status,
      email,
      contact_no,
    });

    if (!customerData) {
      return res
        .status(400)
        .json({ msg: "someting went wrong while saving customer" });
    }

    customerData.MembershipId = MembershipData._id;
    customerData.save();
    return res
      .status(200)
      .json({ msg: "customer saved successfully", data: customerData });
  } catch (error) {
    return res.status(500).json({ msg: "something went wrong ", err: error });
  }
};
module.exports = saveCustomer;
