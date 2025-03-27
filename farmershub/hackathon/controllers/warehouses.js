const Warehouse = require('../models/warehouse');
const maptilerClient = require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;

// Render all warehouses
module.exports.index = async (req, res) => {
    const warehouses = await Warehouse.find({}).populate('author');
    res.render('warehouses/index', { warehouses });
};

// Render the new warehouse form
module.exports.renderNewForm = (req, res) => {
    res.render('warehouses/new');
};

// Create a new warehouse
module.exports.createWarehouse = async (req, res, next) => {
    try {
        // Create a new warehouse document
        const geoData = await maptilerClient.geocoding.forward(req.body.warehouse.location, { limit: 1 });
         const warehouse = new Warehouse(req.body.warehouse);
         console.log(geoData);
         res.send("ok!!")
        // warehouse.geometry = geoData.features[0].geometry;
        // warehouse.author = req.user._id; // Set the author of the warehouse to the current user
        // // Save the warehouse to the database
        // await warehouse.save();

        // req.flash('success', 'Successfully created a new warehouse!');
        // res.redirect(`/warehouses/${warehouse._id}`);
    } catch (error) {
        next(error);
    }
};

// Show a specific warehouse
module.exports.showWarehouse = async (req, res) => {
    const { id } = req.params;
    const warehouse = await Warehouse.findById(id);
    if (!warehouse) {
      req.flash('error', 'Warehouse not found');
      return res.redirect('/warehouses');
    }
    res.render('warehouses/show', { warehouse });
  };

// Render the edit form for a warehouse
module.exports.renderEditForm = async (req, res) => {
    try {
        const { id } = req.params;
        const warehouse = await Warehouse.findById(id);
        if (!warehouse) {
            req.flash('error', 'Cannot find that warehouse!');
            return res.redirect('/warehouses');
        }
        res.render('warehouses/edit', { warehouse });
    } catch (error) {
        req.flash('error', 'Error loading edit form!');
        res.redirect('/warehouses');
    }
};

// Update a warehouse
// module.exports.updateWarehouse = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const warehouse = await Warehouse.findByIdAndUpdate(id, { ...req.body.warehouse }, { new: true });
//         await warehouse.save();
//         req.flash('success', 'Successfully updated warehouse!');
//         res.redirect(`/warehouses/${warehouse._id}`);
//     } catch (error) {
//         req.flash('error', 'Error updating warehouse!');
//         res.redirect(`/warehouses/${req.params.id}/edit`);
//     }
// };


module.exports.updateWarehouse = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate warehouse existence
        const warehouse = await Warehouse.findById(id);
        if (!warehouse) {
            req.flash('error', 'Warehouse not found!');
            return res.redirect('/warehouses');
        }

        // Update warehouse details
        const updatedWarehouse = await Warehouse.findByIdAndUpdate(
            id, 
            { ...req.body.warehouse }, 
            { new: true, runValidators: true }
        );

        req.flash('success', 'Successfully updated warehouse!');
        res.redirect(`/warehouses/${updatedWarehouse._id}`);
    } catch (error) {
        console.error('Error updating warehouse:', error);
        req.flash('error', `Error updating warehouse: ${error.message}`);
        res.redirect(`/warehouses/${req.params.id}/edit`);
    }
};





// Delete a warehouse
module.exports.deleteWarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        await Warehouse.findByIdAndDelete(id);
        req.flash('success', 'Successfully deleted warehouse!');
        res.redirect('/warehouses');
    } catch (error) {
        req.flash('error', 'Error deleting warehouse!');
        res.redirect('/warehouses');
    }
};
