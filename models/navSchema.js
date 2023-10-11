const mongoose = require("mongoose");

const navdataSchema = new mongoose.Schema({
  // Define your schema fields here
  name: {
    type: String,
  },
  // Add more fields as needed
});

module.exports = mongoose.model("Navdata", navdataSchema);
