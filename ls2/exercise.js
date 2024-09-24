// B1: Kiểm tra số chẵn lẻ
// B2: Tìm số lớn nhất trong 3 số
// B3: Giải phương trình bậc nhất ax + b = 0 ( với a != 0)
// b1
// number = Number(prompt("Number"));
// if (number % 2 == 0) {
//   console.log(`Number ${number} la so chan`);
// } else {
//   console.log(`Number ${number} la so le`);
// }
// console.log(
//   number % 2 == 0 ? `Number ${number} la so chan` : `Number ${number} la so le`
// );

// b2
// number1 = Number(prompt("First number"));
// number2 = Number(prompt("Second number"));
// number3 = Number(prompt("Third number"));
// if (number1 > number2 && number1 > number3) {
//   console.log(`Number ${number1} la so lon nhat`);
// } else if (number2 > number1 && number2 > number3) {
//   console.log(`Number ${number2} la so lon nhat`);
// } else if (number3 > number2 && number3 > number1) {
//   console.log(`Number ${number3} la so lon nhat`);
// } else {
//   console.log("3 số bằng nhau");
// }
// let maxNumber = number1;
// if (number2 > maxNumber) {
//   maxNumber = number2;
// }
// if (number3 > maxNumber) {
//   maxNumber = number3;
// }
// if (number1 == number2 && number2 == number3) {
//   console.log("3 số bằng nhau");
// } else {
//   console.log(`Số lớn nhất là: ${maxNumber}`);
// }

// b3
// a = Number(prompt("Number"))
// b = Number(prompt("Number"))
// x = -b/a
// if (a == 0){
//     console.log("Hay cho mot so a khac khong")
// }else{
//     console.log(`x la ${x}`)
// }

// B4: Đánh giá học lực dựa trên điểm số GPA
// GPA từ 9.0 đến 10.0: Xuất sắc
// GPA từ 8.0 đến dưới 9.0: Giỏi
// GPA từ 7.0 đến dưới 8.0: Khá
// GPA từ 5.0 đến dưới 7.0: Trung bình
// GPA dưới 5.0: Yếu
// number % 2 == 0 ? `Number ${number} la so chan` : `Number ${number} la so le`;
// switch ... case
// number = Number(prompt("Number"));
// switch (number % 2) {
//   case 0:
//     console.log("đây là số chẵn");
//     break;
//   default:
//     console.log("đây là số lẻ");
//     break;
// }
// b4
gpa = Number(prompt("Score"));
if (gpa > 9){
    console.log("Hoc lux xuat sac");
} else if( gpa > 8){
    console.log("Hoc luc gioi")
} else if ( gpa >= 7){
    console.log("Hoc luc kha");
} else if ( gpa > 5) {
    console.log("Hoc luc trung binh")
} else if (gpa < 5) {
    console.log("Hoc luc yeu")
} else{
    console.log("Score phai be hon 10")
}

