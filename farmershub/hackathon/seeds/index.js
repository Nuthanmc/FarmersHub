const mongoose = require('mongoose');
const Warehouse = require('../models/warehouse'); // Ensure this path points to your Warehouse schema

mongoose.connect('mongodb://localhost:27017/earthworms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Warehouse.deleteMany({}); // Clear existing warehouses

    const warehouseData = [
        {
            location: "Bangalore",
            title: "State Warehousing Corporation",
            image: "https://images.unsplash.com/photo-1601598838108-5019bf3ea4a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZWhvdXNlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
            description: "Karnataka State Warehousing Corporation, Jayanagar.",
            goodsStored: "General Goods",
            storageCapacity: 1000,
            type: "Public",
            price: 3000,
            availability: true,
            author: new mongoose.Types.ObjectId(), // Replace with actual user ID if needed
            geometry: {
                type: "Point",
                coordinates: [77.5937, 12.9716] // Longitude, Latitude for Bangalore
            }
        },
        {
            location: "Whitefield",
            title: "State Warehouse Tobacco Yard",
            image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhcmVob3VzZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            description: "State Warehouse near Tobacco Company Yard, Whitefield.",
            goodsStored: "Tobacco",
            storageCapacity: 1200,
            type: "Public",
            price: 3200,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.7081, 12.9763] // Longitude, Latitude for Whitefield
            }
        },
        {
            location: "Koralur",
            title: "State Warehouse IOC/Soukya Road",
            image: "https://plus.unsplash.com/premium_photo-1663040208976-5406c4ddb88c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdhcmVob3VzZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            description: "State Warehouse via Kadugodi, Koralur.",
            goodsStored: "Petroleum Products",
            storageCapacity: 1500,
            type: "Private",
            price: 3500,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.7387, 13.0399] // Longitude, Latitude for Koralur
            }
        },
        {
            location: "Doddaballapur",
            title: "State Warehouse Raitha Bhavana",
            image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhcmVob3VzZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            description: "Warehouse near Gowribidanur Road, Doddaballapur.",
            goodsStored: "Agricultural Goods",
            storageCapacity: 1800,
            type: "Public",
            price: 2800,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.5541, 13.2222] // Longitude, Latitude for Doddaballapur
            }
        },
        {
            location: "Devanahalli",
            title: "State Warehouse Bangalore Bagepalli Road",
            image: "https://media.istockphoto.com/id/1126931828/photo/warehouse-or-storage-and-shelves-with-cardboard-boxes-industrial-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=03b2S-Ff0rW5mci9-OAeiP-YULgz0XBO-4GNrkHvMN8=",
            description: "Warehouse near Vijaya Bank, Devanahalli.",
            goodsStored: "Grains",
            storageCapacity: 2000,
            type: "Public",
            price: 2900,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.7111, 13.3036] // Longitude, Latitude for Devanahalli
            }
        },
        {
            location: "Chikkaballapur",
            title: "State Warehouse KSCMF Ltd.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6VH_TgEb_9faPCNOzcC0Ak0HQNNZ4moNoA&s",
            description: "Warehouse at APMC Yard, Chikkaballapur.",
            goodsStored: "Perishable Goods",
            storageCapacity: 1500,
            type: "Public",
            price: 2600,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.7342, 13.2133] // Longitude, Latitude for Chikkaballapur
            }
        },
        {
            location: "Tumkur U-I",
            title: "State Warehouse Gubbigate",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLxSSibtizk9ulOqf2csBr1gSjdqMLlCgAg&s",
            description: "Warehouse on B.H. Road, Tumkur.",
            goodsStored: "Industrial Goods",
            storageCapacity: 1700,
            type: "Public",
            price: 3100,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.1030, 13.3407] // Longitude, Latitude for Tumkur
            }
        },
        {
            location: "Tumkur U-II",
            title: "State Warehouse Antharahalli",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OtLpKajDMALnKwhQGPtHdMUgoetgKh8iUQ&s",
            description: "Warehouse near Sira Gate, Tumkur.",
            goodsStored: "Textiles",
            storageCapacity: 1400,
            type: "Private",
            price: 3300,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.1650, 13.3285] // Longitude, Latitude for Tumkur U-II
            }
        },
        {
            location: "Tiptur",
            title: "State Warehouse APMC Yard",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OtLpKajDMALnKwhQGPtHdMUgoetgKh8iUQ&s",
            description: "Warehouse at APMC Yard, Tiptur.",
            goodsStored: "Coconut Products",
            storageCapacity: 1600,
            type: "Public",
            price: 3000,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.1491, 13.3355] // Longitude, Latitude for Tiptur
            }
        },
        {
            location: "Kunigal",
            title: "State Warehouse APMC Yard",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iEYXu_3avkdkykTe5P-gi3YAgb4ewv045A&s",
            description: "Warehouse at APMC Yard, Kunigal.",
            goodsStored: "Livestock Feed",
            storageCapacity: 1900,
            type: "Public",
            price: 2800,
            availability: true,
            author: new mongoose.Types.ObjectId(),
            geometry: {
                type: "Point",
                coordinates: [77.1952, 13.2860] // Longitude, Latitude for Kunigal
            }
        }
    ];

    for (let warehouse of warehouseData) {
        try {
            const newWarehouse = new Warehouse(warehouse);
            await newWarehouse.save(); // Save each warehouse document
            console.log(`Saved: ${newWarehouse.title}`);
        } catch (error) {
            console.error('Error saving warehouse:', error);
        }
    }
};

seedDB().then(() => {
    mongoose.connection.close(); // Close connection after seeding
    console.log("Seeding complete, database connection closed.");
});
