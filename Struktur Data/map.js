/*
Map sama dengan object yang membedakan kalau Map key nya bisa dengan tipe data apapun,
sedangkan object keynya hanya menerima tipe data string.
*/

//inisiasi map
const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);

console.log(productMap);

const map = new Map();
map.set('name', 'aras');
map.set(1, 'number one');
console.log(map);

//mengakses value map
console.log(productMap.get('shoes'));

//menghapus nilai map
map.delete('name');
console.log(map);