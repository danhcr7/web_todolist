const numbers = [1, 2, 3, 4];
// Yêu cầu là tạo ra 1 mảng mới với các giá trị gấp đôi gái trị các phần tử trong mảng numbers
const arr_new = [];
numbers.map(item => arr_new.push(item * 2));
console.log(arr_new);
