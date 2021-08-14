const model = require("./model");


class Account{
    constructor(id, name, phone, the_needy, ready, user_type, longitude, latitude) {
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.the_needy=the_needy;
        this.ready=ready;
        this.user_type=user_type;
        this.longitude=longitude;
        this.latitude=latitude;
      }
}

class Point{
    constructor(id_point, id_user, the_needy){
        this.id_point=id_point;
        this.id_user=id_user;
        this.the_needy=the_needy;
        this.longitude=longitude;
        this.latitude=latitude;
    }
}

class Item{
    constructor(id,name,in_need,supported,medical_flag){
        this.id_item=id;
        this.item_name=name;
        this.current_need_quantity=in_need;
        this.supported_quantity=supported;
        this.medical_flag=medical_flag;
    }
}

class Bill{
    constructor(id_bill, id_helper, id_needy){
        this.id_bill=id_bill;
        this.id_helper=id_helper;
        this.id_needy=id_needy;
    }
}
class User{
    constructor(id_user, username, pwd){
        this.id_user=id_user;
        this.username=username;
        this.pwd=pwd;
    }
}
//Tạo get set info cho account, gọi các hàm bên controller
//Tạo get set info cho account, gọi các hàm bên controller
/*--------Account-----------*/
function getID_User(account){
    return account.id;
}
function getNameUser(account){
    return account.name;
}
function getPhoneUser(account){
    return account.phone;
}
function getNeedyUser(account){
    return account.the_needy;
}
function getReadyUser(account){
    return account.ready;
}
function getTypeUser(account){
    return account.user_type;
}
function getLongitudeUser(account){
    return account.longitude;
}
function getLatitudeUser(account){
    return account.latitude;
}
/*---------Point--------- */
function getIDPoint(point){
    return point.id_point;
}
function getID_userPoint(point){
    return point.id_user;
}
function getNeedyPoint(point){
    return point.the_needy;
}
/*--------Item-----------*/
function getIDItem(item){
    return item.id_item;
}
function getNameItem(item){
    return item.item_name;
}
function getCurrentNeedItem(item){
    return item.current_need_quantity;
}
function getSupportedItem(item){
    return item.supported_quantity;
}
function getMedicalFlagItem(item){
    return item.medical_flag;
}
/*--------bill--------------*/
function getID_bill(bill){
    return bill.id_bill;
}
function getID_bill(bill){
    return bill.id_helper;
}
function getID_bill(bill){
    return bill.id_needy;
}
/*--------Account-----------*/
function getUsernameAccount(user){
    return user.username;
}
function getID_User(user){
    return user.id_user;
}
function getPwdAccount(user){
    return user.pwd;
}



const { getAccount } = require('./model.js')

const model = require('./model.js')
async function Diemcungcap(){

    const account = await model.getAccount()
    for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].fullname)
    }
    //console.log(account[0])
}