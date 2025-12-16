const Joke = require('../models/joke.models');
 
// Get all users
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => {
            res.json(err);
        });
};
 
// Get a single user by ID
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({ joke: oneJoke });
 
        })
        .catch((err) => {
            res.json(err);
        });
};
 
// Create a new user
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => {
            res.json({ joke: newJoke });
        })
        .catch((err) => {
            res.json(err);
        });
};
 
// Update a user by ID
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
 
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) => {
            res.json(err);
        });
};
 
// Delete a user by ID
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result });
        })
        .catch((err) => {
            res.json(err);
        });
};