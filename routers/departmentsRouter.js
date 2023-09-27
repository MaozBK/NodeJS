const express = require('express');
const departmentsBLL = require('../BLL/departmentsBLL');

// Entry point: http://localhost:3000/departments

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const departments = await departmentsBLL.getAllDepartments();
        res.send(departments);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const department = await departmentsBLL.getDepartmentById(id);
        res.send(department);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const obj = req.body;
        const result = await departmentsBLL.addDepartment(obj);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await departmentsBLL.updateDepartment(id, obj);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await departmentsBLL.deleteDepartment(id);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
