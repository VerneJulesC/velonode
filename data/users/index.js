'use strict';

const utils = require('../utils');
const config = require('../../dbconfig');
const sql = require('mssql/msnodesqlv8');
const models = require('../../models')

const getUsers = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const list = await pool.request().query(sqlQueries.userslist);
        let users = [];
        for(let rs of list.recordset){
            let u = models.newUser(rs.user_id, rs.username, null);
            u.roles = rs.roles.split(',');
            users.push(u);
        }
        return users;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const createUser = async (user) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const sqlQueries2 = await utils.loadSqlQueries('roles');
        const list = await pool.request()
                        .input('username', user.username)
                        .input('password', 'Temp123!')
                        .output("user_id")
                        .query(sqlQueries.createUser);
        let uid = list.output.user_id;
        const list2 = [];
        for(let r of user.roles){
            let l2 = await pool.request()
                            .input('user_id', uid)
                            .input('rolename', r)
                            .input('doctor_id', null)
                            .query(sqlQueries2.addrole);
            list2.push(l2);
        }
        return uid;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const verifyLogin = async (user) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const list = await pool.request()
                        .input('username', user.username)
                        .input('password', user.password)
                        .query(sqlQueries.verifyLogin);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

const getUserByUname = async (username) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const list = await pool.request()
                        .input('username', username)
                        .query(sqlQueries.getUserByUname);
        return list.recordset;
    }catch(error){
        console.log({error});
        return error.message;
    }
}

module.exports = {
    getUsers,
    createUser,
    verifyLogin,
    getUserByUname
}