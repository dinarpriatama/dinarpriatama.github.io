//Throwing Error

//const error = new Error('Terjadi error');
//console.error(error);

const price = 100;
const paid = 80;

//if (paid < price) {
//throw new Error('Pembayaran kurang');
//}

// Catching Error

// Try-Catch
// Try adalah blok code yang menangani error
// Catch adalah blok code yang dijalankan ketika terjadi error di dalam blok try.

/*
    try {
     
      // code...
     
    } catch (err) {
     
      // error handling
     
    }
*/

try {
    console.log('Memulai program');
    console.log('Mengakhiri program');
} catch (err) {
    console.log('Karena tidak ada error, blok ini akan diabaikan');
}

try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
}   catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
}

// Finally

try {
    console.log('Ini try block');
} catch (err) {
    console.log('Ini catch block');
} finally {
    console.log('Ini finally block');
}

try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
}   catch (err) {
    console.log('Ini catch block');
}   finally {
    console.log('Ini finally block');
}