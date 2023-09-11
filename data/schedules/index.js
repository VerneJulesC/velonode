'use strict';

const utils = require('../utils');
const config = require('../../dbconfig');
const sql = require('mssql/msnodesqlv8');

const getSchedules = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('schedules');
        const list = await pool.request().query(sqlQueries.scheduleslist);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const addSchedule = async (schedule) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('schedules');
        const list = await pool.request()
                        .input('sched_date', schedule.sched_date)
                        .input('patient_id', schedule.patient_id)
                        .input('sched_type', schedule.sched_type)
                        .input('location_desc', schedule.location_desc)
                        .input('location_coord', schedule.location_coord)
                        .input('destination_desc', schedule.destination_desc)
                        .input('destination_coord', schedule.destination_coord)
                        .input('status', schedule.status)
                        .input('last_modified', schedule.last_modified)
                        .output('sched_id')
                        .query(sqlQueries.addSchedule);
        return list.output;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const updateSchedule = async (schedule) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('schedules');
        const list = await pool.request()
                        .input('sched_date', schedule.sched_date)
                        .input('patient_id', schedule.patient_id)
                        .input('sched_type', schedule.sched_type)
                        .input('location_desc', schedule.location_desc)
                        .input('location_coord', schedule.location_coord)
                        .input('destination_desc', schedule.destination_desc)
                        .input('destination_coord', schedule.destination_coord)
                        .input('status', schedule.status)
                        .input('last_modified', schedule.last_modified)
                        .input('sched_id')
                        .query(sqlQueries.addSchedule);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

module.exports = {
    getSchedules,
    addSchedule,
    updateSchedule
}