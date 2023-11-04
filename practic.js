// class BankAccount {
//   constructor(owner, balance, currency) {
//     this.owner = owner;
//     this.balance = balance;
//     this.currency = currency;
//   }
//   deposit(amount) {
//     if (typeof amount !== "number" || amount === NaN)
//       return console.log("Only numbers");
//     return (this.balance += amount);
//   }
//   withdraw(amount) {
//     if (typeof amount !== "number" || amount === NaN)
//       return console.log("Only numbers");

//     if (this.balance - amount < 0) return console.log("Недостаточно средств");;
//     return this.balance - amount;
//   }
//   getBalance() {
//     return this.balance;
//   }
// }

// const user1 = new BankAccount("Иван", 1000, "USD");
// const user2 = new BankAccount("Мария", 500, "EUR");

// class Book {
//     constructor(title,author,year,genre,isRead = false){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//         this.genre = genre;
//         this.isRead = isRead
//     }
//     read(){
//         return this.isRead = !this.isRead
//     }
// }

// const book1 = new Book('Cherlok', 'Artur', 1814, 'Mystery');
// console.log(book1.read());

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// const num = -2
// console.log(num < 0 ? 'Отрицательное число' : 'Положительное число');

// Дана строка. Выведите в консоль длину этой строки.
// const strig = 'abc';
// console.log(strig.length);

// Дана строка. Выведите в консоль последний символ строки.
// const string = 'abc';
// console.log(string[string.length - 1]);

// Дано число. Проверьте, четное оно или нет.
// const num = 10;
// console.log(num % 2 === 0 ? "Четное" : "Нечетное", "число");

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const firstWord = 'apple'
// const secondWord = 'apply'
// console.log(firstWord.charAt(0) === firstWord.charAt(0) ? "Совпадают" : 'Не совпадают');

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// const string = "Тулень";
// console.log(
//   string[string.length - 1].toLowerCase() === "ь" ||
//     string[string.length - 1].toLowerCase() === "ъ"
//     ? string[string.length - 2]
//     : string[string.length - 1]
// );

//level 1.2
// Дано число. Выведите в консоль первую цифру этого числа.
// const num = 4561;
// console.log(+num.toString()[0]);

// Дано число. Выведите в консоль последнюю цифру этого числа.
// const num = 4561;
// let numToString = num.toString()
// console.log(+numToString[numToString.length - 1]);

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа
// const num = 2353290;
// console.log(+String(num)[0] + +num.toString()[num.toString().length - 1]);

// Дано число. Выведите количество цифр в этом числе.
// const num = 123456789;
// console.log(String(num).length);

// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const num1 = 345;
// const num2 = 305;
// console.log(num1.toString()[0] === num2.toString()[0] ? true : false);

//level 1.3
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const string = 'd';
// console.log(string.length > 1 ? string.charAt(string.length - 2) : null);

// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// const num1 = 80;
// const num2 = 10;

// console.log(num1 % num2 === 0 ? "Делится" : "Не делится");

//level 1.4
// Выведите в консоль все целые числа от 1 до 100.
// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }

// Выведите в консоль все целые числа от -100 до 0.
// for(let i = -100; i <= 0; i+= 1){
//     console.log(i);
// }

// Выведите в консоль все четные числа из промежутка от 1 до 100.
// for(let i = 2; i < 100; i++){
//     console.log(i);
// }

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// for(let i = 1; i <= 100; i++){
//     console.log(i % 3 === 0 ? i : '');
// }

//level 1.5
// Найдите сумму всех целых чисел от 1 до 100.
// let result = 0
// for(let i = 1; i <= 100; i++){
//     result += i
// }
// console.log(result);

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
// let result = 0
// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0) result += i
// }
// console.log(result);

// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let result = 0
// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0) result += i
// }
// console.log(result);

// Даны два целых числа. Найдите остаток от деления первого числа на второе.
// const num1 = 10;
// const num2 = 3;

