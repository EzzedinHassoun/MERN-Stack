const authores = require('../models/authore.model');

module.exports.createauthore = async (req, res) => {
  const { name } = req.body;

  try {
    const authore = await authores.create({ name });
    res.json(authore);
  } catch (err) {
    console.error(" Error creating person:", err);
    res.status(400).json(err);
  }
};

module.exports.getAllauthores = async (request, response) => {
  try {
    const authore = await authores.find({});
    response.json(authore);
  } catch (err) {
    response.json(err);
  }
};

module.exports.getauthore = async (request, response) => {
  try {
    const authore = await authores.findOne({ _id: request.params.id });
    response.json(authore);
  } catch (err) {
    response.json(err);
  }
};

module.exports.updateauthore = async (request, response) => {
  try {
    const updatedPerson = await authores.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json(updatedPerson);
  } catch (err) {
    response.json(err);
  }
};

module.exports.deleteauthore = async (request, response) => {
  try {
    const deleteConfirmation = await authores.deleteOne({
      _id: request.params.id,
    });
    response.json(deleteConfirmation);
  } catch (err) {
    response.json(err);
  }
};
