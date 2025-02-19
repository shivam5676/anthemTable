const customers = require("../models/tbl_customers");

const deleteCustomer = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const customerData = await customers.findById({ _id: id });

    if (!customerData) {
      return res.status(400).json({ msg: "no customers data found..." });
    }
    console.log(customerData);
    await customerData.deleteOne({ _id: id });
    return res.status(200).json({
      data: customerData,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "something went wrong", err: error });
  }
};
module.exports = deleteCustomer;
