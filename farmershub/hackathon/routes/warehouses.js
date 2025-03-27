const express = require('express');
const router = express.Router();
const warehouses = require('../controllers/warehouses');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateWarehouse,isWarehouseOwner } = require('../middleware');
const Warehouse = require('../models/warehouse'); // Assuming Warehouse is the model
const warehouse = require('../models/warehouse');

// Route to list all warehouses
router.route('/')
    .get(catchAsync(warehouses.index)) // Get all warehouses
    .post(isLoggedIn, validateWarehouse, catchAsync(warehouses.createWarehouse)); // Create new warehouse

router.get("/search", async (req, res) => {
  try {
    const query = req.query.query;
    console.log("Search query:", query); // Debug log to check input
    if (!query) {
      return res.status(400).send("Search query is required.");
    }

    // Perform search based on name or location
    const warehouses= await Warehouse.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive name search
        { location: { $regex: query, $options: "i" } } // Case-insensitive location search
      ]
    });

    console.log("Search results:", warehouses); // Debug log for results
    res.render("warehouses/index", { warehouses });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred during the search.");
  }
});

// Route to show form to create a new warehouse
router.get('/new', isLoggedIn, warehouses.renderNewForm);

// Routes for a specific warehouse by ID
router.route('/:id')
    .get(catchAsync(warehouses.showWarehouse)) // Show specific warehouse
    .put(isLoggedIn, isWarehouseOwner, validateWarehouse, catchAsync(warehouses.updateWarehouse)) // Update warehouse
    .delete(isLoggedIn, isWarehouseOwner, catchAsync(warehouses.deleteWarehouse)); // Delete warehouse


    router.get('/:id/book', async (req, res) => {
    const { id } = req.params;
    try {
        const warehouse = await Warehouse.findById(id);  // Fetch the warehouse data
        res.render('warehouses/book', { warehouse });  // Render the booking form with warehouse details
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong!');
    }
});

router.post('/:id/book', (req, res) => {
    const { id } = req.params;  // Get the warehouse ID from the URL
    const { name, email, address, contact } = req.body;  // Get form data from the request body

    // Log the booking data to the console
    console.log(`Booking request for warehouse ID: ${id}`);
    console.log(`Name: ${name}, Email: ${email}, Address: ${address}, Contact: ${contact}`);

    // Set a flash message
    req.flash('success', 'Your booking request has been accepted!');

    // Redirect back to the warehouse list (or show page)
    res.redirect('/warehouses');
});








    
router.get('/:id/edit', isLoggedIn, isWarehouseOwner ,catchAsync(warehouses.renderEditForm));

module.exports = router;
