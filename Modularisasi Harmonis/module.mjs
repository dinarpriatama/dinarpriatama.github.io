// contoh penggunaan module

// contoh export variable
/*
export const name_1 = 'Dicoding';
export const favoriteFood = ['pizza', 'pasta', 'sushi'];

// contoh export function
export function sayHi(name) {
    console.log(`Hi, ${name}!`);
}
*/

// sebagai alternative supaya tidak menuliskan export
const name = 'John';
const favoriteFood = ['pizza', 'pasta', 'sushi'];
 
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

export { name, favoriteFood, sayHi };