// let obj = { 
//     name: "kosonsoy",
//     status: "tuman",
//     child: { 
//         city: ["qizilbayroq", "obod", "guliston", "sabxoz", "gulobod"],
//     }
// }

// const { name, status, child:{city} } = obj;

// console.log(name);
// console.log(status);
// console.log(city);



let parent = {
    name: "eshmat",
    age: 50,
    child: {
        name: "toshmat",
        age: 25,
    }
}

const { name, age, child: { name: name2, age: age2 } } = parent;

console.log(name, age);
console.log(name2, age2);



