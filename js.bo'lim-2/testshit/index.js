
// let str= "Oxford va algoritm 2026."   

// let str = "Oxford va algoritm 2026.";

// let harf = "";
// let raqam = "";
// let belgi = "";

// for (let i = 0; i < str.length; i++) {
//   let c = str[i];

//   if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {
//     harf += c;

//   } else if (c >= "0" && c <= "9") {
//     raqam += c;
//   } else {
//     belgi += c;
//   }
// }

// console.log(harf);   
// console.log(raqam);
// console.log(belgi
// let arr = [1,2,3,4,5,6,7,8,9] 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arr[i] = arr[i] * arr[i]; // juft sonni o'ziga ko'paytirish
//   } else {
//     arr[i] = Math.sqrt(arr[i]); // toq sonning kvadrat ildizi
//   }
// }

// console.log(arr);
let check = {
  frontend: {
    1: { course: "react", price: 120 },
    2: { course: "vue", price: 110 },
    3: { course: "angular", price: 100 },
  },
  backend: {
    1: { course: "java", price: 120 },
    2: { course: "php", price: 110 },
    3: { course: "nodejs", price: 100 },
  },
  mobile: {
    android: {
      1: { course: "android", price: 120 },
      2: { course: "flutter", price: 110 },
    },
    ios: {
      1: { course: "ios", price: 120 },
      2: { course: "flutter", price: 110 },
    },
  },
};

function price(obj) {
  let summa = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if ("price" in obj[key]) {
        summa += obj[key].price;
      } else {
        summa += getTotalPrice(obj[key]);
      }
    }
  }

  return summa;
}

console.log(getTotalPrice(check)); 


// let arr = [1, true, "Oxford", null, 2026, "Algoritm", undefined]

// let newArr = arr.map((value) => {
//     if (typeof value === "string") {
        // return value.toLowerCase().slice(0, value.length - 1) + value.at(-1).toUpperCase()
//     } else {
//         return value
//     }
// })
// console.log(newArr);



let str = "men oxford o'quv markazida o'qiyman!";

// Stringni harflar massiviga aylantirish
let charArray = str.split('');

// Harflarni ASCII qiymati bo'yicha tartiblash
charArray.sort();

// Tartiblangan harflar massivini yana string holatiga qaytarish
let sortedStr = charArray.join('');

console.log("Asl string:", str);
console.log("ASCII bo'yicha tartiblangan string:", sortedStr);