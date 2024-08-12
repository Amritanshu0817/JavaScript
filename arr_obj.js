//+++++++++++++++++++++++++ ARRAY ++++++++++++++++++++++++++++++++++++++++++

const { name } = require("ejs")
const { use } = require("express/lib/router")

// MORE THAT ONE DATA TYPE CAN BE STORED IN ARRAY IN JS

// const arr = [1,2,3,4,5,6,7]

// // console.log(arr)

// const arr2 = arr
// arr2.push(17)
// // console.log(arr2)
// // console.log(arr)     // array is mutable in js and it passes by reference

// const arr3 = [10, 20, 30, 40, 50, 60]

// const arrFinal = arr.concat(arr3)    // if we want to concat 2 arrays then the 2nd array will simply concat with the 1st one.
// console.log(typeof arrFinal)   // its type will be object

//+++++++++++++++++++++++ OBJECTS +++++++++++++++++++++++++++++++++++++++++

// OBJECT STORES KEY-VALUE PAIRS CAN STORE DATA OR FUNCTIONS

const user = {
    name: "Amritanshu",
    "full name" : "Amritanshu Shekhar",
    age : 22,
    Id : 1224,
    email : "asamrit995",
    location : ["Gurugram", "Delhi", "Noida"]
}

console.log(user)
console.log(user.Id)
console.log(user["full name"])   // we can use either dot operator or curly sqr. braces for access
user.email = "asamrit995@google.com"  // simply we can update

user.greetings = function(){     // we can directly add functions to the object
    console.log("Hello World")
}

user.greetiTwo = function(){
    console.log(`Hello Mr ${this.name} Welcome to the portal`)   // using this for the refernce in object
}

console.log(user.greetings())
console.log(user.greetiTwo())

// Object.freeze(user)       // we can freeze our object and it won't be updated further

const user2 = {
    name: "Asmamal",
    Id: 14546,
    email: "kuchbhi@koibhi.com",
    address : {
        House: 14,
        Street : "koi sa bhi",
        Sector : 41,
        City : "Gurugram"
    }
}

const allUsers = Object.assign(user, user2)   // add two objects 
console.log(allUsers)  // type will be object only
console.log(user)

/* NOTE:-
=> If there is any key which is repeated in both the objects then,
   its value will get updated according to the 2nd object value of that key.

=> If we freeze any of the objects then it wont be assigned with any other object.

=> When we are concatinating then the next obj will simply concat with the first obj.It is also applicable in arrays as well.*/

