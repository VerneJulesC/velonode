'use strict';

const driverData = require('../data/drivers');

const getDrivers = async (req, res, next) => {
    try{
        const drivers = await driverData.getDrivers();
        res.send(drivers);
    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    getDrivers
}