// class Engine {
//     drive(){
//         console.log('Engine is working');
//     }
// }
// class Wheel {
//     drive(){
//         console.log('Wheels"re driving');
//     }
// }

// class Car {
//   #engine = Engine;
//   #wheels = [];

//   constructor() {
//     this.#engine = new Engine();
//     this.#wheels.push(new Wheel());
//     this.#wheels.push(new Wheel());
//     this.#wheels.push(new Wheel());
//     this.#wheels.push(new Wheel());
//   }
//   drive(){
//     this.#engine.drive();
//     for(let i = 0; i < this.#wheels.length; i++){
//         this.#wheels[i].drive()
//     }
//   }
// }
// const bmw = new Car();
// bmw.drive()

// Все выше это композиция
// Все ниже это агрегация

class Engine {
  drive() {
    console.log("Engine is working");
  }
}
class Wheel {
  drive() {
    console.log('Wheels"re driving');
  }
}

class Freshener {}

class Flat {
  #fresher = Freshener;

  constructor(freshener) {
    this.#fresher = freshener;
  }
}

class Car {
  #engine = Engine;
  #wheels = [];
  #freshener = Freshener;
  constructor(freshener) {
    this.#freshener = freshener;
    this.#engine = new Engine();
    this.#wheels.push(new Wheel());
    this.#wheels.push(new Wheel());
    this.#wheels.push(new Wheel());
    this.#wheels.push(new Wheel());
  }
  drive() {
    this.#engine.drive();
    for (let i = 0; i < this.#wheels.length; i++) {
      this.#wheels[i].drive();
    }
  }
}
const bmw = new Car();
bmw.drive();
