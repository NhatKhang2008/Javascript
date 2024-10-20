// Bài tập 1: Tìm số lớn nhất trong mảng
// Ví dụ:
// const number3 = [10, -12, 0, 1, 3, 4, 1, 23, 101, 100, 19];         => kết quả: 101
// const number4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];                    => kết quả: 10
// Bài tập 2: Đếm số lần xuất hiện của một phần tử trong mảng. Biết rằng mảng và phần tử cần kiểm tra được nhập từ bàn phím.
// Ví dụ:
// cho mảng number = [1, 23, 33, 41, 33, 42, 1, 22, 23, 23] => kết quả: nếu nhập số 23 xuất hiện 3 lần

// Bài tập 3: Đảo ngược thứ tự bài hát trong danh sách phát
// Yêu cầu: Bạn đang quản lý một danh sách phát nhạc (playlist).
// Sau khi người dùng nghe qua tất cả các bài hát, họ muốn nghe lại từ bài hát cuối cùng đến bài hát đầu tiên. Hãy đảo ngược thứ tự bài hát trong danh sách phát.
// let playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"]; => kết quả: ["Song E", "Song D", "Song C", "Song B", "Song A"]

// Bài tập 4: Kiểm tra mảng có phải mảng tăng dần không
// Yêu cầu: Kiểm tra xem mảng có phải mảng tăng dần không. Nếu có trả về true, ngược lại trả về false.
// Ví dụ:
// const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; => kết quả: true
// const number6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8]; => kết quả: false

// Bài tập 5: Kiểm tra mảng có phải mảng "symmetric" không
// Yêu cầu: Kiểm tra xem mảng có phải mảng "symmetric" không. Mảng "symmetric" là mảng đối xứng qua trục đứng giữa mảng.
// Ví dụ:
// const number7 = [1, 2, 3, 4, 5, 4, 3, 2, 1]; => kết quả: true
// const number8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; => kết quả: false

// Bài tập 6: Tìm số lớn thứ 2 trong mảng
// Ví dụ:
// const number9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; => kết quả: 9
// const number10 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; => kết quả: 9
// const number11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]; => kết quả: 9
// const number12 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10]; => kết quả: 9
// const number13 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10] => kết quả: không có số lớn thứ 2
// Bai 3
// let playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];
// let first = 0;
// let last = playlist.length -1;
// while (first <= last) {
//     let b = playlist[first];
//     playlist[first] = playlist[last];
//     playlist[last] = b;
//     first++;
//     last--;
// }
// console.log((playlist));
// Bai 4
// const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 1;
// for ( let i = 0; i < number5.length ; i++) {
//     if (number5[i] >= number5[i+1]) (sum = 0);
// }
// if ( sum == 0) (console.log("Day khong phai mang so tang"));
// else (console.log("Day la mang so tang"));
// Bai 5
// const number7 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// let first = 0;
// let last = number7.length -1;
// let sum = 0;
// while (first <= last && sum == 0) {
//     if (number7[first] != number7[last]) (sum = 1);
//     first++;
//     last--;
// }
// if (sum == 1) (console.log("Day khong phai mang so symmetric"));
// else (console.log("Day la mang so symmetric"))
// Bai 6
// const number9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
// let min = number9[1];
// for ( i = 0; i < number9.length; i++) {
//      if ( min > number9[i]) (number9[i] = min)
// }
// let first = min;
// let second = min;
// for ( i = 0; i< number9.length; i++) {
//     if (number9[i] > first) {
//         second = first;
//         first = number9[i];
//     }
//     if (number9[i] < first && number9[i] > second) {
//         second = number9[i];
//     }
// }
// if (second == first) (console.log("Khong ton tai phan tu lon thu hai"))
// else (console.log(`So lon thu hai la ${second}`))