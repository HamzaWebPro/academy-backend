const Navdata = require('../models/navSchema'); // Import your Navdata model

// Create a new "navdata" record
exports.createNavdata = async (req, res) => {
    const {name} =  req.body

    const  newNavdata =  new Navdata({name}); // Create a new Navdata instance using the request body
    await newNavdata.save(); // Save the new record to the database
    res.json(newNavdata); // Send the saved record as a response

};

exports.getAllNavdata = async (req, res) => {
    try {
      const allNavdata = await Navdata.find({}); // Retrieve all "navdata" records from the database
      res.json(allNavdata); // Send the retrieved records as a response
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving "navdata" records' });
    }
  };
  
  // Delete a "navdata" record by ID
  exports.deleteNavdata = async (req, res) => {
    try {
      const{ navdataId }= req.body;
      const deletedNavdata = await Navdata.findByIdAndRemove(navdataId); // Find and delete the "navdata" record by ID
      if (!deletedNavdata) {
        return res.status(404).json({ error: 'Navdata not found' });
      }
      res.json(deletedNavdata); // Send the deleted record as a response
    } catch (error) {
      res.status(500).json({ error: 'Error deleting "navdata" record' });
    }
  };