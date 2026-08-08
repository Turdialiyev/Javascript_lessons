// let str = "Men oxford Markazida o'qiyman."
// console.log(str.split(" ").length);


//2-savol arrayni o'zini o'ziga copy qilib birlashtirganizda 
//shu xolatga kelib olishi kerak
// let arr = [1,2,3,4,5,6,7,8,9]
//[7,8,9,7,8,9]
//  arr = arr.slice(-3).concat(arr.slice(-3))
// console.log(arr);

//3-savol: Shu matnda Kosonsoy so'zi bor bolsa shuni o'zini matndan ajratib 
//consolelog ga chiqarib koring
// let matn = "oxford - bu Kosonsoy markazidan joylashgan!"
// let bormi = matn.includes("kosonsoy")
// if (bormi){ 
//     let i = matn.indexOf("K")
//     let nusxaMatn = matn.slice(i,i + 8)
//     console.log(nusxaMatn);
// }

//4-savol: textni teskarisiga qaytarib bering?
// let text = "oxford o'quv markazi!"

// let togri = text.split("").reverse().join("")
// console.log(togri);

//5-savol:
// let meva = "banana";
// let obj = {};

// for (let value of meva){
//     obj[value] ? (obj[value] += 1) : (obj[value] = 1);
// };
// console.log(obj);

// // {
// "B":1,
// "a":3,
// "n": 2
// }

//6-savol Arrayni shunangi kesib olingki, natijada 2ta array
//quyidagi ko'rinishda bo'lib qolishi kerak.
//asl_data = ["nok", "Anor", "tarvuz"];
//kesilgan_data ["olma", "Apelsin"]
let data = ["olma", "nok", "apelsin", "Anor"];
data.push("Tarvuz")
let a = data.splice(0,1)
let b = data.splice(1,1)
let kesilgan_data = a.concat(b);

console.log(data);
console.log(kesilgan_data);
