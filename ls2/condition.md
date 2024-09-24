- backtick: để viết biến trong 1 chuỗi `` và sử dụng dấu ${<variable>}
- Câu điều kiện JS:
  - if - else
  - switch - case
  - toán tử so sánh

* Toán tử so sánh:
  > : lớn hơn
  > < : nhỏ hơn
  > =: lớn bằng
  > <=: nhỏ bằng
  > ==: bằng
  > !=: khác
* Biểu thức logic: 1 đúng (true) 2 sai (false) : boolean
  9 > 7: True
  8 != 8: False
  10 < 11: True
  10 <= 10: True

* if - else: Câu điều kiện

- Yêu cầu: Kiểm tra 1 số lớn 10. số này sẽ do người dùng nhập
- Cú pháp:

* if: câu điều kiện thiếu
  if(<Biểu thức logic>){
  <Ghi những logic nếu biểu thức logic trả về là đúng>
  }
* if...else: câu điều kiện đủ
  if(<Biểu thức logic>){
  <Ghi logic với biểu thức logic trả về là đúng>
  }else{
  <Ghi logic với biểu thức logic trả về là sai>
  }
* if ... else if ... else: câu điều kiện đa nhánh
  if(<Biểu thức logic>){
  <Ghi logic với biểu thức logic trả về là đúng>
  }else if(<Biểu thức logic>){
  <Ghi logic với biểu thức logic trả về là đúng>
  }else if(<Biểu thức logic>){
  <Ghi logic với biểu thức logic trả về là đúng>
  }else{
  <Ghi logic với biểu thức logic trả về là sai>
  }
