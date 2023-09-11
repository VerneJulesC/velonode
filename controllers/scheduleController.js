'use strict';

const schedData = require('../data/schedules');

const getSchedules = async (req, res, next) => {
    try{
        const schedules = await schedData.getSchedules();
        res.send(schedules);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const addSchedule = async (req, res, next) => {
    try{
        const schedules = await schedData.addSchedule(req.body);
        res.send(schedules);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateSchedule = async (req, res, next) => {
    try{
        const schedules = await schedData.updateSchedule(req.body);
        res.send(schedules);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    getSchedules,
    addSchedule,
    updateSchedule
}