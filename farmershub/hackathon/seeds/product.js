const mongoose = require('mongoose');
const Product = require('../models/product'); // Adjust the path as needed
const User = require('../models/user'); // Make sure to import the User model

// Database connection
mongoose.connect('mongodb://localhost:27017/earthworms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// Function to seed products
const seedProducts = async () => {
  try {
    // Delete all existing products
    await Product.deleteMany({});
    console.log("All existing products deleted from the database.");

    // Fetch the first user from the database
    const user = await User.findOne();
    if (!user) {
      console.error("No user found. Please create a user in the database first.");
      return;
    }

    // Sample products with the valid userId
    const products = [
      {
        name: "Organic Rice",
        description: "High-quality organic rice, grown without chemicals.",
        price: 300,
        stock: 100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerdI-H7jEBcPAh3oJk_W03OOmJhGQh-6hYA&s",
        availability: true,
        type: "Cereal",
        category: "Grains", // Added category
        userId: user._id, // Ensure the user is referenced here
      },
      {
        name: "Fresh Tomatoes",
        description: "Ripe and juicy tomatoes perfect for your kitchen.",
        price: 50,
        stock: 200,
        image: "https://media.istockphoto.com/id/171579643/photo/tomato-greenhouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=W6IUz6wWm5UGe6Y-RfqSsF4ICif6We8ZTFGwtmfkHsg=",
        availability: true,
        type: "Vegetable",
        category: "Vegetables", // Added category
        userId: user._id,
      },
      {
        name: "Wheat Flour",
        description: "Freshly milled wheat flour for all your baking needs.",
        price: 150,
        stock: 50,
        image: "https://media.istockphoto.com/id/172876049/photo/whole-wheat-flour.jpg?s=612x612&w=0&k=20&c=bK48VqkF49oReBRhDoGfMORGapX2iWosEeImG_SXA8Q=",
        availability: true,
        type: "Grain",
        category: "Grains", // Added category
        userId: user._id,
      },
      {
        name: "Tomato Seeds",
        description: "High-germination tomato seeds for your garden.",
        price: 25,
        stock: 500,
        image: "https://media.istockphoto.com/id/2157987208/photo/close-up-of-dried-organic-tomato-seeds-isolated-on-a-white-background-top-view.jpg?s=612x612&w=0&k=20&c=etaZW6_RUUKv5lWUWFUQWLExH4I96tQVGh0axLaO0oA=",
        availability: true,
        type: "Seeds",
        category: "Seeds", // Added category
        userId: user._id,
      },
    ];

    // Insert sample products into the database
    await Product.insertMany(products);
    console.log("Sample products added to the database successfully!");
  } catch (error) {
    console.error("Error seeding products:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

// Call the seed function
seedProducts();
