const Mongoose = require('./db');
const Trip = require('./travlr');
const fs = require('fs');

var trips = JSON.parse(
    fs.readFileSync('./app_server/data/trips.json', 'utf8')
);

const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

seedDB()
  .then(() => {
      Mongoose.connection.close();
      process.exit(0);
  })
  .catch((err) => {
      console.error(err);
      process.exit(1);
  });