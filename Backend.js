class User{
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

class Account{
    constructor(id_user, username, pwd){
        this.id_user=id_user;
        this.username=username;
        this.pwd=pwd;
    }
}

//Tạo get set info cho account, gọi các hàm bên controller