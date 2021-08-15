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

db.js:      Thông tin kết nối với MySQL

Vấn đề:     build project thông qua html bị lỗi truy vấn thư viện knex của npm
            key API: AIzaSyDF-1LP6wbSwWtgs6SCJRdkKiES7rWgtNg Google không active
            Lỗi hàm marks để đánh dấu bản đồ
            Form từ file .html hiển thì chưa trúng khớp với Figma
            Chưa tạo được các global_object để quản lí trang, đồng bộ reload
            Database chưa hoàn thiện
Flow: 
    1. Khi hiện thực file .html, các hàm được gọi bằng method onClick()
    2. Máy duyệt qua các hàm ở file func.js tìm hàm phụ hợp rồi gọi hàm async function
            a. Hàm async thực thi sẽ gọi model.js để chạy query truy vấn Database, trả về một mảng
               ta sử dụng for để iterator qua lần lượt các thành phần để tạo ra đối tượng theo file Backend.js
            b. Gọi hàm hiển thị kết quả

Mức độ hoàn thành: 
    *Giao diện chính
    *Các button, form có khả năng getInput
    *Có khả năng truyền value cho hàm JS
    *Kết nối JS với database thành công
    *Thực thi được file .js bằng cú pháp node ./func.js 
        Lưu ý: cần gọi hàm để test độc lập
    *Nhận lại được kết quả từ database và lưu vào giá trị để trả về
    *Chuyển tiếp được giao diện
    *Database không mắc lỗi conflict nhưng chưa tạo hàm và trigger
    *Chưa kết nối API với miniapp: tạo tính huống cấp cứu và thông báo tới bác sỹ gần đó