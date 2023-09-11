'use strict';

const utils = require('../utils');
const config = require('../../dbconfig');
const sql = require('mssql/msnodesqlv8');

const getPatients = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('patients');
        const list = await pool.request().query(sqlQueries.patientslist);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const addPatient = async (patient) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('patients');
        const list = await pool.request()
                        .input('doctor_id', patient.doctor_id)
                        .input('patient_doctor', patient.patient_doctor)
                        .input('patient_fname', patient.patient_fname)
                        .input('patient_mname', patient.patient_mname)
                        .input('patient_lname', patient.patient_lname)
                        .input('patient_address', patient.patient_address)
                        .input('patient_coordinates', patient.patient_coordinates)
                        .input('patient_city', patient.patient_city)
                        .input('patient_state', patient.patient_state)
                        .input('patient_zip', patient.patient_zip)
                        .input('patient_bdate', patient.patient_bdate)
                        .input('patient_sex', patient.patient_sex)
                        .input('patient_phone', patient.patient_phone)
                        .input('patient_email', patient.patient_email)
                        .output('patient_id')
                        .query(sqlQueries.addPatient);
        return list.output;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const updatePatient = async (patient) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('patients');
        const list = await pool.request()
                        .input('doctor_id', patient.doctor_id)
                        .input('patient_doctor', patient.patient_doctor)
                        .input('patient_fname', patient.patient_fname)
                        .input('patient_mname', patient.patient_mname)
                        .input('patient_lname', patient.patient_lname)
                        .input('patient_address', patient.patient_address)
                        .input('patient_coordinates', patient.patient_coordinates)
                        .input('patient_city', patient.patient_city)
                        .input('patient_state', patient.patient_state)
                        .input('patient_zip', patient.patient_zip)
                        .input('patient_bdate', patient.patient_bdate)
                        .input('patient_sex', patient.patient_sex)
                        .input('patient_phone', patient.patient_phone)
                        .input('patient_email', patient.patient_email)
                        .input('patient_id', patient.patient_id)
                        .query(sqlQueries.updatePatient);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

module.exports = {
    getPatients,
    addPatient,
    updatePatient
}