function myFunction(num1, num2){
    let sum = num1 + num2
    return sum
}

console.log(myFunction(10, 65))

function objFunction(anyObject){
    console.log(anyObject.username)
}

const object = {
    username:"Amritanshu"
}
//objFunction(object)

objFunction({
    username: "Amrit"    // either we can pass any obj or can create one
})

function loginMsg(userobj){
    console.log(`${userobj.username} have just logged in and it's id is: ${userobj.id}`)
}

loginMsg(object) // if any value is not present then it will simply print undefined

function addCartItem(...values){      // ... is rest operator is used when there is more arguments than parameters and it will store all the arguments in an array
    console.log(values)
}

addCartItem(100, 400, 600, 500, 700)  // there is no limit of items we can add in shopping cart so  rest operator(...) wil be used here to store the items in an array