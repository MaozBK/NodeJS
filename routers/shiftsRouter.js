const express = require("express");
const shiftsBLL = require("../BLL/shiftsBLL");

// Entry point: http://localhost:3000/shifts

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const shifts = await shiftsBLL.getAllShifts();
    res.send(shifts);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shift = await shiftsBLL.getShiftById(id);
    res.send(shift);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await shiftsBLL.addShift(obj);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await shiftsBLL.updateShift(id, obj);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await shiftsBLL.deleteShift(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
