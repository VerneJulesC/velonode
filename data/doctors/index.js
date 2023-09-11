'use strict';

const utils = require('../utils');
const config = require('../../dbconfig');
const sql = require('mssql/msnodesqlv8');

const getDoctors = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('doctors');
        const list = await pool.request().query(sqlQueries.doctorslist);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const addDoctor = async (doctor) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('doctors');
        const list = await pool.request()
                        .input('provider_id', doctor.provider_id)
                        .input('doctor_fname', doctor.doctor_fname)
                        .input('doctor_mname', doctor.doctor_mname)
                        .input('doctor_lname', doctor.doctor_lname)
                        .input('doctor_address', doctor.doctor_address)
                        .input('doctor_city', doctor.doctor_city)
                        .input('doctor_state', doctor.doctor_state)
                        .input('doctor_zip', doctor.doctor_zip)
                        .input('doctor_ein', doctor.doctor_ein)
                        .input('doctor_upin', doctor.doctor_upin)
                        .input('doctor_ssn', doctor.doctor_ssn)
                        .input('doctor_npi', doctor.doctor_npi)
                        .input('doctor_license', doctor.doctor_license)
                        .input('doctor_fax', doctor.doctor_fax)
                        .input('doctor_email', doctor.doctor_email)
                        .input('doctor_phone', doctor.doctor_phone)
                        .output('doctor_id')
                        .query(sqlQueries.addDoctor);
        return list.output;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const updateDoctor = async (doctor) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('doctors');
        const list = await pool.request()
                        .input('provider_id', doctor.provider_id)
                        .input('doctor_fname', doctor.doctor_fname)
                        .input('doctor_mname', doctor.doctor_mname)
                        .input('doctor_lname', doctor.doctor_lname)
                        .input('doctor_address', doctor.doctor_address)
                        .input('doctor_city', doctor.doctor_city)
                        .input('doctor_state', doctor.doctor_state)
                        .input('doctor_zip', doctor.doctor_zip)
                        .input('doctor_ein', doctor.doctor_ein)
                        .input('doctor_upin', doctor.doctor_upin)
                        .input('doctor_ssn', doctor.doctor_ssn)
                        .input('doctor_npi', doctor.doctor_npi)
                        .input('doctor_license', doctor.doctor_license)
                        .input('doctor_fax', doctor.doctor_fax)
                        .input('doctor_email', doctor.doctor_email)
                        .input('doctor_phone', doctor.doctor_phone)
                        .input('doctor_id', doctor.doctor_id)
                        .query(sqlQueries.updateDoctor);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

module.exports = {
    getDoctors,
    addDoctor,
    updateDoctor
}