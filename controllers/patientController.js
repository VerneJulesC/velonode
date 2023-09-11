'use strict';

const patientData = require('../data/patients');

const getPatients = async (req, res, next) => {
    try{
        const patients = await patientData.getPatients();
        res.send(patients);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const addPatient = async (req, res, next) => {
    try{
        const patients = await patientData.addPatient(req.body);
        res.send(patients);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updatePatient = async (req, res, next) => {
    try{
        const patients = await patientData.updatePatient(req.body);
        res.send(patients);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    getPatients,
    addPatient,
    updatePatient
}