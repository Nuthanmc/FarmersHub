
const { warehouseSchema, reviewSchema } = require('./schemas.js'); // Change schema name if necessary
const ExpressError = require('./utils/ExpressError.js');
const Warehouse = require('./models/warehouse.js'); // Change model name to warehouse
const { Product, productSchema } = require('./models/product');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.isAuthor = (req, res, next) => {
    if (!req.user || req.user._id !== req.params.id) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/warehouses/${req.params.id}`);
    }
    next();
};

// module.exports.isWarehouseOwner = async (req, res, next) => { // Change to isWarehouseOwner instead of isAuthor
//     const { id } = req.params;
//     const warehouse = await Warehouse.findById(id);
//     if (!warehouse.owner.equals(req.user._id)) { // Assuming warehouses have an 'owner' field
//         req.flash('error', 'You do not have permission to do that!');
//         return res.redirect(`/warehouses/${id}`);
//     }
//     next();
// }

module.exports.isWarehouseOwner = async (req, res, next) => {
    const { id } = req.params;
    try {
        // Find the warehouse by its ID
        const warehouse = await Warehouse.findById(id);
        if (!warehouse) {
            req.flash('error', 'Warehouse not found');
            return res.redirect('/warehouses');
        }

        // Check if the logged-in user is the owner (author) of the warehouse
        if (!warehouse.author.equals(req.user._id)) { // Make sure the field name matches what you have in your schema
            req.flash('error', 'You do not have permission to do that!');
            return res.redirect(`/warehouses/${id}`);
        }

        // Proceed to the next middleware or route handler if the user is the owner
        next();
    } catch (error) {
        req.flash('error', 'Error checking permissions');
        return res.redirect('/warehouses');
    }
};


module.exports.validateWarehouse = (req, res, next) => {
    // Assuming you're using Joi for validation
    const { error } = warehouseSchema.validate(req.body); // Validate request body
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        req.flash('error', msg);
        return res.redirect('/warehouses/new');
    }
    next();
};


module.exports.isProductOwner = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product.owner.equals(req.user._id)) { // Assuming products have an 'owner' field
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/products/${id}`);
    }
    next();
};

module.exports.validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body); // Validate request body
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        req.flash('error', msg);
        return res.redirect('/products/new'); // Redirect to product creation page with validation error messages
    }
    next();
};



