const express = require("express");
const Database = require("./database/database");
const router = require("./routes/customer");
const CORS = require("cors");
const Membership = require("./models/tbl_membership");

const app = express();
app.use(CORS());
app.use(express.json());

app.use(router);

Database().then(async () => {
  await seedCustomers(); // Ensure customers are inserted on startup
});

async function seedCustomers() {
  try {
    const existingCustomers = await Membership.countDocuments();

    if (existingCustomers === 0) {
      const defaultCustomers = [
        {
          membership_name: "GOLD",
          validity: "1 YEARS",
        },
        {
          membership_name: "DIAMOND",
          validity: "2 YEARS",
        },
        {
          membership_name: "baSIC",
          validity: "3 MONTHS",
        },
      ];

      await Membership.insertMany(defaultCustomers);
      console.log("Default customer data inserted successfully.");
    } else {
      console.log("Customer data already exists. No insertion needed.");
    }
  } catch (error) {
    console.error("Error seeding customer data:", error);
  }
}
app.listen(2000, () => {
  console.log("hello");
});
