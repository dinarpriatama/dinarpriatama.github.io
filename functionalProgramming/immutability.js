/*
Sebuah konsep bahwa segala yang sudah dibuat, tidak bisa diubah nilainya. 
Konsep ini disebut sebagai immutability.
*/

/*
// Contoh mutate max function
function max(arrayOfNumbers) {
  return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop();
}
  
const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);
  
console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]


// Contoh mutate function registerEmail
function registerEmail(person, email) {
  return Object.assign(person, { email });
}
  
const person = {
  name: 'John',
  username: 'johndoe',
};
  
const personWithEmail = registerEmail(person, 'john@dicoding.com');
  
console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
*/

/*
Untuk membuat kedua fungsi di atas kembali pure, kita tidak boleh memodifikasi 
nilai yang diberikan melalui argumen. Umumnya, hal ini dilakukan dengan menduplikasi nilai array 
atau objek dan menambahkan data baru, lalu kembalikan fungsi menggunakan nilai baru tersebut.

Secara umum, proses duplikasi data dapat dilakukan dengan mudah menggunakan sintaksis spread operator. 
Berikut adalah versi perbaikan dari fungsi max dan registerEmail agar bersifat immutate.
*/

// Contoh Immutatenya
function max(arrayOfNumber) {
    return [...arrayOfNumber] // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
      .sort((a, b) => a - b)
      .pop();
  }

// Contoh immutate
function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}
  
const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);
  
console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]
  
const person = {
  name: 'John',
  username: 'johndoe',
};
  
const personWithEmail = registerEmail(person, 'john@dicoding.com');
 
console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }


/*
Immutable array methods
1. Array Map
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

2. Array Filter
const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
  .filter((item) => Boolean(item));

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

Output:
[ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]

3. Array Reduce
array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
     
// [...] adalah opsional parameter
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore); // Output: 313

4. Object Freeze
const user = {
  name: 'John',
  email: 'john@dicoding.com',
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = 'doe@dicoding.com';
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

Object.freeze hanya membekukan tingkat pertama dari objek. Jika objek tersebut memiliki properti 
yang merupakan objek lain, properti tersebut masih dapat diubah. Untuk membuat objek benar-benar immutable, 
kita perlu membekukan setiap objek yang menjadi properti secara rekursi.

Contoh lainnya:

function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: 'Bob',
  email: 'bob@dicoding.com',
  preferences: {
    newsletter: true,
    notifications: 'weekly',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = 'Los Angeles';

console.log(complexUser.preferences.address.city); // Output: 'New York'
*/
