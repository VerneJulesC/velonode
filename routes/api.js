'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const doctorController = require('../controllers/doctorController');
const facilityController = require('../controllers/facilityController');
const patientController = require('../controllers/patientController');
const scheduleController = require('../controllers/scheduleController');
const roleController = require('../controllers/roleController');
const router = express.Router();

const {getUsers, verifyLogin, verifyToken, verifyLoggedIn, createUser} = userController;
const {getDoctors, addDoctor, updateDoctor} = doctorController;
const {getFacilities, addFacility, updateFacility} = facilityController;
const {getPatients, addPatient, updatePatient} = patientController;
const {getSchedules, addSchedule, updateSchedule} = scheduleController;
const {getRoles} = roleController;

router.get('/', (req, res) => {
    res.send('From API route');
});

router.get('/users', getUsers);
router.post('/createUser', createUser);
router.post('/verifyLogin', verifyLogin);
router.post('/checkLogin', verifyLoggedIn);
router.get('/doctors', getDoctors);
router.post('/newDoctor', addDoctor);
router.post('/updateDoctor', updateDoctor);
router.get('/facilities', getFacilities);
router.post('/addFacility', addFacility);
router.post('/updateFacility', updateFacility);
router.get('/patients', getPatients);
router.post('/addPatient', addPatient);
router.post('/updatePatient', updatePatient);
router.get('/schedules', getSchedules);
router.post('/addSchedule', addSchedule);
router.post('/updateSchedule', updateSchedule);
router.get('/roles', getRoles);

module.exports = {
    routes: router
}