/*
Recursive adalah cara yang alami dan satu-satunya untuk melakukan perulangan atau mengiterasi data.
Rekursi adalah teknik sebuah fungsi memanggil dirinya sendiri sehingga operasi dalam fungsi tersebut 
terus berulang sampai mencapai kondisi tertentu untuk ia keluar dari perulangannya.

Mari kita ambil contoh, anggaplah kita ingin membuat fungsi yang dapat menghasilkan array berisi elemen 
deret angka dari 0 hingga n. Berikut adalah contoh implementasi jika kita menerapkan for loop.
*/

function generateArray(n) {
  const result = [];
  for (let counter = 0; counter <= n; counter += 1) {
    result.push(counter);
  }
  return result;
}
  
console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

/*
Dengan cara di atas, masalah memang dapat terselesaikan, tetapi sekali lagi dalam FP tidak ada 
memperbolehkan perubahan data sehingga kita tidak bisa mengubah nilai dari variabel counter.
Contoh metode rekursi
*/

function generateArray(n) {
  if (n < 0) {
    return [];
  }
  
  return [...generateArray(n - 1), n];
}
  
console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

/*
fungsi generateArray memanggil dirinya sendiri dengan argumen yang dikurangi satu dan 
operasi dalam fungsi tersebut terus berjalan hingga argumen n bernilai kurang dari 0. 
Perhatikan bahwa dalam fungsi ini tidak ada sama sekali proses mengubah data, 
tetapi hanya ada expression yang menghasilkan nilai baru pada setiap iterasi pemanggilan fungsinya.
*/