// B1: Kiểm tra xem số n có phải số nguyên tố không ? ( Biết rằng số n do người dùng nhập )
// Dấu hiệu của số nguyên tố là số đó chỉ chia hết cho 1 và chính nó
// Gợi ý: Số nguyên tố là số lớn hơn 1 và không chia hết cho số nào khác nó và 1
// Ví dụ: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...

// B2: Kiểm tra xem số n có phải số hoàn hảo không ? ( Số hoàn hảo là số mà tổng các ước của nó bằng chính nó )
// Gợi ý: Số hoàn hảo là số mà tổng các ước của nó bằng chính nó
// Ví dụ: 6 là số hoàn hảo vì 6 = 1 + 2 + 3

// B3: Kiểm tra xem số n có phải số chính phương không ? ( Số chính phương là số mà căn bậc 2 của nó là số nguyên )
// Gợi ý: Số chính phương là số mà căn bậc 2 của nó là số nguyên
// Ví dụ: 4, 9, 16, 25, 36, 49, 64, 81, 100, ...

//B1 
// n = Number(prompt("So?"));
// let x = 0;
// for (let i = 2 ; i < n ; i++) {
//    if ( n % i == 0) { x = 1 };
// }
// if ( n <= 2 ) {
//     x = 1
// }
// if ( x == 1 ){
//     console.log(`${n} khong phai la so nguyen to`);
// }
// if ( x == 0){
//     console.log(`${n} la so nguyen to`)
// }
