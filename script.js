//  1/  scope
// var lang = "bangla";
// function learn(topic) {
//   lang = topic;
//   console.log("this is function call", topic);
// }

// learn("javascript");
// console.log("this is public call", lang);

// 2/ function

/*  regular function  */

// function hello() {
//   console.log("hello world");
// }
// hello()

/* function expression */
// const hello = function () {
//   console.log("hello expression");
// };
// console.log(hello);

/* name function expression */
// const hello = function hello () {
//   console.log("hello expression");
// };
// console.log(hello());

/* arrow function */
// const hello = () => {
//   console.log("hello arrow");
// };

// console.log(hello())

/* annoneymouse function */

// const hello(){
//   return ()=>{
//     console.log("hello annoneymouse")
//   }
// }

// console.log(hello())

// event handler

// const button = document.getElementById("button");

// function hello() {
//   console.log("button clicked");
// }

// button.addEventListener("click", hello);

// array methods\

/* find */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   " banana",
//   "jackfruits",
// ];

// const result = fruits.find((f) => f === "mango");
// console.log(result);

/* findindex */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   " banana",
//   "jackfruits",
// ];

// const result = fruits.findIndex((f) => f === "mango");
// console.log(result);

/* filter */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   " banana",
//   "jackfruits",
// ];

// const result = fruits.filter((f) => f === "mango"|| f==="tomato");
// console.log(result);

/* slice */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   " banana",
//   "jackfruits",
// ];

// const result = fruits.slice(3,4);
// console.log(fruits);
// console.log(result);

/* splice */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   " banana",
//   "jackfruits",
// ];

// const result = fruits.splice(1,3,"kola","anar");
// console.log(fruits);
// console.log(result);

/* concat */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   " banana",
//   "jackfruits",
// ];

// const result = fruits.concat("new item");
// console.log(fruits);
// console.log(result);

/* push */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   " banana",
//   "jackfruits",
// ];

// const result = fruits.push("new item");
// console.log(fruits);
// console.log(result);

/* map */
// const fruits = [
//   "mango",
//   "orange",
//   "tomato",
//   "watermelon",
//   "lichi",
//   "banana",
//   "jackfruits",
// ];

// const result = fruits.map((f) => {
//   if (f === "banana") {
//     return "kola";
//   }
//   else{
//     return "lal"
//   }
// });

// console.log(result);
// console.log(fruits);

/* reduce */
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((total, currentValue, currentIndex, arr) => {
//   console.log("total", total);
//   console.log("currentValue", currentValue);
//   console.log("index", currentIndex);
//   console.log("arr", arr);
//   return total + currentValue;
// }, 0);

// console.log(result);

/* for in loop */

/* for of arrays take value*/
// const number = [1, 2, 3, 4, 5];
// for (num of number) {
//   console.log(num);
// }

/* for in arrays take index */
// const number = [1, 2, 3, 4, 5];
// for (numb in number) {
//   console.log(numb);
// }

/* for in object data take */
// const person = {
//   name: "towsif",
//   DofB: 2003,
//   dis: "lakshmipur",
// };

// for (info in person) {
//   console.log(info);
//   console.log(person[info]);
// }

/* object */

/* keys, value , entries */
// const person = {
//   name: "towsif",
//   DofB: 2003,
//   dis: "lakshmipur",
// };

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

/* dynamic value add in object */
// const father = "saif ullah";

// const person = {
//   name: "towsif",
//   DofB: 2003,
//   dis: "lakshmipur",
//   father
// };

// console.log(person);

/* spread & rest operator  */

/* spread in array */
// const fruits = ["apple", "mango", "orange", "banana", "pineapple"];

// const result =[...fruits]
// result.push("coconut","tomato")
// console.log(fruits)
// console.log(result)

/* spread in object */
// const language = {
//   name: "python",
//   year: 1990,
//   creator: "elon musk",
// };
// const result = {
//   ...language,
// };

// const update=2003

// result.update=update

// console.log(result);

/* rest operator */
// const sum = (text, ...rest) => {
//   const result = rest.reduce((total, currentValue) => total + currentValue, 0);
//   console.log(`${text} ${result}`);
// };
// sum("the sum is:", 1, 2, 3, 4, 5);

/* js truthy or false value */

/* falsy value */
// false, 0, undefined, null, "", NaN;

/* truthy value */
// ei 6 ta badhe baki sob truthy value

/* destucture */

// const user = {
//   name: "towsif",
//   age: 21,
//   education: {
//     degree: "engineer",
//     college: {
//       cName: "munshiganj polytechnic institute",
//     },
//   },
// };

// const { name, age, education: { college: { cName } } = {} } = user;
// console.log(name, age, cName);

/* Nullish coalescing operator (??) Javascript Short Circuiting Operators */
// const lang = "hello";
// console.log(lang ?? "js"); //if left side is null or undefined then render right side value. otherwise render variable value;
// console.log(lang || "python"); //if left side is any falsy value then render right side value, otherwise render variable value;
// console.log(lang && "java"); //if left side is truthy then render right side value.otherwise render variable value;
