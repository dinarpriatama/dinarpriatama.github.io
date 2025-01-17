/*
const users = new Array();
console.log(users);
const numbers = new Array(5);
console.log(users);
*/

const foo = Array.from('foo');
console.log(foo);

//menyalin array dan mengakses nilai array
const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer[3]);

//merubah nilai element
customer[0] = 'Bro Ron';
console.log(customer);

//menambahkan nilai element
customer.push('Logitech');
console.log(customer);

/*
//menghapus data
delete customer[1];
console.log(customer);

//menghapus element
customer.splice(0,2);
console.log(customer);
*/

//shift (hapus element pertama) dan pop (hapus element terakhir)
customer.shift();
console.log(customer);

customer.pop();
console.log(customer);

//array destructuring
console.log(users)
const [orang_1, orang_2, orang_3, orang_4] = users;
console.log(orang_2, orang_4);

//array method
//reverse
users.reverse();
console.log(users);

//sort
users.sort();
console.log(users);