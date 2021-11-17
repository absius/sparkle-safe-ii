const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {


  await User.deleteMany();

  await User.create({
    firstName: "Patrick",
    lastName: "Abernathy",
    email: "pat.abs@gmail.com",
    password: "testpass",
    jewelryList: [
    {
      jewelryName: "Necklace",
      description: "item 1",
      jewelryPrice: 2.99,
      assessedValue: 0,
      jewelryAssessor: "none",
      purchasedDate: "10/12/2021",
      jewelryWarranty: "10/12/2021",
      serviceDate: "10/12/2021",
      jewelryPhoto: "",
      receiptPhoto: "",
    },
    {
      jewelryName: "Ring",
      description: "item 2",
      jewelryPrice: 2.99,
      assessedValue: 0,
      jewelryAssessor: "none",
      purchasedDate: "10/12/2021",
      jewelryWarranty: "10/12/2021",
      serviceDate: "10/12/2021",
      jewelryPhoto: "",
      receiptPhoto: "",
    },
  ],
  });

  console.log("users seeded");

  process.exit();
});
