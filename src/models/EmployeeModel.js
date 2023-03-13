
const sql = require("../db.js");



const getEmployee =async function() {
    let query = "SELECT * FROM akhilesdb2";
    let data= await sql(query);
    console.log( data )
    return data
}
/* 
//sample

UPDATE `akhilesdb2`.`employee` SET `EmpAge` = '36' WHERE (`empID` = '4');
INSERT INTO `akhilesdb2`.`employee` (`empID`, `EmpName`, `EmpAge`, `EmpDept`) VALUES ('5', 'hari', '35', 'pqr');
 */
const createEmployee =async function() {
    let query = "INSERT INTO `akhilesdb2`.`employee` (`empID`, `EmpName`, `EmpAge`, `EmpDept`) VALUES ('5', 'hari', '35', 'pqr')" ;
    let data= await sql(query);
    console.log( data )
    return data
}



module.exports.getEmployee = getEmployee
module.exports.createEmployee = createEmployee


