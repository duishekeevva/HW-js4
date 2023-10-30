//1
// function myFunction(str) {
//
//     if (str.includes('.')) {
//         let str1 = str.slice(str.indexOf('.'));
//         return str1 === '.com' || str1 === '.ru';
//     } else {
//         return false;
//     }
// }

// console.log(myFunction('Codifyy.com'));

//2
// function myFunction(str) {
//     if (str.trimStart().length%2===0 && str.length<=8 && str.length>=4) {
//         return `длина четная и длина строки ${str} не больше 8 и не меньше 4`
//     }
//     else {
//         return 'error'
//     }
// }
// console.log(myFunction('Codify'));
// console.log(myFunction('Codifyy'));

//3
// function myFunction(arr) {
//   return   arr.map((item,idx)=>{
//         if (idx%2===0){
//             return 'E'
//         } else{
//             return item
//         }
//     })
// }
// console.log(myFunction(['l','t','a','m']))

// 4
// function myFunction(psw1, psw2) {
//     if (psw1.trimStart()===psw2.trimStart()) {
//         return 'пароли совпадают'
//     }
//     else {
//         return 'не совпадают'
//     }
// }
// console.log(myFunction('Codify', 'Codify'));

//5
// function myFunction(arr) {
//     return arr.map(item=> item.length)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));

// 6
// function myFunction(arr) {
//     return arr.map((el, idx) => idx + 1)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor']));

// 7
// function myFunction(arr) {
//     return   arr.map((item,idx)=>{
//         if (idx%2===0){
//             return item.slice(0,1).toUpperCase()+item.slice(1)
//         } else{
//             return item
//         }
//     })
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor']));

// 8
// function myFunction(arr) {
//     return arr.map(str=>str.toUpperCase())
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor']));

// 9
// function myFunction(arr) {
//      return arr.join('-');
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));

// 10
// function myFunction(arr) {
//     return arr.join('/');
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));

// 11
// function myFunction(arr) {
//     return arr.join(' ');
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit']));
// 12
// function myFunction(arr) {
//     return arr.filter((el,idx)=>idx%2)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit', 'amet']));

// 13
// function myFunction(arr) {
//     return arr.filter((el,idx)=>idx%2===0)
// }
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit', 'amet']));

// 14
// function myFunction(arr, arr2) {
//     let newArr = arr.concat(arr2)
//     return newArr;
// }
//
// console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit'], ['consectetur', 'adipiscing', 'elit']));

// 15
// function myFunction(arr) {
//     return arr.filter((el)=>{
//         if (typeof el==="string") {
//             return delete el
//         }
//         else {
//             return arr
//         }
//     })
// }
// console.log(myFunction([123,33,444,'22',55,66,77,88,99,]));

// 16
// function myFunction(arr) {
//     const strArr = arr.filter(item => typeof item === 'string').map(item => +item)
//     const numArr = arr.filter(item => typeof item === 'number')
//     return numArr.concat(strArr)
// }
//
// console.log(myFunction([123, 33, 444, '22', 55, 66, 77, 88, 99]))

// 17

// 18

// 19
// function myFunction(arr) {
//     return arr.concat(arr)
// }
// console.log(myFunction([1123, 'qwe']));

// 20
// function myFunction(arr) {
//     return arr.concat(arr)
// }
//
// console.log(myFunction([null, undefined]));

// 21
// function myFunction(arr) {
//     return arr.split(' ').filter((el, idx) => idx % 2 === 0).join(' ')
// }
// console.log(myFunction('lorem ipsum dolor sit amet'));


