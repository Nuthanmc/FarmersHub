const mongoose = require('mongoose');
const Machine = require('../models/machine');

const machines = [
    {
        name: 'Tractor',
        type: 'Agricultural',
        description: 'A powerful vehicle used for plowing fields and other farming tasks.',
        status: 'Available'
    },
    {
        name: 'Harvester',
        type: 'Agricultural',
        description: 'A machine designed for efficiently harvesting crops.',
        status: 'In Use'
    },
    {
        name: 'Grain Dryer',
        type: 'Storage',
        description: 'Used for drying grains to prevent spoilage.',
        status: 'Available'
    },
    {
        name: 'Irrigation System',
        type: 'Water Management',
        description: 'Automated system for efficient water distribution in farms.',
        status: 'Maintenance'
    }
];

// Database connection
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/earthworms';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const seedDB = async () => {
    try {
        await Machine.deleteMany({});
        console.log('Existing machines deleted.');

        await Machine.insertMany(machines);
        console.log('New machine data seeded.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
