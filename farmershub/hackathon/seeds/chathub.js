const mongoose = require("mongoose");
const Chat = require("../models/chat.js");

main()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.log("Database connection error:", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/earthworms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Seed data for chats
let allChats = [
  {
      from: "Farmer1",
      to: "Farmer2",
      msg: "Have you tried the new organic fertilizer?",
      created_at: new Date("2024-12-08T10:15:00Z"),
    },
    {
      from: "Farmer2",
      to: "Farmer1",
      msg: "Yes, it's working great! My crops are healthier now.",
      created_at: new Date("2024-12-08T10:18:00Z"),
    },
    {
      from: "Farmer3",
      to: "AgriculturalEngineer1",
      msg: "Can you suggest a solution for pests on tomato plants?",
      created_at: new Date("2024-12-09T09:45:00Z"),
    },
    {
      from: "AgriculturalEngineer1",
      to: "Farmer3",
      msg: "Try using neem oil spray. It's effective and eco-friendly.",
      created_at: new Date("2024-12-09T09:50:00Z"),
    },
    {
      from: "Farmer4",
      to: "TechnologicalEngineer1",
      msg: "Is there an app to monitor soil moisture levels?",
      created_at: new Date("2024-12-10T08:00:00Z"),
    },
    {
      from: "TechnologicalEngineer1",
      to: "Farmer4",
      msg: "Yes, you can use AgriMonitor. It syncs with soil sensors.",
      created_at: new Date("2024-12-10T08:10:00Z"),
    },
    {
      from: "Farmer5",
      to: "Farmer6",
      msg: "What irrigation method do you use for rice farming?",
      created_at: new Date("2024-12-10T11:20:00Z"),
    },
    {
      from: "Farmer6",
      to: "Farmer5",
      msg: "I use drip irrigation. It saves water and increases yield.",
      created_at: new Date("2024-12-10T11:30:00Z"),
    },
    {
      from: "Farmer7",
      to: "AgriculturalEngineer2",
      msg: "Which crop rotation method is best for wheat and legumes?",
      created_at: new Date("2024-12-10T14:00:00Z"),
    },
    {
      from: "AgriculturalEngineer2",
      to: "Farmer7",
      msg: "Alternate wheat with lentils or chickpeas to improve soil health.",
      created_at: new Date("2024-12-10T14:15:00Z"),
    },
    {
      from: "Farmer8",
      to: "Farmer9",
      msg: "How do you prevent fungal infections in your grapevines?",
      created_at: new Date("2024-12-10T15:10:00Z"),
    },
    {
      from: "Farmer9",
      to: "Farmer8",
      msg: "I use sulfur-based sprays during early growth stages.",
      created_at: new Date("2024-12-10T15:25:00Z"),
    },
    {
      from: "Farmer8",
      to: "AgriculturalEngineer3",
      msg: "What’s the best way to manage weeds in a sugarcane field?",
      created_at: new Date("2024-12-10T16:10:00Z"),
    },
    {
      from: "AgriculturalEngineer3",
      to: "Farmer8",
      msg: "Use mulching or herbicides like atrazine for effective control.",
      created_at: new Date("2024-12-10T16:25:00Z"),
    },
    {
      from: "Farmer9",
      to: "TechnologicalEngineer2",
      msg: "Can I integrate a weather forecasting API into my farm's IoT system?",
      created_at: new Date("2024-12-10T17:00:00Z"),
    },
    {
      from: "TechnologicalEngineer2",
      to: "Farmer9",
      msg: "Absolutely! It’ll help automate irrigation based on weather patterns.",
      created_at: new Date("2024-12-10T17:15:00Z"),
    },
    {
      from: "Farmer10",
      to: "Farmer11",
      msg: "Which rice variety are you growing this season?",
      created_at: new Date("2024-12-10T18:00:00Z"),
    },
    {
      from: "Farmer11",
      to: "Farmer10",
      msg: "I’m growing Basmati. It has good market demand.",
      created_at: new Date("2024-12-10T18:15:00Z"),
    },
    {
      from: "Farmer8",
      to: "Farmer12",
      msg: "What’s your yield per acre for soybeans?",
      created_at: new Date("2024-12-10T19:00:00Z"),
    },
    {
      from: "Farmer12",
      to: "Farmer8",
      msg: "About 3 tons per acre using no-till farming methods.",
      created_at: new Date("2024-12-10T19:10:00Z"),
    },
    {
      from: "Farmer9",
      to: "AgriculturalEngineer2",
      msg: "What’s the best fertilizer for wheat in sandy soil?",
      created_at: new Date("2024-12-10T20:00:00Z"),
    },
    {
      from: "AgriculturalEngineer2",
      to: "Farmer9",
      msg: "Use ammonium nitrate or urea-based fertilizers for better results.",
      created_at: new Date("2024-12-10T20:15:00Z"),
    },
    {
      from: "Farmer10",
      to: "TechnologicalEngineer1",
      msg: "Can you recommend a low-cost drone for crop monitoring?",
      created_at: new Date("2024-12-10T21:00:00Z"),
    },
    {
      from: "TechnologicalEngineer1",
      to: "Farmer10",
      msg: "Try the AgriDrone X1. It’s affordable and user-friendly.",
      created_at: new Date("2024-12-10T21:10:00Z"),
    },

    {
      from: "Farmer8",
      to: "Farmer9",
      msg: "How do you prevent fungal infections in your grapevines?",
      created_at: new Date("2024-12-10T15:10:00Z"),
    },
    {
      from: "Farmer9",
      to: "Farmer8",
      msg: "I use sulfur-based sprays during early growth stages.",
      created_at: new Date("2024-12-10T15:25:00Z"),
    },
    {
      from: "Farmer10",
      to: "AgriculturalEngineer3",
      msg: "What’s the best way to increase soil fertility naturally?",
      created_at: new Date("2024-12-10T16:45:00Z"),
    },
    {
      from: "AgriculturalEngineer3",
      to: "Farmer10",
      msg: "Consider using green manure crops like clover or legumes.",
      created_at: new Date("2024-12-10T16:55:00Z"),
    },
    {
      from: "Farmer11",
      to: "TechnologicalEngineer3",
      msg: "Can AI help detect diseases in my potato crops?",
      created_at: new Date("2024-12-10T17:30:00Z"),
    },
    {
      from: "TechnologicalEngineer3",
      to: "Farmer11",
      msg: "Yes, you can use apps with AI-powered image recognition.",
      created_at: new Date("2024-12-10T17:40:00Z"),
    },
    {
      from: "Farmer12",
      to: "Farmer13",
      msg: "What irrigation schedule do you follow for onions?",
      created_at: new Date("2024-12-10T18:20:00Z"),
    },
    {
      from: "Farmer13",
      to: "Farmer12",
      msg: "I water them twice a week, depending on the soil moisture.",
      created_at: new Date("2024-12-10T18:30:00Z"),
    },
    {
      from: "Farmer14",
      to: "AgriculturalEngineer4",
      msg: "Is crop rotation useful for pest control in cotton farming?",
      created_at: new Date("2024-12-10T19:10:00Z"),
    },
    {
      from: "AgriculturalEngineer4",
      to: "Farmer14",
      msg: "Absolutely! Rotate cotton with cereals or pulses for best results.",
      created_at: new Date("2024-12-10T19:20:00Z"),
    },
    {
      from: "Farmer15",
      to: "TechnologicalEngineer4",
      msg: "Can I automate pesticide spraying using drones?",
      created_at: new Date("2024-12-10T20:00:00Z"),
    },
    {
      from: "TechnologicalEngineer4",
      to: "Farmer15",
      msg: "Yes, drones with spraying attachments are very effective.",
      created_at: new Date("2024-12-10T20:15:00Z"),
    },
    {
      from: "Farmer16",
      to: "Farmer17",
      msg: "What’s your experience with intercropping corn and soybeans?",
      created_at: new Date("2024-12-10T21:00:00Z"),
    },
    {
      from: "Farmer17",
      to: "Farmer16",
      msg: "It’s great! Corn supports the soybeans, and it reduces weeds.",
      created_at: new Date("2024-12-10T21:10:00Z"),
    },
    {
      from: "Farmer18",
      to: "AgriculturalEngineer5",
      msg: "How can I improve water retention in sandy soils?",
      created_at: new Date("2024-12-10T22:00:00Z"),
    },
    {
      from: "AgriculturalEngineer5",
      to: "Farmer18",
      msg: "Use organic matter like compost or plant mulch for retention.",
      created_at: new Date("2024-12-10T22:15:00Z"),
    },
    {
      from: "Farmer19",
      to: "TechnologicalEngineer5",
      msg: "Which app is best for tracking market prices for crops?",
      created_at: new Date("2024-12-10T22:30:00Z"),
    },
    {
      from: "TechnologicalEngineer5",
      to: "Farmer19",
      msg: "Check out AgriMarket or Kisan Suvidha for real-time prices.",
      created_at: new Date("2024-12-10T22:40:00Z"),
    },
    {
      from: "Farmer20",
      to: "Farmer21",
      msg: "What’s your yield per acre for chili peppers?",
      created_at: new Date("2024-12-10T23:00:00Z"),
    },
    {
      from: "Farmer21",
      to: "Farmer20",
      msg: "About 2.5 tons per acre with drip irrigation.",
      created_at: new Date("2024-12-10T23:10:00Z"),
    },

 ];

// Function to seed the chats
const seedChats = async () => {
  try {
    // Delete all existing chat records
    await Chat.deleteMany({});
    console.log("All existing chats deleted from the database.");

    // Insert new chats
    await Chat.insertMany(allChats);
    console.log("Sample chats added to the database successfully!");
  } catch (error) {
    console.error("Error seeding chats:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

// Call the seed function
seedChats();
