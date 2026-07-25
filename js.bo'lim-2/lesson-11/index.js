// //filter(), find(), findindex(), findindex()

// let arr = [1,10,1,7,41,20,28,-5]
// let newArr = arr.filter((value) =>{ 
//     if(value % 2 === 0)
//         return value;
// })
// console.log(newArr);

// let newArr = Arr.filter((value) => { 
//     if (value > 9 && value < 100) { 
//         return value;
//     }
// })


// console.log(newArr);


// let newArr = Arr.filter((value)=> { 
//     if (value <= 9 && >= -9){ 
//         return value;
//     }
// })
// console.log(newArr);


let data = [ 
    { id:1, ism: "Abubakr", yosh:22},
    { id:2, ism: "Ikromxon", yosh:22},
    {id:3, ism: "olimjon", yosh:3},
    {id:4, ism: "hasanxon", yosh:5},
    {id:5, ism: "mustafo", yosh:3},
    {id:6, ism: "eshmat", yosh:4},
    {id:7, ism: "murodxon", yosh:3},
];

// let newData = data.filter((obj) => obj.yosh >= 15)
// let newdata = data.filter((obj) =>{ 
//     if (obj.yosh >=15 && obj.ism.length >=7){ 
//         return obj;
//     }
// })
// console.log(newData);

      

// let newData = data.filter((obj)=> { 
//     if(obj.ism.length % 2 === 1){ 
//         return obj;
//     }
// })
// console.log(newData)

let newData = data.map ((obj) => { 
    if(obj.yosh %  2 === 1){ 
        obj.status = true
    }
    else{ 
        obj.status = false
    }return obj;
})
console.log(newData);

