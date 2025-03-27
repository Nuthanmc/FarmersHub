const express = require("express");
const router = express.Router();
const Labour = require("../models/labour");
const catchAsync = require("../utils/catchAsync");

// Route to display all labours
router.get(
  "/",
  catchAsync(async (req, res) => {
    const labours = await Labour.find({});
    res.render("labours/index", { labours });
  })
);

// Route to create new labour form
router.get("/new", (req, res) => {
  res.render("labours/new");
});

router.get("/search", async (req, res) => {
  try {
    const query = req.query.query;
    console.log("Search query:", query); // Debug log to check input
    if (!query) {
      return res.status(400).send("Search query is required.");
    }

    // Perform search based on name or location
    const labours = await Labour.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive name search
        { location: { $regex: query, $options: "i" } } // Case-insensitive location search
      ]
    });

    console.log("Search results:", labours); // Debug log for results
    res.render("labours/index", { labours });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred during the search.");
  }
});


// Route to show a specific labour
router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const labour = await Labour.findById(id);
    if (!labour) {
      return res.status(404).send("Labour not found");
    }
    res.render("labours/show", { labour });
  })
);

// Route to create a new labour
router.post(
  "/",
  catchAsync(async (req, res) => {
    const { labour } = req.body;

    // Check for duplicate email or phone
    const existingLabour = await Labour.findOne({
      $or: [{ email: labour.email }, { phone: labour.phone }],
    });
    if (existingLabour) {
      return res.status(400).send("Email or phone already exists");
    }

    const newLabour = new Labour(labour);
    await newLabour.save();
    res.redirect("/labours");
  })
);

// Route to edit labour form
router.get(
  "/:id/edit",
  catchAsync(async (req, res) => {
    const labour = await Labour.findById(req.params.id);
    if (!labour) {
      return res.status(404).send("Labour not found");
    }
    res.render("labours/edit", { labour });
  })
);

// Route to update a labour
router.put(
  "/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const { labour } = req.body;

    // Check for duplicate email or phone (excluding the current labour)
    const existingLabour = await Labour.findOne({
      $or: [{ email: labour.email }, { phone: labour.phone }],
      _id: { $ne: id }, // Exclude current labour from check
    });
    if (existingLabour) {
      return res.status(400).send("Email or phone already exists");
    }

    const updatedLabour = await Labour.findByIdAndUpdate(
      id,
      labour,
      { runValidators: true, new: true } // Enable validation and return the updated document
    );
    if (!updatedLabour) {
      return res.status(404).send("Labour not found");
    }

    res.redirect(`/labours/${updatedLabour._id}`);
  })
);

// Route to delete a labour
router.delete(
  "/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Labour.findByIdAndDelete(id);
    res.redirect("/labours");
  })
);

module.exports = router;