// console.log(num1 % num2);

// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
// const string = 'abcde';
// string.split('').reverse().forEach(letter => {
//     console.log(letter);
// })

// level 1.6
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// const array = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//   result += Math.pow(array[i], 2)
// }
// console.log(result);

// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const array = [1,-2,3,-4,5];

// let result = 0;
// for(let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//         result += array[i]
//     }
// }
// console.log(result);

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// const array = [1,-2,3,-4,5, 20];

// let result = 0;
// for(let i = 0; i < array.length; i++){
//     if(array[i] > 0 && array[i] < 10){
//         result += array[i]
//     }
// }
// console.log(result);

//level 1.7
// 'abcde'
// Получите массив букв этой строки.
// const string = 'abcde';
// console.log(string.split(""));

// 12345
// Получите массив цифр этого числа.

// const nums = 12345;

// console.log(nums.toString().split("").map(letter => +letter));

// Дано некоторое число: // 12345
// Переверните его: // 54321
// const num = 12345;
// console.log(+num.toString().split("").reverse().join(""));

// Дано некоторое число: 12345
// Найдите сумму цифр этого числа.
// const num = 12345;
// let result = 0;
// num
//   .toString()
//   .split("")
//   .forEach((letter) => (result += +letter));

//   console.log(result);

// level 1.8
// Заполните массив целыми числами от 1 до 10.
// const emptyArray = [];
// for(let i = 1; i <= 10; i++) emptyArray.push(i);
// console.log(emptyArray);

//Заполните массив четными числами из промежутка от 1 до 100.
// const emptyArray = [];
// for (let i = 1; i <= 100; i++) if (i % 2 === 0) emptyArray.push(i);
// console.log(emptyArray);

//[1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// const arrayFractions =  [1.456, 2.125, 3.32, 4.1, 5.34]
// console.log(arrayFractions.map(num => Math.round(num)));

// level 1.9
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// const arrayString = ['http://localhost', "https://youtube.com"]
// console.log(arrayString.filter(link => link.startsWith('http://')));

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
// const arrayString = ['index.html', 'main.js', 'router.jsx', 'about.html'];
// console.log(arrayString.filter(file => file.endsWith('.html')));

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
// const numsArray = [2, 4, 6, 7];
// console.log(numsArray.map((num) => (num += (num / 100) * 10)));

//level 1.10

// Заполните массив случайными числами из промежутка от 1 до 100.
// const emptyArray = [];

// for(let i = 0; i <= 100; i++){
//     emptyArray.push(Math.floor(Math.random() * 101))
// }
// console.log(emptyArray);

