// // // // const fruits = ["olma", "banan", "shaftoli"];
// // // // fruits.push("anor");
// // // //console,log(fruits)

// // // // const numbers = [10, 20, 30];
// // // // let son = 15;
// // // // numbers.push(son);

// // // // const colors = ["qizil", "yashil", "ko‘k", "sariq"];
// // // // colors.pop();
// // // // console.log(color);

// // // const products = ["telefon", "noutbook", "planshet"]
// // // let lastvalue = products.at(-1)
// // // products.pop();
// // // console.log(products);

// // // // const months = ["fevral", "mart", "aprel"];
// // // // months.unshift("yanvar");
// // // // console.log(months);

// // // // const ismvoylar = ["Ali", "Vali", "Hasan"];
// // // // const ism = "Jasur";
// // // // queue.unshift(ism);
// // // // console.log(ismvoylar);

// // // // const tasks = ["uyg‘onish", "nonushta", "ishga borish"];
// // // // tasks.shift();
// // // // console.log(task);

// // // // const odam = ["Aziz", "Dilshod", "Madina"];
// // // // const odamlar= users.shift();
// // // // console.log(odamlar);
// // // // console.log(odam);

// // // // const number = [5, 10, 15, 20];
// // // // numbers2.splice(2, 1);
// // // // console.log(number);

// // // // const cities = ["Toshkent", "Samarqand", "Buxoro", "Xiva"];
// // // // let index = cities.indexOf("Samarqand");
// // // // cities.splice(index, 1);
// // // // console.log(cities);

// // // // const animals = ["mushuk", "it", "quyon", "ot", "sigir"];
// // // // console.log(animals.length);

// // // // const scores = [12, 25, 48, 91, 17, 63];
// // // // console.log(scores[scores.length - 1]);

// // // // const letters = ["a", "b", "c", "d", "e"];
// // // // console.log(letters.at(-1));




























// // // const numbers = [3, 8, 11, 14, 17, 20, 25, 30];
// // // 
// // //const evenNumbers = numbers.filter(number => number % 2 == 0);
// // //
// // // console.log(evenNumbers);

// // // const words = ["olma", "shaftoli", "anor", "banan", "uzum", "tarvuz"];
// // // const longword = words.filter(word => word.length > 5);
// // // console.log(Word);


// // // const numbers2 = [-10, 15, 0, -3, 22, 7, -8];
// // // const Number = numbers1.filter(number => number > 0);
// // // console.log(Number);


// // // const products = [
// // //   { name: "Daftar", price: 25 },
// // //   { name: "Qalam", price: 10 },
// // //   { name: "Sumka", price: 180 },
// // //   { name: "Kitob", price: 120 },
// // //   { name: "O‘chirg‘ich", price: 8 }
// // // ];
// // // const expensiveProducts = products.filter(product => {
// // //   if (product.price > 100) {
// // //     return true;  
// // //   } 
// // //else {
// // //     return false; 
// // //   }
// // // });
// // // console.log(expensiveProducts);


// // // const users = [
// // //   { id: 1, name: "Ali", isActive: true },
// // //   { id: 2, name: "Vali", isActive: false },
// // //   { id: 3, name: "Sardor", isActive: true },
// // //   { id: 4, name: "Madina", isActive: false }
// // // ];

// // // const activeUsers = users.filter(user => {
// // //   if (user,isActive == true) {
// // //    
// // // return true;
// // //   } 
// // //else {
// // //  
// // //   return false;
// // //   }
// // // });

// // // console.log(activeUsers);












// // ==========================================================

// // let nums = [-5, -2, 0, 7, 10];
// // let index = nums.find((n, i, a)=> n > 0)
// // console.log(index);

// // let words = ["olma", "banan", "shaftoli", "anor"];
// // let text = words.find((v, i, a)=> v.length > 5)
// // console.log(text);
























// //======================================================


// // let nums = [5, 12, 8, 20, 1];
// // let kilo = nums.every((nums => nums > 0))
// // console.log(kilo);


// // let names = ["Aliya", "Jasur", "Bekzod", "Malika"];
// // let kiram = names.every((names => names.length > 4))
// // console.log(kiram);

// // let nums = [3, 7, 11, 18, 25];
// // let koooooram = nums.some((names => names % 2 === 0))
// // console.log( koooooram );


// // let names = ["Jasur", "Bekzod", "Ali", "Sardor"];
// // let koram= names.some((names => names.startsWith("A"))
// // console.log(koram);


// // let arr = [[1, 2], [3, 4], [5, 6]];
// // let karam = arr.flat()
// // console.log(karam);


// // let arr = [1, [2, [3, 4]], 5];
// // let cheslom= arr.flat(Infinity)
// // console.log(cheslom);


// // let nums = [1, 2, 3]
// // let isom = nums.flatMap((nums => [nums, nums *2]))
// // console.log(isom);


// // let words = ["hi", "js"];
// // let posak= words.flatMap(word => word.split(""));
// // console.log(posak);

















// const arr = new Array(10).fill(0);
// const result = arr.fill(100, 3, 7);
// ============================================================
// const arr = new Array(15).fill("Empty");
// const result = arr.fill("Booked", 0, 5);
// =============================================================
// const arr = [10, 20, 30, 40, 50, 60];
// const result = arr.copyWithin(4, 0, 2);
// ==============================================================
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.copyWithin(4, 1, 4);

// ==============================================================

// const products = [
//   { name: "Book", price: 120 },
//   { name: "Pen", price: 30 },
//   { name: "Bag", price: 250 },
//   { name: "Notebook", price: 80 }
// ];
// const totalPrice = products.reduce((sum, item) => sum + item.price, 0);
// ====================================================================
// const values = [
//   [1, 2],
//   "JavaScript",
//   50,
//   ["HTML", "CSS"],
//   {},
//   true
// ];
// const arrays = values.filter(Array.isArray);
// =============================================================
// const values = [
//   [1],
//   100,
//   "Hello",
//   [],
//   false,
//   { id: 1 }
// ];
// const result = values.filter(item => !Array.isArray(item));
// ==============================================================
// const text = "Frontend";
// const chars = Array.from(text);
// ==================================================================


// const result1 = Array.of(5, 10, 15, 20);
// =====================================================================
// const result2 = Array.of("HTML", "CSS", "JavaScript", "React");