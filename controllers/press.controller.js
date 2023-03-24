const PressRelease = require("../models/press.model");

const createPressRelease = async (req, res) => {
  try {
    const pressRelease = await PressRelease.create(req.body);
    res.status(201).send(pressRelease);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPressReleases = async (req, res) => {
  try {
    const pressReleases = await PressRelease.find();
    res.send(pressReleases);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPressReleaseById = async (req, res) => {
  try {
    const pressRelease = await PressRelease.findById(req.params.id);
    if (!pressRelease) {
      return res.status(404).send();
    }
    res.send(pressRelease);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePressRelease = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "body", "date", "author", "company", "tags", "image"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const pressRelease = await PressRelease.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pressRelease) {
      return res.status(404).send();
    }
    res.send(pressRelease);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deletePressRelease = async (req, res) => {
  try {
    const pressRelease = await PressRelease.findByIdAndDelete(req.params.id);
    if (!pressRelease) {
      return res.status(404).send();
    }
    res.send(pressRelease);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPressRelease,
  getPressReleases,
  getPressReleaseById,
  updatePressRelease,
  deletePressRelease,
};
