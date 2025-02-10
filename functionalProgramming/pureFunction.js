/*
Pure function memiliki dua sifat:
1.  Menghasilkan nilai yg sama setiap kali dipanggil dgn argumen yg sama. Fungsi
    tidak boleh mengakses nilai di luar argumen dan variabel cakupan global.
2.  Tidak memiliki efek samping yg dpt memengaruhi keadaaan  di luar fungsi trsbt.
3.  Hanya bergantung pada argument yg diberikan.
*/

// Contoh di bawah adalah impure function
let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

// Contoh di bawah adalah Pure Function
function add_With(value, adding_Value) {
    return value + adding_Value;
}
  
const result_1 = add_With(0, 1);
console.log(`result_1 is ${result_1}`); // Output: result1 is 1
  
const result_2 = add_With(result_1, 1);
console.log(`result_2 is ${result_2}`); // Output: result2 is 2
  
const result_3 = add_With(result_2, 1);
console.log(`result_3 is ${result_3}`); // Output: result3 is 3
  
console.log(result_1, result_2, result_3); // Output: 1, 2, 3


// Contoh2 impure function 
// Mengubah nilai variabel global
let count = 0;
function increment() {
    count++;
}
     
// Mengakses waktu sistem
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}
     
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
    user.name = "Updated Name";
}
     
// Menulis ke berkas
const fs = require('fs');
    
function writeToFile(data) {
    fs.writeFileSync('data.txt', data);
}

// Contoh2 Pure function
// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}
    
// Memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
return users
    .filter(user => user.isActive)
    .map(user => user.username);
}
    
// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
    street: address.street,
    city: address.city,
    country: address.country
    }
};
}
    
// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
return {
    ...defaultSettings,
    ...userSettings
};
}