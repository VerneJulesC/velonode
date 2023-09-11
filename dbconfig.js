'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_DATABASE, SQL_SERVER, ENCRYPT, SECRET_KEY} = process.env;

const sqlEncrypt = process.env.ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

/*
var config={
	//user: 'username',
	//password: 'password',
	database: 'velo',
	server: 'DESKTOP-ULKS5BP\\MSSQLSERVER01',
	driver: 'msqnodesqlv8',
	options: {
		trustedConnection: true
	}
};
*/

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: 'DESKTOP-ULKS5BP\\MSSQLSERVER01',
        driver: 'msqnodesqlv8',
        database: SQL_DATABASE,
        options: {
            //encrypt: sqlEncrypt,
            enableArithAbort: true,
            trustedConnection: true
        }
    },
    secret_key: SECRET_KEY
}