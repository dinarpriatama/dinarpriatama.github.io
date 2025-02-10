// Constructor Function

function Person(name, age) {
    this.name = name;
    this.age = age;
}
   
Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
 
console.log(person1.name);
console.log(person2.name);
 
person1.eat();
person2.eat();


// ES6 Class

class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    }

    eat() {
    console.log(`${this.name} is eating`);
    }
}

// Membuat instance dari Person
const person_1 = new Persons('Nikita', 30);
const person_2 = new Persons('Wita', 25);

console.log(person_1.name);
console.log(person_2.name);

person_1.eat();
person_2.eat();