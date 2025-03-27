const express = require("express");
const router = express.Router();
const Product = require("../models/product"); // Adjust the path if necessary
 // Assuming you have a Wishlist model

// Utility function for async error handling
const asyncWrap = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Fetch all products or filter by category or search
router.get("/", asyncWrap(async (req, res) => {
    const user = req.user || null; // Fetch user from session if available
    const { category, search } = req.query; // Get category and search from query string

    let products;
    const query = {};

    // Filter by category if provided
    if (category) {
        query.category = category;
    }

    // Search by name or description if provided
    if (search) {
        const regex = new RegExp(search, 'i'); // 'i' for case-insensitive search
        query.$or = [
            { name: regex },
            { description: regex }
        ];
    }

    products = await Product.find(query); // Fetch products based on the constructed query

    res.render("products/index", { products, user, category, search }); // Pass category and search to the view
}));

// Render form to create a new product
router.get("/new", (req, res) => {
    const user = req.user || null;
    const categories = ['Fruits', 'Vegetables', 'Equipment', 'Crop Nutrition', 'Seeds', 'Grains']; // Categories list
    res.render("products/new", { user, categories }); // Pass categories to the form
});

// Show details of a specific product
router.get("/:id", asyncWrap(async (req, res) => {
    const user = req.user || null;
    const product = await Product.findById(req.params.id);
    if (!product) {
        req.flash("error", "Product not found");
        return res.redirect("/products");
    }
    res.render("products/show", { product, user });
}));

// Render edit form for a specific product
router.get("/:id/edit", asyncWrap(async (req, res) => {
    const user = req.user || null;
    const product = await Product.findById(req.params.id);
    if (!product) {
        req.flash("error", "Product not found");
        return res.redirect("/products");
    }
    const categories = ['Fruits', 'Vegetables', 'Equipment', 'Crop Nutrition', 'Seeds', 'Grains']; // Categories list
    res.render("products/edit", { product, user, categories }); // Pass categories to the edit form
}));

// Create a new product
router.post("/", asyncWrap(async (req, res) => {
    const product = new Product(req.body.product);
    await product.save();
    req.flash("success", "Product added successfully!");
    res.redirect(`/products/${product._id}`);
}));

// Update a product
router.put("/:id", asyncWrap(async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, { ...req.body.product }, { new: true, runValidators: true });
    if (!updatedProduct) {
        req.flash("error", "Product not found");
        return res.redirect(`/products/${id}/edit`);
    }
    req.flash("success", "Product updated successfully!");
    res.redirect(`/products/${updatedProduct._id}`);
}));

// Delete a product
router.delete("/:id", asyncWrap(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
        req.flash("error", "Product not found");
        return res.redirect("/products");
    }
    req.flash("success", "Product deleted successfully!");
    res.redirect("/products");
}));

// Add to Cart
router.post("/cart/add", asyncWrap(async (req, res) => {
    const { productId } = req.body;
    const user = req.user; // Assuming user is stored in session

    // Logic to add product to user's cart
    const cart = await Cart.findOne({ user: user._id }) || new Cart({ user: user._id, items: [] });
    const productIndex = cart.items.findIndex(item => item.product.equals(productId));

    if (productIndex > -1) {
        // If product already in cart, increase quantity
        cart.items[productIndex].quantity += 1;
    } else {
        // If product not in cart, add it
        cart.items.push({ product: productId, quantity: 1 });
    }

    await cart.save();
    req.flash("success", "Product added to cart!");
    res.redirect(`/products/${productId}`); // Redirect back to the product details page
}));

// Buy Now
router.post("/buy/:id", asyncWrap(async (req, res) => {
    const productId = req.params.id;
    const user = req.user; // Assuming user is stored in session

    // Logic to handle the purchase
    // This could involve creating an order, processing payment, etc.
    // For simplicity, we'll just redirect to a confirmation page
    req.flash("success", "Product purchased successfully!");
    res.redirect(`/checkout/${productId}`); // Redirect to a checkout page
}));

module.exports = router;