//tanpa looping

const foods = ['Nasi Goreng', 'Pasta', 'Sate'];

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

// FOR

/*
rumus for loop
for (variabel awal; test kondisi; increment) {
    //do something
}
*/

for (let i = 0; i <= 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
  }

// for in digunakan untuk pengulangan pada object

const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
    console.log(`${property} bernilai ${person[property]}`);
}

// for of lebih sederhana karena tidak perlu memikirkan property dan key

const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}

// WHILE

/*
While statement akan mengeksekusi statement ketika kondisinya bernilai truthy
while (condition) 
    statement
*/

// while loop

let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

/*
Do-While
    Perbedaan mereka terdapat pada urutan pengecekan kondisi. 
    While melakukan evaluasi kondisi di awal, sedangkan do-while melakukannya di akhir. 
    Berikut struktur dari do-while. 
do {
    // Do something
} while (condition)

Karena do-while melakukan evaluasi kondisi di akhir, 
blok yang ada di dalam do setidaknya akan dijalankan satu kali.
*/

let s = 0;

do {
  console.log(`Angka ke-${s} adalah ${s}.`);
  s++;
} while (s < 5);

// Control Statement ada dua yaitu Break & Statement

// Break. Memberitahukan interpreter yang sedang mengeksekusi kode untuk berhenti dan 
// langsung berpindah ke akhir dari percabangan atau perulangan.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
  
    console.log(i);
}

const number = 1;

switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
    break;
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
}

// Continue, akan mem by-pass ke step berikutnya. Menghentikan eksekusi program, 
// continue akan melanjutkan iterasi ke iterasi berikutnya. 
// Continue statement hanya dapat digunakan di dalam body looping.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}