const db=require('./db.js')

module.exports = {
    getAccount(){
        const sql=`select * from account`;
        console.log();
        return db.raw(sql);
    },
    allPoint(){
        const sql=`select * from Support_Point`;
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
    },
    getMatHang(Type,Name){
        const sql=`select US.latitude, US.longitude
        from [User] US, [Item] IT, [Belong] BL, [Support_Point] SP
        where IT.item_name=${Name} and IT.ID_item=BL.ID_item and BL.ID_point=SP.ID_point and SP.ID_user= US.ID_user and SP.type=${Type}`;
        return db.raw(sql);
    },

    Order(){
        
        const sql=`INSERT INTO Bill VALUES (3,5,$True)`
        return db.raw(sql);
    }
//Hàm hàm hàm


}