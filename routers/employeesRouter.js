const express = require("express");
const employeesBLL = require("../BLL/employeesBLL");

// Entry point: http://localhost:3000/employees

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const employees = await employeesBLL.getAllEmployees();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeesBLL.getEmployeeById(id);
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await employeesBLL.addEmployee(obj);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await employeesBLL.updateEmployee(id, obj);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeesBLL.deleteEmployee(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
