// default export, baiknya 1 default export dalam satu module
// hanya boleh ada satu module export di satu module
/*
export default function myFunction() {
    console.log('Ini adalah function export default.');
}
*/

// named export
export function named_Function() {
    console.log('Ini adalah contoh named import.');
}

const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

// kombinasi default export dan named export
export default function sayHi() {
    console.log('Hai, ini default export dari anotherfile.mjs');
}
  
export function sayGoodBye() {
    console.log('Bye, ini named export dari anotherfile.mjs');
}