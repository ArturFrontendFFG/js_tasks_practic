// class Rectange {
//   #width;
//   #height;

//   constructor(w, h) {
//     this.#width = w;
//     this.#height = h;
//   }

//   get() {
//     return this.#width;
//   }
//   set(value) {
//     if(value <= 0) this.#width = 1
//     else this.#width = value;
//   }

//   calcArea () {

//   }
// }

// const rect = new Rectange(-10, 5);
// console.log(rect.set(5));
// console.log(rect.get());

// class User {
//   #username;
//   #password;
//   #id;

//   constructor(username, password) {
//     this.#username = username;
//     this.#password = password;
//     this.#id = "234342"; //generateRandomId
//   }

//   get username() {
//     return this.#username;
//   }

//   set username(value) {
//     return (this.#username = value);
//   }

//   get password() {
//     return this.#password;
//   }

//   set password(password) {
//     return (this.#password = password);
//   }

//   get id() {
//     return this.#id;
//   }

// }

// const user = new User("Artur", "134safho");
// console.log(user.password);

// // console.log((user.password = "asf"));
// console.log(user.id);
// console.log((user.id = "23lrsflkjs"));
class DataBase {
  #url;
  #port;
  #username;
  #password;
  #tables;

  constructor(url, port, username, password) {
    this.#url = url;
    this.#port = port;
    this.#username = username;
    this.#tables = [];
    this.#password = password;
  }

  createNewTable(table) {
    return this.#tables.push(table);
  }

  clearAllTabels() {
    return (this.#tables = []);
  }

  get url() {
    return this.#url;
  }
  get port() {
    return this.#port;
  }
  get username() {
    return this.#username;
  }
  get tables() {
    return this.#tables;
  }
  get password() {
    return this.#password;
  }
}

const db = new DataBase(1, 2, 3, "old password");
// console.log(db.tables );
db.createNewTable("new table");
db.createNewTable({ name: "admin" });
console.log(db.tables);
db.clearAllTabels()
console.log(db.tables);
