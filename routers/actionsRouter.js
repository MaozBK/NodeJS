const express = require("express");
const actionsBLL = require("../BLL/actionsBLL");

// Entry point: http://localhost:3000/actions

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await actionsBLL.getAllActions();
    res.send(actions);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
