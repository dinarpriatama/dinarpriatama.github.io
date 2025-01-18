//if statement
//contoh 1 if statement
const gajian = false;

console.log('Berjalan-jalan di mall');

if (gajian) {
    console.log('Makan di restoran mall');
}

console.log('Pulang ke Rumah');

//contoh 2 if statement
const score = 80;

if (score > 90) {
    console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score >= 80) {
    console.log('Selamat, Anda lulus ujian!');
} else {
    console.log('Maaf, Anda belum lulus ujian.');
}

/*
ternary operator (conditional operator)
rumus: let result = condition ? value1 : value2;
*/

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);


/*
Switch statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus.
 rumus:     switch (expression) {
            statement
            }
*/

const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}

//contoh if
const day = new Date().getDay();

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

//contoh dgn switch
const day_switch = new Date().getDay();

switch (day_switch) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}