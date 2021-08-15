const model = require('./model.js')
function initMap() {
    var latLng = { lat: 21.0168864, lng: 105.7855574 }
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });
}
        
        
function DiemCungCap(){

  Points=AllPoint(1);
  var a
  for (i=0; i<Points.length; i++){
    latLng = { lat: Points[i].longitude, lng: Points[i].latitude }
    a = maps.Marker({
      position: latLng,
      map: map,
    });
  }
}
function HoTroYTe(){
  
  Points=AllPoint(2);
  var a
  for (i=0; i<Points.length; i++){
    latLng = { lat: Points[i].longitude, lng: Points[i].latitude }
    a = maps.Marker({
      position: latLng,
      map: map,
    });
  }
}
function DanCungCap(){
  
  Points=AllPoint(3);
  var a
  for (i=0; i<Points.length; i++){
    latLng = { lat: Points[i].longitude, lng: Points[i].latitude }
    a = maps.Marker({
      position: latLng,
      map: map,
    });
  }
}
function CanHoTro(){
  
  Points=AllPoint(4);
  var a
  for (i=0; i<Points.length; i++){
    latLng = { lat: Points[i].longitude, lng: Points[i].latitude }
    a = maps.Marker({
      position: latLng,
      map: map,
    });
  }
}

function MatHang(TenMatHang){
  Points=getMatHang(1,TenMatHang);
  var a
  for (i=0; i<Points.length; i++){
    latLng = { lat: Points[i].longitude, lng: Points[i].latitude }
    a = maps.Marker({
      position: latLng,
      map: map,
    });
  }
}
function DatHangThietYeu(){
  alert("Đặt hàng thiết yếu");
}
function YeuCauHoTro(){
  alert("Yêu cầu hỗ trợ");
}
async function DatHang(name,phone,addr,voucher,user){
  //gọi hàm đặt hàng, trả về successfull
  const account = await model.Order(name,phone,addr,voucher,user)
  //Drone button()
  //lam sao de hien success day
}
const { allPoint } = require("./model.js");
const { getAccount } = require('./model.js')
const { getMatHang } = require('./model.js')












async function test(){

    const account = await model.getAccount()
    /*for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].fullname)
    }*/
    //console.log(account[0])
    AAA = account[0]
    console.log("okey")
}
async function AllPoint(){

  const point = await model.allPoint()
  for( i = 0; i<point[0].length; i++){
      console.log(point[0][i].id_point)
  }
  return point[0]
}
async function AllPoint(search_type){

    const point = await model.allPoint(search_type)
    for( i = 0; i<point[0].length; i++){
        console.log(point[0][i].id_point)
    }
    return point[0]
}
async function AllPoint(search_type,TenMatHang) {
    const account = await model.allPoint(search_type,TenMatHang)
    for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].id_point)
    }
    return account[0]
}
async function AllItem(){

    const account = await model.allItem()
    for( i = 0; i<account[0].length; i++){
        console.log(account[0][i].id_item)
    }
    return account[0]
}

async function Diemcungcap(){

  const account = await model.getAccount()
  for( i = 0; i<account[0].length; i++){
      console.log(account[0][i].fullname)
  }
  //console.log(account[0])
}
MatHang("A")