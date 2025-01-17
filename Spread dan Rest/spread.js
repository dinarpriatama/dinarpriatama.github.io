/*
Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan. 
Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. 
Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik 
dan membantu dalam pengelolaan object dan array. 
Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. 
*/

//object
//menggabungkan object
const obj1 = {
    name: 'Dicoding'
};

const obj2 = {
    lastname: 'Indonesia', address: 'Jl. Batik Kumeli No 50'
};

const newObj = { 
    ...obj1, ...obj2 
};

console.log(newObj);

//menyalin object
const originalObj = {
    name: 'Dicoding', age: 9
};

const copiedObj = {
    ...originalObj
};

console.log(copiedObj);

//array
//menggabungkan array
const array1 = [
    'Dicoding'
];

const array2 = [
    'Indonesia', 'Jl. Batik Kumeli No 50'
];

const newArray = [ 
    ...array1, ...array2 
];

console.log(newArray);

//menyalin array
const original = ['apple', 'banana', 'cherry'];
const copy_original = [...original];

console.log(copy_original);