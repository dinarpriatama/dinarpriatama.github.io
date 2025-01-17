const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
];
  
function addEmployee(x, y, z) {
   /**
    * @TODO
    * lengkapi fungsi ini agar dapat menambahkan objek employee baru
    * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
    */
    employees.push({
        name: x,
        email: y,
        joinYear: z,
    })
}

//console.log(employees);

addEmployee('Dinar', 'dnr@AbortController.com', 1900);
console.log(employees);
