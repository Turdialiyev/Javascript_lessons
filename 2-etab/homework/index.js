//pow - sonni darajaga oshirib beradi
// let a  =5;
// //1. **
// console.log(a ** 2);
// //2. Math.pow()
// console.log(Math.pow(a,2));

//sign
//1. -1
//2. 1
//3. 0

// let a = -10;
// let b = -7;
// let c = 5;
// let d = 0;
// console.log(Math.sign(a));
// console.log(Math.sign(b));
// console.log(Math.sign(c));
// console.log(Math.sign(d));


// sqrt, cbrt

//5 ** 2 = 25
//Math.pow(5, 2) = 25

// ildiz - darajani orqaga qaytarish.

// let raqam = 625;
// console.log(Math.sqrt(raqam));

// let raqam = 125;
// console.log(Math.cbrt(raqam));

//toString - ixtiyoriy qiymatni stringga aylantirib beradi.
// let n = 2026;
// let str = matchMedia.toString();
// console.log(str);
// console.log(typeof str);

// toFixed - sonning kasr qismini qisqartiradi va yaxlitlaydi
// let n = 10 / 3;
// console.log(+n.toFixed(1));

// let kasr = 1.44456;
// console.log(kasr.toFixed(2));

// isNaN - qiymatni raqan enasligini tekshiradi
// Not a Number
// //is Not a Number - bu raqam emasmi?
// let n = "oxford2026";
// console.log(isNaN(n));
// let a  = "";
// let b = "";
// for(let value of n ){ 
//     isNaN(value) ? (a += value) : (b += value);
// }
// console.log(a);
// console.log(b);



// // isFinite -  cheklanganmi
// let natija = 10 / 0;
// console.log(isFinite(natija));
// console.log(natija);

// //Object.is - 2 qiymatni bir biriga teng ekqnligini tekshiradi.
// console.log(Object.is(1,1));
// console.log(Object.is("1",1));
// console.log(Object.is(true, true));
// console.log(Object.is(null, null));
// console.log(Object.is(false, 0))

// ========================================================
// ========================================================
// =======================================================

// Math.pow(2, 5);
// Math.pow(3, 4);
// Math.pow(10, 2);
// Math.pow(7, 3);
// Math.pow(9, 2);

// Math.sign(-15);
// Math.sign(25);
// Math.sign(0);
// Math.sign(-1);
// Math.sign(100);

// Math.sqrt(16);
// Math.sqrt(671);
// Math.sqrt(44);
// Math.sqrt(2525);
// Math.sqrt(4040);

// Math.cbrt(8);
// Math.cbrt(22);
// Math.cbrt(67);
// Math.cbrt(69);
// Math.cbrt(111);


// (25).toString();
// (100).toString();
// (999).toString();
// (7).toString();
// (12345).toString();

// (12.3456).toFixed(2);
// (8.999).toFixed(1);
// (45.6789).toFixed(3);
// (100.5).toFixed(0);
// (3.14159).toFixed(4);


// isNaN("isomidddin");
// isNaN(50);
// isNaN("123");
// isNaN(undefined);
// isNaN(null);


// isFinite(100);
// isFinite(Infinity);
// isFinite("finite");
// isFinite(0);
// isFinite("50");

// Object.is(5, 5);
// Object.is(0, 10);
// Object.is(NaN, NaN);
// Object.is("5", 5);
// Object.is(true, false);

console.log("chiki chiki cheslom.")
