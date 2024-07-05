const express = require("express");
const router = express.Router();
const {
  getLinks,
  getLink,
  createLink,
  deleteLink,
  updateLink,
} = require("../controllers/linkController");

router.get("/", getLinks);

router.get("/:id", getLink);

router.post("/", createLink);

router.delete("/:id", deleteLink);

router.patch("/:id", updateLink);

module.exports = router;
