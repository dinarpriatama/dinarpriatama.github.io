// default import
import myFunction from './anotherfile.mjs';

myFunction();


// default import memungkinakan kita untuk import function/method/variable 
// yg namanya tdk harus sama dengan function/method/variable aslinya.
import result from './anotherfile.mjs';

result();

// named import
import { named_Function } from './anotherfile.mjs';
named_Function();

import { name, email, age } from './anotherfile.mjs';

console.log(name);
console.log(email);
console.log(age);

import * as variable from './anotherfile.mjs';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

// penggunaan as untuk menghindari error ketika
// ada funct yg bernama sama di module berbeda
import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

userFunction();
customerFunction();

// kombinasi default import dan named import

import sayHi, { sayGoodBye } from './anotherfile.mjs';

sayHi(); // Hai, ini default export dari anotherfile.mjs
sayGoodBye(); // Bye, ini named export dari anotherfile.mjs

