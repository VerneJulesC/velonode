'use strict';

const doctorData = require('../data/doctors');

const getDoctors = async (req, res, next) => {
    try{
        const doctors = await doctorData.getDoctors();
        res.send(doctors);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const addDoctor = async (req, res, next) => {
    try{
        const doctors = await patientData.addDoctor(req.body);
        res.send(doctors);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateDoctor = async (req, res, next) => {
    try{
        const doctors = await patientData.updateDoctor(req.body);
        res.send(doctors);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    getDoctors,
    addDoctor,
    updateDoctor
}