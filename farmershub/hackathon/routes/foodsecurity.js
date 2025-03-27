const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Technology = require("../models/foodSecurity"); // Match this with your model file name
const { isLoggedIn } = require('../middleware'); // Middleware for authentication (if used)

// Utility function to validate ObjectId
const validateObjectId = (req, res, next) => {
    const { id } = req.params;
    if (id && !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
    }
    next();
};

// Async wrapper for error handling
function asyncWrap(fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

// Route: Fetch all or search for specific technologies
router.get("/", asyncWrap(async (req, res) => {
    const { search } = req.query; // Get the search term from the query string
    let technologies;

    if (search && search.trim().length >= 1) {
        // Perform a case-insensitive search
        const regex = new RegExp(search, 'i');
        technologies = await Technology.find({
            $or: [
                { title: regex },        // Search in the 'title' field
                { description: regex }  // Search in the 'description' field
            ]
        });
    } else {
        technologies = await Technology.find(); // Fetch all records if no search term
    }

    res.render("foodsecurity/index", { technologies, search });
}));

// Route: Render form to create a new record
router.get("/new", isLoggedIn, (req, res) => {
    res.render("foodsecurity/new");
});

// Route: Fetch and display a specific record
router.get("/:id", validateObjectId, asyncWrap(async (req, res) => {
    const foodSecurity = await Technology.findById(req.params.id);
    if (!foodSecurity) {
        return res.status(404).send("Record not found");
    }
    res.render("foodsecurity/show", { record: foodSecurity, technology: foodSecurity });
}));

// Route: Render edit form for a specific record
router.get("/:id/edit", isLoggedIn, validateObjectId, asyncWrap(async (req, res) => {
    const technology = await Technology.findById(req.params.id);
    if (!technology) {
        return res.status(404).send("Record not found");
    }
    res.render("foodsecurity/edit", { technology });
}));

// Route: Create a new record
router.post("/", isLoggedIn, asyncWrap(async (req, res) => {
    const { technology } = req.body; // Ensure your form data is properly structured
    const newTechnology = new Technology(technology);
    await newTechnology.save();
    res.redirect(`/foodsecurity/${newTechnology._id}`);
}));

// Route: Update an existing record
router.put("/:id", isLoggedIn, validateObjectId, asyncWrap(async (req, res) => {
    const { id } = req.params;
    const { technology } = req.body;
    const updatedTechnology = await Technology.findByIdAndUpdate(
        id,
        technology,
        { new: true, runValidators: true }
    );
    if (!updatedTechnology) {
        return res.status(404).send("Record not found");
    }
    res.redirect(`/foodsecurity/${updatedTechnology._id}`);
}));

// Route: Delete a record
router.delete("/:id", isLoggedIn, validateObjectId, asyncWrap(async (req, res) => {
    const { id } = req.params;
    const deletedTechnology = await Technology.findByIdAndDelete(id);
    if (!deletedTechnology) {
        return res.status(404).send("Record not found");
    }
    res.redirect("/foodsecurity");
}));

module.exports = router;
