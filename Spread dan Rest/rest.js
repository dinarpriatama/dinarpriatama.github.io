/*
Rest operator memungkinkan function untuk menerima argument dalam bentuk array. 
Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter. 
Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir.
*/

function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs);
}
  
myFunc('one', 'two', 'three');


function myFunc(number, ...manyMoreArgs) {
    console.log('number', number);
    console.log('manyMoreArgs', manyMoreArgs);
}
  
myFunc('one', 'two', 'three');

function myFunc(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
}
  
myFunc('one', 'two', 'three');

//destructuring dengan rest
const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);