// Выведите в консоль все его символы с конца.
// const nums = 12345;
// nums.toString().split("").reverse().forEach(item => {
//     console.log(+item);
// })

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i += 2) {
//   const subarray = arr.slice(i, i + 2);
//   console.log(subarray);
// }

// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));

// level 2.1
// Дана некоторая строка. Найдите позицию первого нуля в строке.

// const string = '12098234';
// console.log(string.indexOf('0'));

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// for (let i = 1; i <= 1000; i++) {
//   if (+String(i)[0] + +String(i)[1] === 5) console.log(i);
// }

//Дан массив. Удалите из него элементы с заданным значением.
// const array = [1, 2, false, null, NaN];
// function deleteItems(...args) {
//   return array.filter(item => !args.includes(item))
// }
// console.log(deleteItems(false, NaN));

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const halfArr = arr.splice(0, arr.length / 2);
// let result = 0;
// halfArr.forEach((num) => (result += num));
// console.log(result);

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// const arr = [1, -2, 6, 0, -5, 3, -2, -3, -2];
// let times = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     times++;
//   }
// }
// console.log(times);

// Дан массив с числами. Оставьте в нем только положительные числа.
// const arr = [1, -2, 6, 0, -5, 3, -2, -3, -2];
// console.log(arr.filter(num => num >= 0));

// Дана строка. Удалите предпоследний символ из этой строки.
// const string = '123abc';
// const firstPart = string.slice(0,string.length - 2);
// const secondPart = string.slice(string.length - 1);
// console.log(firstPart + secondPart);

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
// const arr = [1, 2, 3, 4, 5, 6];
// const firstPartArr = arr.splice(0, arr.length / 2);
// const secondPartArr = arr.splice(arr.length / 2 - 1);
// let result = 0;
// firstSum = firstPartArr.reduce((a, b) => (a += b))
// secondSum = secondPartArr.reduce((a, b) => (a += b))
// console.log(firstSum / secondSum);

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
// const firstWord = "abc";
// const secondWord = "acba";

// console.log(
//   firstWord.charAt(firstWord.length - 1) === secondWord.charAt(0) ? "Yes" : "No"
// );

//Дана некоторая строка. Найдите позицию третьего нуля в строке.
// const str = '123089010410';
// let countSize = 0
// for(let i = 1; i <= str.length; i++){
//     if(str[i] === '0'){
//         countSize++
//         if(countSize === 3){
//             console.log(i);
//         }
//     }
// }

// Даны числа, разделенные запятыми: '12,34,56'
// Найдите сумму этих чисел.
// const str = "12,34,56";
// console.log(
//   str
//     .split(",")
//     .map((str) => +str)
//     .reduce((a, b) => (a += b))
// );

// Дана дата в следующем формате: '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
// const date = '2025-12-31';
// const dateArray = date.split("-")
// let dateYear = dateArray[0];
// let dateMonth = dateArray[1];
// let dateDay = dateArray[2];
// const dateObject =  {
//     year: dateYear,
//     month: dateMonth,
//     day: dateDay
// }

// console.log(dateObject);

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// const str = "1asd23";
// const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let count = 0
// for (let i = 0; i < str.length; i++) {
//   if (nums.includes(+str[i])) {
//     count++;
//     if(count === 1){
//         console.log(i);
//     }
//   }
// }

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// const object = {
//   value1: "a",
//   value2: "b",
//   value3: "c",
// };
// const objectKeys = Object.keys(object);
// const objectValues = Object.values(object);

// Дано число. Выведите в консоль количество четных цифр в этом числе.
// let num = 14243895345234122;
// let count = 0
// for(let i = 0; i < num.toString().length; i++){
//     if(+num.toString()[i] % 2 === 0){
//         count++
//     }
// }
// console.log(count);

//'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее // 'AbCdE'

// let str = "abcde";
// const result = (str) => {
//   return str
//     .split("")
//     .map((letter, idx) =>
//       idx % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
//     )
//     .join("");
// };

// console.log(result(str));

// Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
// const str = 'aaa bbb ccc non';
// console.log(str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

//level 2.5
// Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// const str = '023m0df0dfg0x';
// const arrayStr = str.split('');
// let result = []
// arrayStr.map((el, i) => {
//   if(el === '0'){
//     result.push(i)
//   }
// })
// console.log(result);

// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'
// const str = "abcdefg";
// console.log(str.split("").filter((item, ind) => (ind + 1) % 3 !== 0).join(''));

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
// const array = [1, 2, 3, 4, 5, 6];
// let evenAmount = 0;
// let oddAmount = 0;
// for (let i = 0; i < array.length; i++) {
//   if (i % 2 === 0) evenAmount += array[i];
//   else oddAmount += array[i];
// }
// console.log(evenAmount / oddAmount);

//level 2.6
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
// const someString = "23jkj4fslrui32rdshfqwj3";
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => num.toString());
// let result = [];
// someString.split("").filter((symbol, index) => {
//   if (nums.includes(symbol)) {
//     result.push(index);
//   }
// });
// console.log(result);

// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: // [321, 654, 987];
// const array = [123, 456, 789];
// let result = array.map((num) => +num.toString().split("").reverse().join(""));
// console.log(result);

// Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:  '1 234 567'

// const str = '1234567'
// console.log(new Intl.NumberFormat('en-US', {
//   currency: "RUB",
//   currencyDisplay: "narrowSymbol",
// }).format(str).split(',').join(' '));

// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: // 'aBcDe';
// const str = 'AbCdE';
// console.log(str.split('').map((letter, idx) => idx % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase()).join(''));

// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]
// const arr = [1, 2, 3, 4, 5, 6];
// let result = [];

// for (let i = 0; i < arr.length; i += 2) {
//   const chunk = arr.slice(i, i + 2)
//   result.push(chunk.join(""));
// }
// console.log(result);

// Дана некоторая строка со словами: // 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'

// const str = 'aaa bbb ccc eee fff';
// console.log(str.split(' ').map((word, idx) => idx % 2 !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word));

//level 2.7
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки,
// в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'
// const str = "a bc def ghij";
// console.log(str.split(" ").map(word => word.length <= 3 ? word.toUpperCase() : word));

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
// const symbol = "A";
// console.log(symbol  === symbol.toUpperCase() ? 'Символ в верхнем регистре' : 'Символ не в верхнем регистре');

// Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28
// const num = 123789;
// console.log(
//   +num
//     .toString()
//     .split("")
//     .map((letter) => +letter % 2 === 0 && letter)
//     .filter((letter) => letter !== false)
//     .join("")
// );

// level 2.8
// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
// const str = 'aVdD'
// let result = []
// for(let i = 0; i < str.length; i++){
//   if(str[i] === str[i].toUpperCase()) result.push(str[i]);
// }
// console.log(result.length > 2 ? 'Больше двух' : 'Меньше двух');

// '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'

// const str = '1 22 333 4444 22 5555 1';
// console.log(str.split(' ').filter(num => num.length <= 3 ? num : ''));

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:

// [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// let res = arr1.splice(0,2).concat(arr2)
// res.push(...arr1.splice(-1))
// console.log(res);

//level 2.9
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

// const num = 123456;
// const strFromNum = num.toString();
// const arryFromStr = strFromNum.split('');
// let res = []
// for(let i = 0; i < arryFromStr.length; i+= 2){
//    const halfArr = arryFromStr.slice(i, i + 2);
//    res.push(halfArr.reduce((a,b) => a + b))
// }
// console.log(res.reduce((acc,num) => +acc + +num));

// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

//level 2.10
// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
// const str = '12aff';
// let nums = [0,1,2,3,4,5,6,7,8,9].map(num => num.toString());
// let countResult = 0;
// console.log(str.split('').filter(word => !nums.includes(word)).length > 3 ? 'Больше трех букв' : 'Меньше трех букв');

// Дано число. Получите первую четную цифру с конца этого числа.
// const num = 3412529;
// const reverseArr = num.toString().split("").reverse();
// console.log(+reverseArr.find((item) => +item % 2 === 0));

// Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
// const str = 'abcde abcde abcde';
// console.log(str.split(' ').map(num => '!' + num).join(' '));

// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
// const arr = [1, 2, 3, 3, 4, 5]
// arr.map((num, i) => {
//   console.log(num === arr[i + 1] ? `${num} идет два раза подряд` : 'Повторяющихся цифр нету');
// })

//level 3.1

// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
// const num = 1234967;
// for(let i = 0; i < num.toString().length; i++){
//   +num.toString()[i] === i + 1 ? console.log("Все цифры по возрастанию") :console.log("Все цифры не по возрастанию")
// }

// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
// console.log([1, '', 2, 3, '', 5].filter(num => num !== ''));

// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.
// const arrays = [
//   [2, 1, 4, 3, 5],
//   [3, 5, 2, 4, 1],
//   [4, 3, 1, 5, 2],
// ];
// arrays.forEach((arr) => {
//   console.log(arr.sort((a, b) => a - b));
// });

// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(arr1.length);
// console.log(arr2);

//level 3.2
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
// for (let i = 10; i < 1000; i++) {
//   if (+i.toString()[i.toString().length - 2] % 2 === 0) console.log(i);
// }

// Дан массив. Удалите из него каждый пятый элемент.
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// console.log(arr.filter((el,idx) => (idx + 1) % 5 !== 0));

// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'
// let num = 50;
// let result = ''
// for(let i = 0; i < num; i++){
//     result += '0'
// }
// console.log(result);

// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'

// const str = "aaa bbb ccc eee fff";
// console.log(str.split(" ").filter((word, idx) => (idx % 2 === 0 ? word : "")));

// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

// const arrays = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let result = 0;
// arrays.forEach((arr) => {
//   result += arr.reduce((acc, num) => (acc += num));
// });
// console.log(result);

//level 3.3
// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
// const arrWords = ['abc', 'nonon', 'lalala', 'qiwiqi', '12'];
// console.log(arrWords.filter(word => word.length <= 3));

// Дано некоторое число: 1357
// Проверьте, что все цифры этого числа являются нечетными.
// let num = 1357;
// const arrFromNum = String(num).split('');
// console.log(arrFromNum.every(letter => +letter % 2 !== 0) ? 'Все числа нечетные' : 'Некоторые числа четные ');

// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.
// const str = 'abcba'
// console.log(str.split('').join('') === str.split('').reverse().join(''));

// Найдите сумму элементов этого массива.
// const nestedArr = [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]

// function sumNestedArr(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             sum += sumNestedArr(arr[i]);
//         } else {
//             console.log(true);
//             sum += arr[i];
//         }
//     }

//     return sum;
// }
// let result = sumNestedArr(nestedArr)
// console.log(result);

//level 3.4
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
// for(let i = 10; i < 1000; i++){
//     if(+i.toString().charAt(0) % 2 === 0) console.log(i);
// }

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]

// const arr = [1,2,3,4,5,6];
// let result = []
// for (let i = 0; i < arr.length; i += 2) {
//   const chunk = arr.slice(i, i + 2)
//   result.push(chunk.reverse().join(''));
// }
// console.log(result.toString().split('').filter(num => num !== ',').map(num => +num));

// Дан следующий объект:
// let obj = {
//   1: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   2: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   3: {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// };

// const sumObject = (obj) => {
//   let sum = 0;
//   for (let keys in obj) {
//     if (obj[keys] !== null && typeof obj[keys] === "object") {
//       sum += sumObject(obj[keys]);
//     } else {
//       sum += obj[keys];
//     }
//   }
//   return sum;
// };
// console.log(sumObject(obj));

//level 3.5
// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
// const str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amob Modi delectus dicta eos consectetur, itaque dolorem cumque magni consequatur asperiores ut ipsam aliquam totam eligendi sint molestias vel. Eius, vero saepe.";
// console.log(str.split(' ').filter(word => word.charAt(0).toLowerCase() === 'a'));

//Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
// const arrNums = [10,5,9,11,43];
// console.log(arrNums.filter(num => num % 5 === 0));

// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
// const arrNums = [23,105,32,57,90];
// console.log(arrNums.filter(num => num.toString().includes('0')));

// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// const arrNums = [124,123,757,954,354];
// console.log(arrNums.filter(num => num.toString().includes('3') ? num : ''));

// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345
// let num = 35142;
// console.log(+num.toString().split("").sort((a,b) => a - b).join(''));

// Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'
// let count = 5;
// let result = ''
// for(let i = 0; i < count; i++){
//     result += `-${i + 1}`
// }
// console.log(`${result}-`);

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323
// 		},
// 	},
// }
// const sumObject = (obj) => {
//   let sum = 0;
//   for (let keys in obj) {
//     if (obj[keys] !== null && typeof obj[keys] === "object") {
//       sum += sumObject(obj[keys]);
//     } else {
//       sum += obj[keys];
//     }
//   }
//   return sum;
// };
// console.log(sumObject(obj));
// Найдите сумму элементов этого объекта.

