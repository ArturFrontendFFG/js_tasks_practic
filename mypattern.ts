class User {
  username: string;
  age: number;
}

interface UserRepo {
  getUsers: () => User[];
}

class UserMongoDBRepo implements UserRepo {
  getUsers(): User[] {
    console.log("Используем connect MongoDB and get user data");
    return [{ age: 15, username: "User from MongoDB" }];
  }
}
class UserPostgresDBRepo implements UserRepo {
  getUsers(): User[] {
    console.log("Используем connect POSTGRES and get user data");
    return [{ age: 15, username: "User from POSTGRES" }];
  }
}

class UserService {
  userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  filterUserByAge(age: number) {
    const users = this.userRepo.getUsers();
    //какая то логика фильтрации
    console.log(users);
  }
}

const userService = new UserService(new UserPostgresDBRepo());
userService.filterUserByAge(22);

//pattern singleton
class DataBase {
  url: number;

  private static instance: DataBase;

  constructor() {
    if (DataBase.instance) {
      return DataBase.instance;
    }
    this.url = Math.random();
    DataBase.instance = this;
  }
}

const db1 = new DataBase();
const db2 = new DataBase();

console.log(db1.url);
console.log(db2.url);
