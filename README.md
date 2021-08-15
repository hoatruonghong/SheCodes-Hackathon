# SheCodes-Hackathon

#Requirement: 
    npm
    knex
    MySQL
    NodeJS
    Chrome



Backend.js: Lưu trữ global class
            Getter setter

Func.js:    Lưu các hàm trực tiếp của js
            Gọi asyncđể thực thi sql query
            Hiển thị kết quả: tìm kiếm, đánh dấu điểm, điền thông tin, đặt đơn hàng
Model.js:   Các thao tác truy vấn trên cơ sở dữ liệu

db.js:      thông tin kết nối với MySQL

Vấn đề:     build project thông qua html bị lỗi truy vấn thư viện knex của npm
            key API: AIzaSyDF-1LP6wbSwWtgs6SCJRdkKiES7rWgtNg Google không active
            Lỗi hàm marks để đánh dấu bản đồ
            Form từ file .html hiển thì chưa trúng khớp với Figma

Flow: 
    1. Khi hiện thực file .html, các hàm được gọi bằng method onClick()
    2. Máy duyệt qua các hàm ở file func.js tìm hàm phụ hợp rồi gọi hàm async function
            a. Hàm async thực thi sẽ gọi model.js để chạy query truy vấn Database, trả về một mảng
               ta sử dụng for để iterator qua lần lượt các thành phần để tạo ra đối tượng theo file Backend.js
            b. Gọi hàm hiển thị kết quả
