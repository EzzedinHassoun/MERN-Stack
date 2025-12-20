const player = require("../models/player.model");

module.exports.createPlayer = async (req, res) => {
  const { playername, preferredposition } = req.body;

  try {
    const newPlayer = await player.create({
      playername,
      preferredposition,
    });
    res.json(newPlayer);
  } catch (err) {
    console.error("Error creating player:", err);
    res.status(400).json(err);
  }
};

module.exports.getAllPlayers = async (req, res) => {
  try {
    const players = await player.find({});
    res.json(players);
  } catch (err) {
    res.json(err);
  }
};

module.exports.getPlayer = async (req, res) => {
  try {
    const singlePlayer = await player.findOne({
      _id: req.params.id,
    });
    res.json(singlePlayer);
  } catch (err) {
    res.json(err);
  }
};

module.exports.updatePlayer = async (req, res) => {
  try {
    const updatedPlayer = await player.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedPlayer);
  } catch (err) {
    res.json(err);
  }
};

module.exports.deletePlayer = async (req, res) => {
  try {
    const deleteConfirmation = await player.deleteOne({
      _id: req.params.id,
    });
    res.json(deleteConfirmation);
  } catch (err) {
    res.json(err);
  }
};
