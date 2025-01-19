// Cara biasa ketika ada penambahan subClass yg dimana memiliki methods gabungan dari kelas yg lain
/*
class Character {
    constructor(name, health, position) {
      this.name = name;
      this.health = health;
      this.position = position;
    }
   
    canMove() {
      console.log(`${this.name} moves to ${this.position}!`);
    }
}
   
   
class Monster extends Character {
    canAttack() {
      console.log(`${this.name} attacks with a weapon!`);
    }
}
   
class Guardian extends Character {
    canDefend() {
      console.log(`${this.name} defends with a shield!`);
    }
}
   
class Wizard extends Character {
    canCastSpell() {
      console.log(`${this.name} casts a magic spell!`);
    }
}

// jika ingin menambah class warrior maka dengan inheritance method dari superClass Character

class Warrior extends Character {
    canAttack() {
      console.log(`${this.name} attacks with a weapon!`);
    }
   
    canDefend() {
      console.log(`${this.name} defends with a shield}!`);
    }
}
*/

/*
namun cara tersebut tidak efektif ketika kita ingin mengubah method canAttack(), maka
kita harus merubah method tersebut di 2 subClass (monster dan warrior).
Solusi supaya efektif adalah menggunakan object composition.
Ketika menggunakan object composition, pendekatan yang digunakan adalah berbasis kemampuan, 
bukanlah peran atau identitas
*/

class Character {
    constructor(name, health, position) {
      this.name = name;
      this.health = health;
      this.position = position;
    }
   
    canMove() {
      console.log(`${this.name} moves to ${this.position}!`);
    }
}
 
function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character.name} attacks with a weapon!`);
    }
  };
}
 
function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character.name} defends with a shield!`);
    }
  };
}
 
function canCastSpell(character) {
  return {
    castSpell: () => {
      console.log(`${character.name} casts a spell!`);
    }
  };
}
 
function createMonster(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character));
}
 
function createGuardian(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canDefend(character));
}
 
function createWizard(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canCastSpell(character));
}
 
function createWarrior(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character), canDefend(character));
}
 
const monster = createMonster('Monster');
monster.canMove();
monster.attack();
 
const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();
 
const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();
 
const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();

/*
Object composition dapat menjadi solusi untuk masalah pewarisan yang kompleks. 
Selain itu, dengan menggunakan object composition, maka pendekatan yang digunakan adalah 
berbasis kemampuan, bukanlah peran atau identitas.
*/