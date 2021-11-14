const db = require('./connection');
const { User, Jewelry } = require('../models');

db.once('open', async () => {
  

  const jewelryList = await Jewelry.insertMany([
    {
      jewelryName: 'Necklace',
      description:
        'item 1',
        jewelryPrice: 2.99,
        assessedValue: 0,
        jewelryAssessor: "none",
        purchasedDate:"10/12/2021",
        jewelryWarranty:"10/12/2021",
        serviceDate:"10/12/2021",
      jewelryPhoto: '',
      receiptPhoto: ''
    },
    {
      jewelryName: 'Ring',
      description:
        'item 2',
        jewelryPrice: 2.99,
        assessedValue: 0,
        jewelryAssessor: "none",
        purchasedDate:"10/12/2021",
        jewelryWarranty:"10/12/2021",
        serviceDate:"10/12/2021",
      jewelryPhoto: '',
      receiptPhoto: ''
    }
  ]);

  console.log('jewelry seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Patrick',
    lastName: 'Abernathy',
    email: 'pat.abs@gmail.com',
    password: 'testpass',
    orders: [
      {
        jewelryList: [jewelryList[0]._id, jewelryList[1]._id]
      }
    ]
  });


  console.log('users seeded');

  process.exit();
});
