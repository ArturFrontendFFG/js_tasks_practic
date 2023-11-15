class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  fullName(){
    return `LastName-${this.#lastName}, Name-${this.#firstName}`
  }

  get name() {
    return this.#firstName;
  }
  set name(value) {
    return (this.#firstName = value);
  }

  get lastName() {
    return this.#lastName;
  }
  set lastName(value) {
    return (this.#lastName = value);
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) {
      return (this.#age = 0);
    } else {
      return (this.#age = value);
    }
  }
}

class Employee extends Person {
  #inn;
  #number;
  #snils;

  constructor(firstName, lastName, age, inn, number, snils) {
    super(firstName, lastName, age);
    this.#inn = inn;
    this.#number = number;
    this.#snils = snils;
  }
  get inn() {
    return this.#inn;
  }
}

const employee1 = new Employee(
  "Ivan",
  "Kurochkin",
  22,
  999,
  "0559302803",
  "snils?"
);

// console.log(employee1.inn);

class Developer extends Employee {
  #level;

  constructor(firstName, lastName, age, inn, number, snils, level) {
    super(firstName, lastName, age, inn, number, snils);
    this.#level = level;
  }
  get level() {
    return this.#level;
  }
}

const developer1 = new Developer(
  "Ivan",
  "Kurochkin",
  22,
  999,
  "0559302803",
  "snils?",
  'middle'
);
console.log(developer1.level);
console.log(developer1.inn);

console.log(developer1.fullName());