//level 3.6
// Дан массив с числами. Удалите из него числа, состоящие более чем из трех цифр.
// const arrNums = [1234,56,1,90,2453];
// console.log(arrNums.filter(num => String(num).length < 3));

// Дано число, например, вот такое:
// let num = 123405;
// // Проверьте, что все цифры этого числа больше нуля.
// for(let i = 0; i < num.toString().length; i++){
// 	if(+num.toString()[i] > 0){
// 		console.log(true);
// 	}else{
// 		console.log(false);
// 	}
// }

//Дан некоторый массив, например, вот такой: [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arr = [123,456,789];
// console.log(arr.join('').split('').map(num => +num));

//level 3.7
// Дана строка со словами. Отсортируйте слова в алфавитном порядке.
// const str = "Green Zebra Red Apple Blue";
// console.log(
//   str.split(" ").sort((a, b) => {
//     let letterOne = a.toLowerCase().charAt(0);
//     let secondOne = b.toLowerCase().charAt(0);

//     if (letterOne < secondOne) return -1;
//     if (letterOne > secondOne) return 1;
//     return 0;
//   })
// );

// Дано число. Получите массив делителей этого числа.
// const num = 20;
// let count = 0;
// let result = []
// for(let i = 0; i < num; i++){
// 	count++;
// 	if(num % count === 0){
// 		result.push(count)
// 	}
// }
// console.log(result);

// Даны два числа. Получите массив общих делителей этих чисел.
// const num1 = 20;
// const num2 = 35;
// let count = 0;
// let result = [];
// const mostBigValue = num1 > num2 ? num1 : num2;
// for (let i = 0; i < mostBigValue; i++) {
//   count++
//   if (num1 % count === 0 && num2 % count === 0) {
//     result.push(count)
//   }
// }
// console.log(result);

// Через запятую написаны числа. Получите максимальное из этих чисел.
// let num = '1,2,51,135,3,86,1';
// let arrayNums = num.split(',').map(num => +num);
// console.log(arrayNums.sort((a,b) => b-a)[0]);

// Дана строка. Удалите из нее все гласные буквы.
// let string = 'Удалить все гласные буквы их этого предложения';
// let abc = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я' ];

// console.log(string.split('').filter(letter => !abc.includes(letter)).join(''));

// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
// let str = "This is line";
// console.log(
//   str
//     .split(" ")
//     .map(
//       (word) =>
//         word.slice(0, word.length - 1) +
//         word.charAt(word.length - 1).toUpperCase()
//     )
//     .join(" ")
// );

// Дан следующая структура:

// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// // Найдите сумму элементов этой структуры.

// let sum = 0
// function findSum(object){
//   for(let key in object){
//     if(object[key] !== null && typeof object[key] === 'object'){
//       findSum(object[key])
//     }else{
//       sum += object[key]
//     }
//   }
//   return sum
// }
// console.log(findSum(data));

//level 3.8
// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
// const arrayNums = [123,523,432,6543];
// console.log(arrayNums.every(num => num.toString().includes('3')));

// Дана строка в формате: 'kebab-case'
// Преобразуйте ее в формат: 'snake_case'
// const str = 'kebab-case-work';
// console.log(str.replace(/-/gi, "_"));

// Дана строка в формате:'snake_case'
// Преобразуйте ее в формат: 'camelCase'
// const str = 'snake_case_and_any_words';
// console.log(str.split("_").map((word, idx) => idx !== 0 ? word.charAt().toUpperCase() + word.slice(1) : word).join(''));

// Дана строка в формате: 'camelCase'
// Преобразуйте ее в формат: 'snake_case'

