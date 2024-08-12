const user = {
    username: "Amrit",
    price: 999,

    // THIS KEYWORD REFERS TO THE CURRENT CONTEXT. 
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // HERE THIS WILL REFER TO THE USERNAME OF CURRENT CONTEXT.
        console.log(this);    // HERE THIS WILL REPRESENT THE GLOBAL CONTEXT, RETURNS THE WHOLE OBJECT.
    }

}

user.welcomeMessage()
user.username = "Heera"
user.welcomeMessage()

console.log(this);    // HERE IT WILL RETURN EMPTY OBJECT AS THERE IS NOTHING GLOBAL.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); 
// }

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()
// HERE IN BOTH FUNCTIONS IT WILL PRINT UNDEFINED, NOT WORKING OUTSIDE OBJECT.

// +++++++++++ ARROW FUNCTIONS +++++++++++++++

// DECLARATION OF FUNCTION.
const arrow =  () => {
    let username = "Amrit"
    console.log(this);
}

arrow()


const arrowExplicit = (num1, num2) => {
    return num1 + num2
}

console.log(arrowExplicit(4, 5)) // IN EXPLICIT WE HAVE TO MENTION THE RETURN KEYWORD.

// IN IMPLICIT IT IS NOT REQUIRED.
const arrowImplicit1 = (num1, num2) =>  num1 + num2
console.log(arrowImplicit1(15, 17))


const arrowImplicit2 = (num1, num2) =>  (num1 + num2)
console.log(arrowImplicit2(45,98))


const arrowImplicit3 = () =>  ({username: "Amrit",
price: 999})
console.log(arrowImplicit3())

// => IN ARROW FUNCTION THIS WILL REPRESENT AN EMPTY OBJECT BUT IN OTHER FUNCTIONS IT WILL RETURN SOME VALUES.