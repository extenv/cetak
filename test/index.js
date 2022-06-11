
const cetak  = require('../dist/app.js');
cetak(123); // 123
cetak("hello world"); // hello world
let arr = [1,2,3,4,5];
for(let get in arr){
    cetak(arr[get]); // 1 2 3 4 5
}