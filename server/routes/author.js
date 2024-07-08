const express = require('express');
const router = express.Router();
const Author = require('../model/authorModel'); // Import the correct schema

// POST - Create a new author
router.post('/', async (req, res) => {
    try {
        const { _id, name, age, totalbooks, description } = req.body;
        const authorQuery = new Author({ _id, name, age, totalbooks, description });

        // Save the author to the database
        await authorQuery.save();
        res.status(201).send({ message: `Author ${name} saved`});

    }catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;