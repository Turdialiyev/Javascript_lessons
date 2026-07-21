// // number -2**53... 2**53
// let raqam1 = 10;
// let raqam2 = "20";

// console.log(typeof raqam1);
// console.log(typeof raqam2);

// let num = "100.5";
// //1. parseInt()
// console.log(parent(num));
// //2.parseFloat()
// console.log(parseFloat(Num));
// //3. number()
// console.log(Number(num));
// //4. + 
// console.log(+num);


// // parsing jarayoni deyiladi
// //int - butun son - integer - 1, 2, 3, 4
// //float - kasr son - 1.12323223 
// //isinteger() - is integer? - butun sonmi

// //boolean type dagi qiymat qaytaradi: true || false

// let a = 5.5;
// let b = 7;
// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b)); 

//1-1
//2-10
//3-11
//4-100
//5-101
//6-110
//7-111
//8-1000


// let a = 1000; // decimal
// let i =  a.toString(i,2); //binary
// console.log(i);


//Math methods -----------------------

//abs
// let a = 10;
// let b = -7;
// let c = -100;
// let d = 0;
// console.log(Math.abs(a));
// console.log(Math.abs(b));
// console.log(Math.abs(c));
// console.log(Math.abs(d));

//floor - kasr sonni pastga qarab yaxlitlab beradi.
// let a = 1.3;
// let b = 1.7;
// let c = 1.5;
// let d = 1.9;
// let e = 1.999999
// let f = 1.000001;
// console.log(Math.floor(a));
// console.log(Math.floor(b));
// console.log(Math.floor(c));
// console.log(Math.floor(d));
// console.log(Math.floor(e));
// console.log(Math.floor(f));



//ceil - kasr sonni tepaga qarab yaxlitlab beradi

// let a = 1.3;
// let b = 1.7;
// let c = 1.5;
// let d = 1.9;
// let e = 1.999999
// let f = 1.000001;
// console.log(Math.ceil(a));
// console.log(Math.ceil(b));
// console.log(Math.ceil(c));
// console.log(Math.ceil(d));
// console.log(Math.ceil(e));
// console.log(Math.ceil(f));


//round
// let a = 7.1;
// let b = 7.4;
// let c = 7.5;
// let d = 7.9;
// let e = 7.0001;
// let f = 7.9999;
// console.log(Math.round(a));
// console.log(Math.round(b));
// console.log(Math.round(c));
// console.log(Math.round(d));
// console.log(Math.round(e));
// console.log(Math.round(f));



//trunc - kasr sonnni faqat butun qismini olib beradi.
// let a = -2.3;
// let b = 2.7;
// console.log(Math.trunc(a));
// console.log(Math.trunc(b));
// console.log(Math.trunc(a));
// console.log(Math.trunc(b));

//random - 0 va 1 orasidagi tasodifiy kasr sonni chiqaradi.
// let tasodif = Math.random();
// console.log(Math.trunc(tasodif * 10));

// 0 va X
// 0 va 10

//min, max
// let kichik = Math.min(6, 10, 16, 18, 32, 1);
// let katta = Math.max(6, 10, 16, 18, 32, 1);
// console.log(kichik);
// console.log(katta);

//1. +998 99 111 22 33

//2. 99, 91, 90, 93, 94, 50, 33, 77, 78

// function getPhoneNumber(){ 
//     let code1 = Math.trunc(Math.random() * 10)
//     let code2 = Math.trunc(Math.random() * 10)

//     let code = `${code1}${code2}`
//     if(
//         code != "99" &&
//         code != "91" &&
//         code != "90" &&
//         code != "93" &&
//         code != "94" &&
//         code != "50" &&
//         code != "33" &&
//         code != "77" &&
//         code != "78" 
//     ){
//         return getPhoneNumber();
//     }
//     let a = Math.trunc(Math.random() * 10)
//     let b = Math.trunc(Math.random() * 10)
//     let c = Math.trunc(Math.random() * 10)

//      let d = Math.trunc(Math.random() * 10)
//      let e = Math.trunc(Math.random() * 10)

//     let f = Math.trunc(Math.random() * 10)
//     let g = Math.trunc(Math.random() * 10)

//     return `+998 ${code} ${a}${b}${c}${d}${e}${f}${g}`
// }

// console.log(getPhoneNumber());

// =============================================================================

// let a = "13";
// console.log(parseInt(a));

// let b = "27";
// console.log(parseInt(b));

// let c = "34";
// console.log(parseInt(c));

// let d = "48";
// console.log(parseInt(d));

// let e = "59";
// console.log(parseInt(e));

// let f = "62";
// console.log(parseInt(f));

// let g = "75";
// console.log(parseInt(g));

// let h = "86";
// console.log(parseInt(h));

// let i = "91";
// console.log(parseInt(i));

// let j = "123";
// console.log(parseInt(j));



// let a = "12.5";
// console.log(parseFloat(a));