// const str = 'camelCaseSecondVeryLongLine';
// let [firstWord] = str.split(/(?=[A-Z])/).slice(0,1);
// console.log(firstWord + "_" +  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).split('_').splice(1).join("_"));

// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

// let result = [];
// let count = 0;
// let maxCountInnerArray = 4;

// for (let i = 0; i < maxCountInnerArray; i++) {
//   let newArray = new Array();
//   for (let j = 0; j < 3; j++) {
//     newArray.push(j + 1);
//   }
//   result.push(newArray);
// }
// console.log(result);

//знаю что решил плохо так как сложность алгоритма O(n^2);

// level 3.9
// Дана строка. Проверьте, что эта строка состоит только из цифр.
// const strNums = '346521';
// let arrayNums = [1,2,3,4,5,6,7,8,9].map(num => num.toString());
// console.log(strNums.split('').every(symbol => arrayNums.includes(symbol)));

// Дана строка. Проверьте, что эта строка состоит только из четных цифр.
// const strNums = '20486';
// console.log(strNums.split('').every(num => +num % 2 === 0));

// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
// const arrayNums = [432, 900, 124000, 31, 30033];
// console.log(arrayNums.filter(num => !num.toString().includes('00')));

// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
// for(let i = 1; i < 1000; i++){
//   if(i.toString().split('').map(num => +num).reduce((prevAcum, num) => prevAcum += num) === 13) console.log(i);
// }

// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

// let numRows = 3;
// let numCols = 3;
// let counter = 1;
// let resultArray = [];

// for (let i = 0; i < numRows; i++) {
//   let row = [];
//   for (let j = 0; j < numCols; j++) {
//     row.push(counter);
//     counter++;
//   }
//   resultArray.push(row);
// }

// console.log(resultArray);

//level 3.10
// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
// const array = ["a", 5, "g", false];
// let copyArray = JSON.parse(JSON.stringify(array));
// let countIdx = 1

// array.map((el) => {
//   copyArray.splice(countIdx, 0, el);
//   countIdx += 2
// })
// console.log(copyArray);

// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
// const arrayNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const numDivider = 2;
// console.log(arrayNums.filter(num => num % numDivider === 0));

// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
// let num1 = 5623;
// let num2 = 8963;

// let result = [];

// num1
//   .toString()
//   .split("")
//   .map((num) => +num)
//   .map(
//     (el) =>
//       num2
//         .toString()
//         .split("")
//         .map((num) => +num)
//         .includes(el) && result.push(el)
//   );

// console.log(result);
//Ужас :)

// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
// let num = 353454643534333;
// let result = []
// num.toString().split('').map((num, i) => num === '3' && result.push(i)).splice(1, num.toString().length - 1);
// console.log(result);

// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
//Позже решу

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в один одномерный массив:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const bigArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(bigArr.flat());

//level 4.1
// Сделайте функцию, которая вернет текущий день недели словом.

// const daysList = new Map([
//   [1, "Понедельник"],
//   [2, "Вторник"],
//   [3, "Среда"],
//   [4, "Четверг"],
//   [5, "Пятница"],
//   [6, "Суббота"],
//   [7, "Воскресенье"],
// ]);

// function sayNowDay(day) {
//   return `Сегодня ${daysList.get(day)}`;
// }
// const nowDay = new Date().getDay();

// console.log(sayNowDay(nowDay));

// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
// const daysList = new Map([
//   ["Mon", "Понедельник"],
//   ["Thu ", "Вторник"],
//   ["Wed", "Среда"],
//   ["Thu", "Четверг"],
//   ["Fri", "Пятница"],
//   ["Sat", "Суббота"],
//   ["Sun", "Воскресенье"],
// ]);

// function sayNowDay(date) {
//   const nameDay = String(date).split(" ")[0];
//   return `Сегодня ${daysList.get(nameDay)}`;
// }
// const nowDate = new Date();
// console.log(sayNowDay(nowDate));


// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
