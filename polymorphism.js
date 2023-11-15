class Person {
  #firstName;
  #lastName;
  #age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  greeting() {
    console.log("Hi i'm person and my name's ", this.#firstName);
  }

  get fullName() {
    return `Last name-${this.#lastName}, Name-${this.#firstName}`;
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

  greeting() {
    console.log("I'm employee and my name's");
  }
}
class Developer extends Employee {
  #level;
  #language;

  constructor(firstName, lastName, age, inn, number, snils, level, language) {
    super(firstName, lastName, age, inn, number, snils);
    this.#level = level;
    this.#language = language;
  }
  //   greeting (){
  //     console.log("I'm developer and my name's", this.firstName);
  //   }
}
const developer1 = new Developer(
  "Alex",
  "Karbushev",
  23,
  "234sdf2",
  "333222333",
  'i"m developer',
  "middle",
  "C++"
);

const employee1 = new Employee(
  "Oleg",
  "Demochkin",
  17,
  "sadf23",
  "999888777",
  'i"m employee'
);

const person = new Person("Person", "LastName", 44);

person.greeting();
employee1.greeting();
developer1.greeting();

