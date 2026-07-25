// let arr = [1,2,3,4,5,6,7,8,9]
//  let axror = arr.splice(0,2)
// let johon = arr.splice(-2)
// console.log( axror.concat(johon));
// console.log(arr);
// //[3,4,5,6,7]
// //[1,2,8,9]
// let email = "domla javob bering@yandex.ru"
// let isom = email.split("@")[0];
// if ( isom.length >= 5 &&
//   (email.endsWith("@gmail.com") || email.endsWith("@yandex.ru"))
// ) {
//   console.log(true); 
// } else {
//   console.log(false);
// }

// if(email.endsWith("@gmail.com") && email.length >=5) { 
// console.log(true);
// }else { 
// console.log(false);
// }
// let p = email.endsWith("@gmail.com")
// let o = email.length >= 5
// console.log(email);
// console.log(p);



// function accum(str) {
//   str = str.tolowercase();
//   let newStr = "";
//   for (let i = 0; i < str.length; i++){ 
//     newStr +=
//     str[i].repeat(i + 1)[0].toUppercase() +
//     str[i].repeat(i + 1).slice(1) +
//     "-"
//   }
//   return newStr.slice(0, newStr.length - 1);
// }
// console.log(acum("abcd"));
// console.log("rqaezty");

// const input = {
//   Ali: {
//     tasks: {
//       task1: { completed: true },
//       task2: { completed: true },
//       task3: { completed: false },
//     },
//   },
//   Vali: {
//     tasks: {
//       task1: { completed: true },
//       task2: { completed: false },
//     },
//   },
//   sami: {
//     tasks: {
//       task1: { completed: true },
//       task2: { completed: true },
//       task3: { completed: true }
//     },
//   },
//   Abubakr: {
//     tasks: {
//       task1: { completed: true },
//       task2: { completed: true },
//       task3: { completed: true }
//     },
//   },
//   xasanxon: {
//     tasks: {
//       task1: { completed: true },
//       task2: { completed: true },
//       task3: { completed: true },
//        task4: { completed: true }
//     }
//   },
// }



// function getdata(data) {
//   let result = {};
//   for (let key in data) {
//     let obj = data[key].tasks;
//     let count = 0;
//     for (let key2 in obj) {
//       if (obj[key2].completed) count++
//     }
//     if (count >= 2) result[key] = count;
//   }
//   console.log(result);

// }
// getdata(input)

  let arr = [5,2,9,8,1,4];

function isom(postak) {
return postak.filter((postak)=> postak % 2 === 0).sort((a,b) => a - b)
}
console.log(isom(arr));


