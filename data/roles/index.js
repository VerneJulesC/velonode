'use strict';

const utils = require('../utils');
const config = require('../../dbconfig');
const sql = require('mssql/msnodesqlv8');

const getRoles = async (user_id) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const list = await pool.request()
                        .input('user_id', user_id)
                        .query(sqlQueries.userroles);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const addRole = async (role) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const list = await pool.request()
                        .input('user_id', role.user_id)
                        .input('rolename', role.rolename)
                        .input('doctor_id', role.doctor_id)
                        .query(sqlQueries.userroles);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

module.exports = {
    getRoles,
    addRole
}