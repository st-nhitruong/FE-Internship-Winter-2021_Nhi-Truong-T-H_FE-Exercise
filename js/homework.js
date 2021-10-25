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
// console.log(sumOdd)

//Bài 1 viết lại dưới dạng function với tham số là 1 mảng.
function sum(array) {
    var sum = 0;
    array.forEach(element=> {
        if(element%2!=0){
            sum += element;
        }
    });
    return sum;
}
// console.log(sum(mang));

// 2. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi, trong trường hợp chuỗi dài hơn 15 ký tự.
function ex2(str) {
    if(str.length > 15){
        return (str.slice(0,10)).concat("...")
    }
}
// console.log(ex2("Definition and Usage"));

// 3. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
// Tham số truyền vào là 1 chuỗi.
// Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".
function ex3(str) {
    var str1 = str.toLowerCase();
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}
// console.log(ex3("tech MasTer"));

// 4. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
// Tham số truyền vào là 1 mảng các số.
// Kết quả là số nhỏ nhất trong mảng.
var arr = [65, 1, 12, 21];
function findNumberMin(arr) {
    var a = arr[0];
    arr.forEach(function(x) {
        if(x < a)
            a = x;
    })
    return a;
}
// console.log(findNumberMin(arr))



// 5. Sử dụng object constructors, tạo 1 mảng gồm các học sinh có đầy đủ name, age, school theo data bên dưới
// John - 26 - Cambridge
// Mark - 30 - Oxford
// Bill - 28 - Havard
function Student(name, age, school) {
    this.name = name;
    this.age = age;
    this.school = school;
}
var prs1 = new Student('John',26,'Cambridge');
var prs2 = new Student('Mark',30,'Oxford');
var prs3 = new Student('Bill',28,'Havard');
// console.log(prs1,prs2,prs3)
Student.prototype.coding = function() {
    if(this.age < 28){
        return 'learning code';
    }else
        return 'coding master';
}
// console.log(prs2.coding())

// 5.1 Sau khi tạo xong các instance, add kỹ năng coding() cho học sinh:
// nếu từ 28 tuổi trở lên sẽ console.log('coding master');
// nếu dưới 28 tuổi sẽ console.log('learning code');

// 6. cho 2 mảng dữ liệu số, viết 1 hàm tìm các phần tử cùng xuất hiện ở cả 2 mảng.
var arr1 = [65, 1, 12, 21, 1];
var arr2 = [5, 1, 12, 41, 45];
function findNumbersDuplicate(arr1, arr2){
    var arr3 = [];
    arr1.filter(function(item1){
        arr2.forEach(function(item2){
            if((item1 === item2) && !arr3.includes(item2)){
                arr3.push(item2)
            }
        })
    })
    return arr3;
}
console.log(findNumbersDuplicate(arr1,arr2));
// 7. tính tổng các chữ số của 1 số.
// input: 1234
// output: 10

function exercise_7(number){
    var sum = 0;
    while(number) {
        sum += number % 10;
        number = Math.floor(number/10);
    }
    return sum
}
console.log(exercise_7(12233));
