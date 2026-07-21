// logical operator , mantiqiy operatorlar  || , && , ! , ?? ,

// 1. || ,OR , yoki
// 2. && ,And , va
// 3. ! , Not , inkor
// 4. ?? , Nullish , nullish

// yoki (||) - berilgan qiymatlar ichidan true qiymatni qidiradi

// va (&&) - berilgan qiymatlae ichidan true qiymatini qidiradi.

// inkor(!) - berilgan qiymatni teskarisiga o'girib beradi.(true ni , false ,false ni true qilib beradi )

// nullish(??) - bu faqat null va underfined ni false deb biladi, bu ham true qiymat qidiradi




// console.log(true || false);
// console.log(false || true);

// console.log(true || true);
// console.log(false || false);

// console.log(false || 0 || null || undefined || 1 || true);
// console.log(0 || undefined || "" || false || "0" || true || 1);



// falsy 
// (1) false
// (2) 0
// (3)""
// (4)null 
// (5)undefined


// console.log(1 && 0 && false && true && null);
// console.log(1 && true && "." && 100);


// console.log(!true); //false
// console.log(!false); //true
// console.log(!1); //false
// console.log(!0); //true




// console.log(false ?? true);
// console.log(0 ?? 1);
// console.log(null ?? undefined ?? false);
// console.log(undefined ?? null ?? true ?? 0);
// console.log(false ?? 0 ?? true ?? null ?? undefined);
// console.log(undefined ?? null ?? "to'g'ri " ?? null);



// console.log(null || (!0 && (true ?? false)) || ("topdi" && true));
// console.log((true ?? undefined) || (0 && false && true) || 1);
// console.log((!false ?? null) || 1 || (0 && true) || ".");



// console.log("salom" || "xayr");
// console.log("" || "salom");
// console.log(null || "kitob");
// console.log(undefined || "daftar");
// console.log("non" || "suv");
// console.log("" || "" || "choy");
// console.log(false || "ha");
// console.log(0 || "bor");
// console.log(null || undefined || "topildi");
// console.log("olma" || "anor");
// console.log("" || "banan");
// console.log(null || "Ali");
// console.log(undefined || "yozuv");
// console.log("haqiqat" || false);
// console.log(false || false || "rost");
// console.log("" || 0 || null || "oxiri");
// console.log("bir" || "" || "ikki");
// console.log(0 || 0 || "uch");
// console.log(false || "to'g'ri");
// console.log("" || "yakun");






// console.log("salom" && "xayr");
// console.log("ha" && "");
// console.log("non" && "suv");
// console.log("" && "kitob");
// console.log("bor" && "yo'q");
// console.log("A" && "B" && "C");
// console.log("A" && "" && "C");
// console.log("olma" && null);
// console.log("anor" && undefined);
// console.log("bir" && "ikki" && "uch");
// console.log("Ali" && "mavjud");
// console.log("" && "mavjud");
// console.log("to'g'ri" && "rost");
// console.log("" && "");
// console.log("ha" && false);
// console.log(true && "bor");
// console.log("bor" && true);
// console.log("narsa" && 0);
// console.log("matn" && "yakun");
// console.log("oxiri" && null);




// console.log(!"salom");
// console.log(!"");
// console.log(!"kitob");
// console.log(!"0");
// console.log(!"yo'q");
// console.log(!"ha");
// console.log(!null);
// console.log(!undefined);
// console.log(!("salom"));
// console.log(!(""));
// console.log(!"Ali");
// console.log(!false);
// console.log(!true);
// console.log(!(true));
// console.log(!(false));
// console.log(!("bor"));
// console.log(!(""));
// console.log(!(0));
// console.log(!(100));




// console.log(null ?? "salom");
// console.log(undefined ?? "xayr");
// console.log("matn" ?? "boshqa");
// console.log("" ?? "yozuv");
// console.log(0 ?? "son");
// console.log(false ?? "ha");
// console.log(null ?? "topildi");
// console.log(undefined ?? "bor");
// console.log(null ?? undefined ?? "oxiri");
// console.log(undefined ?? null ?? "yakun");
// console.log(null ?? "Ali");
// console.log(undefined ?? "so'z");
// console.log("" ?? "default");
// console.log(0 ?? 10);
// console.log(null ?? "" ?? "zaxira");
// console.log(undefined ?? 0 ?? "variant");
// console.log(null ?? undefined ?? false);
// console.log(false ?? null);
// console.log(0 ?? null);
// console.log(undefined ?? "alesa"); 