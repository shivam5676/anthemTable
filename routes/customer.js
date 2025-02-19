const express = require("express");
const saveCustomer = require("../controllers/saveCustomer");
const getMembershipPlan = require("../controllers/getMembershipPlans");
const getAllCustomers = require("../controllers/getAllCustomer");
const deleteCustomer = require("../controllers/deleteCustomer");

const router = express.Router();
router.post("/saveCustomer", saveCustomer);
router.get("/getMembership", getMembershipPlan);
router.get("/getAllCustomer", getAllCustomers);
router.delete("/deleteCustomer/:id", deleteCustomer);
module.exports = router;
