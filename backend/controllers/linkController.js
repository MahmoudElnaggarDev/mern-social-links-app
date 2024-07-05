const mongoose = require("mongoose");
const Link = require("../models/linkModel");

const getLinks = async (req, res) => {
  const links = await Link.find({});
  res.json(links);
};

const getLink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "Error 404 | Link not found!" });
  }
  const link = await Link.findById(id);
  if (!link) {
    return res.json({ error: "Error 404 | Link not found!" });
  }
  res.json(link);
};

const createLink = async (req, res) => {
  const { link_title } = req.body;
  try {
    const link = await Link.create({ link_title });
    res.json(link);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteLink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "Error 404 | Link not found!" });
  }
  const link = await Link.findOneAndDelete({ _id: id });
  if (!link) {
    return res.json({ error: "Error 404 | Link not found!" });
  }
  res.json(link);
};

const updateLink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "Error 404 | Link not found!" });
  }
  const link = await Link.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!link) {
    return res.json({ error: "Error 404 | Link not found!" });
  }
  res.json(link);
};

module.exports = { getLinks, getLink, createLink, deleteLink, updateLink };
