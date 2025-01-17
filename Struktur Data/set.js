/*
Set tidak memiliki key dan index ketika menyimpan data.
Data yg disimpan di dalam set akan bernilai unik (tidak akan ada duplicate)
*/

//inisiasi set
//const set = new Set();
const mySet = new Set([1, 2, 3]);

console.log(mySet);

//menyimpan nilai set
const random = new Set();
random.add(1);
random.add(2);
random.add(4);
random.add(2);
random.add('Durian');
random.add(3);
random.add(1);

console.log(random);

//mengakses nilai set
for (const isi_set of random) {
    console.log(isi_set);
}

random.forEach((element) => console.log(element));

//menghapus nilai set
random.delete('Durian');
random.delete(1);
console.log(random);