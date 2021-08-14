const { allPoint } = require("./model");

function initMap() {
    var latLng = { lat: 21.0168864, lng: 105.7855574 }
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });
}
        
        
function DiemCungCap(){

  var map = new GMaps({
    el: '#map',
    lat: 10.043333,
    lng: 106.028333
  });
  var latLng //= { lat: 10.043333, lng: 106.028333 }
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
  
  var map = new GMaps({
    el: '#map',
    lat: 10.043333,
    lng: 106.028333
  });
  var latLng //= { lat: 10.043333, lng: 106.028333 }
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
  
  var map = new GMaps({
    el: '#map',
    lat: 10.043333,
    lng: 106.028333
  });
  var latLng //= { lat: 10.043333, lng: 106.028333 }
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
  
  var map = new GMaps({
    el: '#map',
    lat: 10.043333,
    lng: 106.028333
  });
  var latLng //= { lat: 10.043333, lng: 106.028333 }
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
function Mathang(String TenMatHang){
  
  var map = new GMaps({
    el: '#map',
    lat: 10.043333,
    lng: 106.028333
  });
  var latLng //= { lat: 10.043333, lng: 106.028333 }
  Points=AllPoint(1,TenMatHang);
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