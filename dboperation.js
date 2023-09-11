var config = require("./dbconfig");
const sql = require("mssql/msnodesqlv8");

async function getdata(){
    try{
        let pool = await sql.connect(config.sql);
        console.log("sql server connected...");
    }catch(error){
        console.log("sql error: " + error);
    }
}

module.exports = {
    getdata: getdata
};