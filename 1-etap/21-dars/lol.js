let obj = { 
    ism: "postak",
    familiya: "saidrahmonov",
    yosh: 14,
};

//Static o'zgartirish
obj,ism = "abubakr";
obj,familiya = "turdialiyev",
obj,yosh = 13;
console.log(obj);

//dinamic o'zgartirish
obj["ism"] = "karam";
obj["familiya"] = "jorayeva";
obj["yosh"] = 14;
console.log(obj);

