'use strict';

const facilityData = require('../data/facilities');

const getFacilities = async (req, res, next) => {
    try{
        const facilities = await facilityData.getFacilities();
        res.send(facilities);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const addFacility = async (req, res, next) => {
    try{
        const facilities = await facilityData.addFacility(req.body);
        res.send(facilities);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateFacility = async (req, res, next) => {
    try{
        const facilities = await facilityData.updateFacility(req.body);
        res.send(facilities);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    getFacilities,
    addFacility,
    updateFacility
}