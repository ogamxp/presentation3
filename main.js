// let str = "abubakr"
// let ans = str.at(0).toUpperCase().concat(str.slice(1))
// console.log(ans);

// 1
// let giveMeSomething = (str) => {
//     let s = "something"
//     return s.concat(" ", str)
// }

// console.log(giveMeSomething('is better than nothing'));
// console.log(giveMeSomething('Bob Jane'));
// console.log(giveMeSomething('something'));

// 2
// let stringInt = (str) => {
//     return Number(str);
// }

// console.log(stringInt('6'));
// console.log(stringInt('1000'));
// console.log(stringInt('12'));

// 3
// let greeting = (str) => {
//     let h = 'Hello'
//     return h.concat(" ", str.replace('Mubashir', "my Love!"))
// }

// console.log(greeting('Matt'));
// console.log(greeting('Helen'));
// console.log(greeting('Mubashir'));

// 4
// let comp = (str, str2) => {
//     if (str.length === str2.length){
//         return true;
//     }

//     else {
//         return false;
//     }
// }

// console.log(comp('AB', 'CD'));
// console.log(comp('ABC', 'DE'));
// console.log(comp('hello', 'edabit'));

// 5
// let length = (str, cnt = 0) => {
//     if (str == ""){
//         return cnt
//     }

//     else {
//         return length(str.slice(1), ++cnt)
//     }
// }

// console.log(length('apple'));
// console.log(length('make'));
// console.log(length(''));