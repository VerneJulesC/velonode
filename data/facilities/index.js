'use strict';

const utils = require('../utils');
const config = require('../../dbconfig');
const sql = require('mssql/msnodesqlv8');

const getFacilities = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('facilities');
        const list = await pool.request().query(sqlQueries.facilitieslist);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const addFacility = async (facility) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('facilities');
        const list = await pool.request()
                        .input('facility_name', facility.facility_name)
                        .input('facility_doctor_id', facility.facility_doctor_id)
                        .input('facility_doctor', facility.facility_doctor)
                        .input('facility_address', facility.facility_address)
                        .input('facility_coordinates', facility.facility_coordinates)
                        .input('facility_city', facility.facility_city)
                        .input('facility_state', facility.facility_state)
                        .input('facility_zip', facility.facility_zip)
                        .input('facility_ein', facility.facility_ein)
                        .input('facility_ssn', facility.facility_ssn)
                        .input('facility_npi', facility.facility_npi)
                        .input('facility_fax', facility.facility_fax)
                        .input('facility_email', facility.facility_email)
                        .input('facility_phone', facility.facility_phone)
                        .output('facility_id')
                        .query(sqlQueries.addFacility);
        return list.output;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const updateFacility = async (facility) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('facilities');
        const list = await pool.request()
                        .input('facility_name', facility.facility_name)
                        .input('facility_doctor_id', facility.facility_doctor_id)
                        .input('facility_doctor', facility.facility_doctor)
                        .input('facility_address', facility.facility_address)
                        .input('facility_coordinates', facility.facility_coordinates)
                        .input('facility_city', facility.facility_city)
                        .input('facility_state', facility.facility_state)
                        .input('facility_zip', facility.facility_zip)
                        .input('facility_ein', facility.facility_ein)
                        .input('facility_ssn', facility.facility_ssn)
                        .input('facility_npi', facility.facility_npi)
                        .input('facility_fax', facility.facility_fax)
                        .input('facility_email', facility.facility_email)
                        .input('facility_phone', facility.facility_phone)
                        .input('facility_id', facility.facility_id)
                        .query(sqlQueries.addFacility);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

module.exports = {
    getFacilities,
    addFacility,
    updateFacility
}