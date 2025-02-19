const { isValidObjectId } = require("mongoose");
const customers = require("../models/tbl_customers");
const Membership = require("../models/tbl_membership");

const getMembershipPlan = async (req, res) => {
  try {
   
    const MembershipData = await Membership.find();
    console.log(MembershipData);
    if (!MembershipData) {
      return res
        .status(400)
        .json({ msg: "no membership data found for provided Id" });
    }
    return res.status(200).json({ data: MembershipData });
  } catch (error) {
    return res.status(500).json({ msg: "something went wrong ", err: error });
  }
};
module.exports = getMembershipPlan;
