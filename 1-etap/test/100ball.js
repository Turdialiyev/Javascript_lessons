let obj5 = {
    id: 1,
    ism: "ali",
    familya: "valiyev",
    yosh: 20,
    manzil: "namangan"
}


let obj2 = structuredClone(obj);

obj2.id = 2;
obj2.ism = "vali";
obj2.familya = "aliyev";
obj2.yosh = 21;
obj2.manzil = "fargona";

console.log(obj);
console.log(obj2);


let obj3 = structuredClone(obj2)

obj3.id = 2;
obj3.ism = "eshmat",
obj3.familya = "toshmatov",
obj3.yosh = 22;
obj3.manzil = "andijon"



let ball = 76;

if ( ball >= 0 &&  ball <= 59) { 
    console.log("musr yiqildi");}

    else if( ball >= 60 && ball <= 70) { 
        console.log("yomonnn ortacha");
    }

    else if(ball >= 71 && ball <= 80) { 
        console.log(" yaxshi");
    }
    else if(ball >= 81 && ball <= 90) { 
        console.log(" a'lo")
    }
    else if(ball >= 91 && ball <= 100) { 
        console.log("zo'rr");

    }
    else {
        console.log("baling xatooooo");}





let postakisom1 = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        postakisom1 += i;
    }
}

console.log(postakisom1);





let i = 1;
let isom2 = 0;

while (i <= 10) {
    if (i % 2 != 0) {
        isom2 += i;
    }
    i++;
}

console.log(isom2);




let pp = 1;
let isom3 = 0;

do {
    if (j % 2 != 0) {
        isom3 += pp;
    }
    pp++;
} while (pp <= 10);
console.log(isom3)





let isom = Number(prompt("soni krit"))

if ( isom % 2 === 0) { 
    alert("bu juft son")
}

else if(isom % 2 === 1) { 
    alert("bu katta son")
}
else { 
    alert("bu son juft sonnn")
}





let obj = { 
    id: 1,
    name: "anor",
    narx: 5000
};

for (let key in obj) { 
    
    if (key === "narx") { 
        
        obj[key] = obj[key] * (1 - 15 / 100);
    }
}

console.log(obj);


