const express = require('express');
const router = express.Router();
const Machine = require('../models/machine');

// Get all machines
router.get('/', async (req, res) => {
    try {
        const machines = await Machine.find({});
        res.render('machines/index', { machines });
    } catch (err) {
        req.flash('error', 'Unable to fetch machines');
        res.redirect('/');
    }
});

// Show form to create new machine
router.get('/new', (req, res) => {
    res.render('machines/new');
});

// Create a new machine
router.post('/', async (req, res) => {
    try {
        const machine = new Machine(req.body.machine);
        await machine.save();
        req.flash('success', 'Machine added successfully!');
        res.redirect('/machines');
    } catch (err) {
        req.flash('error', 'Failed to add machine');
        res.redirect('/machines/new');
    }
});

// Show details of a single machine
router.get('/:id', async (req, res) => {
    try {
        const machine = await Machine.findById(req.params.id);
        if (!machine) {
            req.flash('error', 'Machine not found');
            return res.redirect('/machines');
        }
        res.render('machines/show', { machine });
    } catch (err) {
        req.flash('error', 'Error retrieving machine');
        res.redirect('/machines');
    }
});

// Show edit form
router.get('/:id/edit', async (req, res) => {
    try {
        const machine = await Machine.findById(req.params.id);
        if (!machine) {
            req.flash('error', 'Machine not found');
            return res.redirect('/machines');
        }
        res.render('machines/edit', { machine });
    } catch (err) {
        req.flash('error', 'Error loading edit page');
        res.redirect('/machines');
    }
});

// Update machine details
router.put('/:id', async (req, res) => {
    try {
        const machine = await Machine.findByIdAndUpdate(req.params.id, req.body.machine, { new: true });
        req.flash('success', 'Machine updated successfully!');
        res.redirect(`/machines/${machine._id}`);
    } catch (err) {
        req.flash('error', 'Failed to update machine');
        res.redirect('/machines');
    }
});

// Delete machine
router.delete('/:id', async (req, res) => {
    try {
        await Machine.findByIdAndDelete(req.params.id);
        req.flash('success', 'Machine deleted successfully!');
        res.redirect('/machines');
    } catch (err) {
        req.flash('error', 'Failed to delete machine');
        res.redirect('/machines');
    }
});

module.exports = router;