// let b = "23.7";
// console.log(parseFloat(b));

// let c = "34.1";
// console.log(parseFloat(c));

// let d = "45.8";
// console.log(parseFloat(d));

// let e = "56.3";
// console.log(parseFloat(e));

// let f = "67.9";
// console.log(parseFloat(f));

// let g = "78.2";
// console.log(parseFloat(g));

// let h = "89.4";
// console.log(parseFloat(h));

// let i = "90.6";
// console.log(parseFloat(i));

// let j = "101.5";
// console.log(parseFloat(j));




// let a = "11";
// console.log(Number(a));

// let b = "22";
// console.log(Number(b));

// let c = "33";
// console.log(Number(c));

// let d = "44";
// console.log(Number(d));

// let e = "55";
// console.log(Number(e));

// let f = "66";
// console.log(Number(f));

// let g = "77";
// console.log(Number(g));

// let h = "88";
// console.log(Number(h));

// let i = "99";
// console.log(Number(i));

// let j = "111";
// console.log(Number(j));




// let a = "14";
// console.log(+a);

// let b = "28";
// console.log(+b);

// let c = "35";
// console.log(+c);

// let d = "49";
// console.log(+d);

// let e = "63";
// console.log(+e);

// let f = "77";
// console.log(+f);

// let g = "84";
// console.log(+g);

// let h = "95";
// console.log(+h);

// let i = "106";
// console.log(+i);

// let j = "117";
// console.log(+j);


// console.log(Number.isInteger(10));
// console.log(Number.isInteger(15.5));
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(25.7));
// console.log(Number.isInteger(30));
// console.log(Number.isInteger(35.2));
// console.log(Number.isInteger(40));
// console.log(Number.isInteger(45.8));
// console.log(Number.isInteger(50));
// console.log(Number.isInteger(55.1));











// console.log(Math.abs(-12));
// console.log(Math.abs(-25));
// console.log(Math.abs(-37));
// console.log(Math.abs(-49));
// console.log(Math.abs(-58));
// console.log(Math.abs(-61));
// console.log(Math.abs(-73));
// console.log(Math.abs(-84));
// console.log(Math.abs(-96));
// console.log(Math.abs(-105));


// console.log(Math.floor(12.9));
// console.log(Math.floor(23.8));
// console.log(Math.floor(34.7));
// console.log(Math.floor(45.6));
// console.log(Math.floor(56.5));
// console.log(Math.floor(67.4));
// console.log(Math.floor(78.3));
// console.log(Math.floor(89.2));
// console.log(Math.floor(90.1));
// console.log(Math.floor(101.9));



// console.log(Math.ceil(12.1));
// console.log(Math.ceil(23.2));
// console.log(Math.ceil(34.3));
// console.log(Math.ceil(45.4));
// console.log(Math.ceil(56.5));
// console.log(Math.ceil(67.6));
// console.log(Math.ceil(78.7));
// console.log(Math.ceil(89.8));
// console.log(Math.ceil(90.9));
// console.log(Math.ceil(101.1));


// console.log(Math.round(12.4));
// console.log(Math.round(23.5));
// console.log(Math.round(34.6));
// console.log(Math.round(45.2));
// console.log(Math.round(56.8));
// console.log(Math.round(67.1));
// console.log(Math.round(78.5));
// console.log(Math.round(89.9));
// console.log(Math.round(90.3));
// console.log(Math.round(101.7));



// console.log(Math.trunc(12.9));
// console.log(Math.trunc(23.8));
// console.log(Math.trunc(34.7));
// console.log(Math.trunc(45.6));
// console.log(Math.trunc(56.5));
// console.log(Math.trunc(67.4));
// console.log(Math.trunc(78.3));
// console.log(Math.trunc(89.2));
// console.log(Math.trunc(90.1));
// console.log(Math.trunc(101.9));



// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());


// console.log(Math.min(13, 25));
// console.log(Math.min(45, 18));
// console.log(Math.min(72, 91));
// console.log(Math.min(34, 56));
// console.log(Math.min(88, 12));
// console.log(Math.min(67, 73));
// console.log(Math.min(99, 100));
// console.log(Math.min(41, 40));
// console.log(Math.min(250, 125));
// console.log(Math.min(78, 79));



// console.log(Math.max(13, 25));
// console.log(Math.max(45, 18));
// console.log(Math.max(72, 91));
// console.log(Math.max(34, 56));
// console.log(Math.max(88, 12));
// console.log(Math.max(67, 73));
// console.log(Math.max(99, 100));
// console.log(Math.max(41, 40));
// console.log(Math.max(250, 125));
// console.log(Math.max(78, 79));




let a = 100;
let b = -100;
let c = 5;

let engkattasi = Math.max(a,b,c)

let engkichigi = Math.min(a,b,c)


console.log(engkattasi);
console.log(engkichigi);
console.log(ortacha);
