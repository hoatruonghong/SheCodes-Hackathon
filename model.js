const db=require('./db.js')

module.exports = {
    Essential(user, longitude, latitude, item){
        const sql=`insert into Support_Points values (${user.id},${longitude},${latitude}, ${item})`
        return db.raw(sql);
    },
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
        const sql=`insert into support_point values (${id},${user.id},${the_needy},${long},${lat})`
        return db.raw(sql);
    },
    getMatHang(Type,Name){
        const sql=`select US.latitude, US.longitude
        from [User] US, [Item] IT, [Belong] BL, [Support_Point] SP
        where IT.item_name=${Name} and IT.ID_item=BL.ID_item and BL.ID_point=SP.ID_point and SP.ID_user= US.ID_user and SP.type=${Type}`;
        return db.raw(sql);
    },

    Order(id,id_helper,the_needy_fag){
        
        const sql=`insert into Bill vaues (${id},${id_helper},${the_needy_fag})`
        return db.raw(sql);
    },
}