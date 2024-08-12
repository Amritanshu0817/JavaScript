let a = 10;
const b = 15;

// SCOPE OF LET AND CONST IN IN LOCAL AND GLOBAL BUT VAR IS A GLOBAL ONE

if(true){
    let a = 15;
    const b = 20;
    const d = 400; 
    var c = 30;
    console.log("Inner " + a)
    console.log("Inner " + b)

    // SCOPE OF THE A,B AND D WILL END HERE 
}

console.log(a);
// console.log(d); // IT WILL THROW THE ERROR 
console.log(c); // IT WILL EXECUTE AND ITS VALUE CAN BE UPDATED AS WELL;
c = 52;
console.log(c);


// SCOPE OF THE FUNCTIONS
function one(){
    const username = "AMRIT"

    function two(){
        const lang = "JAVASCRIPT"
        console.log(username);
    }
    // console.log(lang);  // IT WILL THROW ERROR, CANT BE ACCESSED OUTSIDE ITS SCOPE

     two()

}

one();


console.log(addone(5))

function addone(num){
    return num + 1
}
// NORMAL FUNCTIONS CAN BE DECLARED AND CALLED IN ANY ORDER


addTwo(5)
const addTwo = function(num){
    return num + 2
}

// SUCH TYPE OF FUNCTIONS CAN'T BE CALLED BEFORE INITALIZATION(DECLARATION)