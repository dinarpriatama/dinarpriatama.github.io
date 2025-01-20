/* 
Gaya imperatif (u/ mencapai satu tujuan, kita perlu menulis instruksi yg sifatnya langkah demi langkah) 
untuk solving dengan cara for loop
fokus ke "how to solve" bukan "what to solve".
*/
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

/*
Gaya deklaratif
*/

const names_1 = ['Nikita', 'Wita', 'Erna', 'Elin'];

const newNames_1WithMark = names_1.map((names_1) => `${names_1}!`);

console.log(newNames_1WithMark); 