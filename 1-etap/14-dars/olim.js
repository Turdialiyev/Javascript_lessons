// 1. 1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.


// for(let raqam = 1; raqam <= 10; raqam++) { 
//     console.log(raqam);
    
// }

// 2. 1 dan 100 gacha bo‘lgan sonlar yig‘indisini toping.

// let yigindi = 0;

// for(let raqam = 1; raqam <= 100; raqam++) { 
//     console.log(raqam);
//     yigindi += raqam;
// }
// console.log(yigindi);


// 3. 1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.

// for(let raqam = 1; raqam<=50; raqam++) {
//     if( raqam % 2 === 0)
//         console.log(raqam);
        
    
// }

// let yigindi = 0;

// for(let raqam = -10; raqam <= 11; raqam++) { 
//     yigindi += raqam; 
// }
// console.log(yigindi);

// 4. 1 dan 50 gacha bo‘lgan toq sonlarni chiqaring.


// for(let raqam = 1; raqam<=50; raqam++) {
//     if( raqam % 2 === 1)
//         console.log(raqam);
        
// }

// 5. 1 dan N gacha bo‘lgan sonlarning kvadratlarini chiqaring (N raqam prompt dan olinadi).

// let n1 = numberprompt("n harini kirit")
// for(let i = 1; i <= n1; i++) { 
//     console.log(i * i);
    
// }
// 6. 1 dan N gacha bo‘lgan sonlar ichida 3 ga bo‘linadiganlarini chiqaring.

// 7. prompt dan berilgan N sonigacha bo‘lgan sonlar ko‘paytmasini hisoblang.

// 8. 1 dan 100 gacha bo‘lgan sonlar ichida 5 ga ham, 7 ga ham bo‘linadigan sonlarni chiqaring.

// 9. 10 dan 1 gacha bo‘lgan sonlarni teskari tartibda chiqaring.

// 10. 1 dan berilgan N sonigacha bo‘lgan sonlarni faqat toq larini yig'indisini hisoblang. (N soni prompt dan kiritiladi.)

// 11. 1 dan N gacha bo‘lgan sonlar ichida nechta juft son borligini aniqlang. (N soni prompt dan kiritiladi.)

// 12. Berilgan N sonigacha bo‘lgan sonlar ichida maksimal sonni toping (faqat for orqali).

// 13. 1 dan 20 gacha bo‘lgan sonlar ichida 4 ga bo‘linadigan sonlarni nechta ekanligini toping.

// 14. 1 dan N gacha bo‘lgan sonlar ichida 10 dan katta bo‘lganlarini chiqaring.

// 15. Foydalanuvchi prompt dan kiritgan N soni uchun ko‘paytirish jadvalini chiqaring.

// a a a a a a a a a a a a a a aa a a aa a      a a a a a a a a a aa a a a a a a a aa a a a a a a a a  a a a a a aa a  a a a a a a a a a a a aa a a a
















// 1
// for (let raqam = 1; raqam <= 15; raqam++){
//     console.log(raqam);
    
// }

// 2
// yigindi = 0;
// for (let raqam = 1; raqam <= 200; raqam++){
//     yigindi += raqam;{
//         console.log(yigindi);
//     }
// }

// 3
// for (let raqam = 1; raqam <= 60; raqam++){
//     if(raqam % 2 === 0){
//         console.log(raqam);
//     }
// }

// 4
// for (let raqam = 1; raqam <= 60; raqam++){
//     if(raqam % 2 === 1){
//         console.log(raqam);
//     }
// }

// 5
// let N = Number(prompt("N ni kiriting")); {
// for (let raqam = 1; raqam <= N; raqam++){
//     console.log(raqam * raqam * raqam)
// }
// }

// 6
// let n = Number(prompt("N ni kiriting"));{
// for (let raqam = 1; raqam <= n; raqam++){
//     if(raqam % 4 === 0){
//         console.log(raqam); 
//     }
// }
// }

// 7
// let yigindi = 0;
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         yigindi += raqam;
//     }
//     console.log(yigindi);
// }

// 8
// for (let raqam = 1; raqam <= 150; raqam++){
//     if(raqam % 3 === 0 && raqam % 5 === 0){
//         console.log(raqam);   
//     }
// }

// 9
// for (let raqam = 20; raqam>=1; raqam--){
//     console.log(raqam);
// }

// 10
// let yigindi = 0;
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         if(raqam % 2 === 0){
//             yigindi += raqam;
//         }
//     }
//     console.log(yigindi);
// }

// 11
// let countToq = 0;
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         if(raqam % 2 === 1){
//             countToq++;
//         }
//     }
//     console.log(countToq);
// }

// 12
// let min = 1;
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         if(raqam < min){
//             min = raqam;
//         }
//     }
//     console.log(min);
// }

// 13
// let count3 = 0;
// for(let raqam = 1; raqam <= 30; raqam++){
//     if(raqam % 3 === 0){
//         count3++;
//     }
// }
// console.log(count3);

// 14
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         if(raqam < 20){
//             console.log(raqam);
//         }
//     }
// }

// 15
// let N = Number(prompt("N ni kiriting"));{
//     for(let i = 1; i <= 10; i++){
//         console.log(N + "+" + i + "=" + (N + i));
//     }
// }

// 16
// for(let raqam = 1; raqam <= 100; raqam++){
//     if(raqam % 9 === 0){
//         console.log(raqam);
//     }
// }

// 17
// let nege = 0;
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         if(raqam % 2 === 1){
//             maxToq = raqam;
//         }
//     }
//     console.log(maxToq);
// }

// 18
// for(let raqam = 1; raqam <= 40; raqam++){
//     if(raqam % 6 !== 0){
//         console.log(raqam);
//     }
// }

// 19
// let count23 = 0;
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         if(raqam % 2 === 0 && raqam % 3 === 0){
//             count23++;
//         }
//     }
//     console.log(count23);
// }

// 20
// let yigindi5 = 0;
// let N = Number(prompt("N ni kiriting"));{
//     for(let raqam = 1; raqam <= N; raqam++){
//         if(raqam % 5 === 0){
//             yigindi5 += raqam;
//         }
//     }
//     console.log(yigindi5);
// }


