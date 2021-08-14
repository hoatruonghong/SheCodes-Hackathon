const db=require('./db.js')

module.exports = {
    getAccount(){
        const sql=`select * from account`;
        console.log();
        return db.raw(sql);
    },
    allPoint(){
        const sql=`select * from point`;
        console.log();
        return db.raw(sql);
    },
    allItem(){
        const sql=`select * from item`;
        console.log();
        return db.raw(sql);
    },
    addPoint(id,user, the_needy, long, lat){
        const sql=``
    }


//Hàm hàm hàm


}