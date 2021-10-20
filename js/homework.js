// 1. Tính tổng các số lẻ trong mảng
// Bài này mình sẽ cho trước một mảng các phần tử, sau đó yêu cầu viết chương trình tính tổng các số lẻ trong mảng đó. Mảng cho trước như sau:

// var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];
var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];
var sumOdd = 0;
var oddNumbers = mang.filter(function(x){
    return x%2!=0;
})
oddNumbers.forEach(x =>{
    return sumOdd = sumOdd + x;
})
console.log(sumOdd)

// 2. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi, trong trường hợp chuỗi dài hơn 15 ký tự.

// 3. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
// Tham số truyền vào là 1 chuỗi.
// Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".
function ex3(str){
    var str1 = str.toLowerCase();
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}
// console.log(ex3("tech MasTer"));

// 4. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
// Tham số truyền vào là 1 mảng các số.
// Kết quả là số nhỏ nhất trong mảng.

// 5. Sử dụng object constructors, tạo 1 mảng gồm các học sinh có đầy đủ name, age, school theo data bên dưới
// John - 26 - Cambridge
// Mark - 30 - Oxford
// Bill - 28 - Havard

// 5.1 Sau khi tạo xong các instance, add kỹ năng coding() cho học sinh:
// nếu từ 28 tuổi trở lên sẽ console.log('coding master');
// nếu dưới 28 tuổi sẽ console.log('learning code');

// 6. cho 2 mảng dữ liệu số, viết 1 hàm tìm các phần tử cùng xuất hiện ở cả 2 mảng.

// 7. tính tổng các chữ số của 1 số.
// input: 1234
// output: 10