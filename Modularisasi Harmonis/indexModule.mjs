// import dengan named import
/*
import { name, favoriteFood } from './module.mjs';

console.log(name);
console.log(favoriteFood);
*/

// import dengan named import degan alias atau AS

/*
import { name, favoriteFood as food, sayHi } from './module.mjs';
     
console.log(name);
console.log(food);
sayHi(name);
*/

// atau menggunakan * kareana kita mengimport semua module

import * as user from './module.mjs';
     
console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);