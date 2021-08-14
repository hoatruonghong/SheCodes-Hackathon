const db=require('./db.js')

module.exports = {
    getAccount(){
        const sql=`select * from account`;
        return db.raw(sql);
    },


//Hàm hàm hàm


}