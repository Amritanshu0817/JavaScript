// SUPPOSE THERE ARE 5 ITEMS IN A SHOPPING CART AND WE HAVE TO ADD THE TOTAL PRICE.
// WE CAN ADD THE VALUE OF ITEMS WITH THE PREVIOUS ONE LIKE (ITEM1 + ITEM2) + ITEM3 AND SO ON...
// REDUCE METHOD IS USED IN SUCH CONDITIONS, IT WILL USE CALLBACK FUNCTIONS.
// WILL TAKE 2 PARAMETERS - ACCUMULATOR AND VALUES.
// ACCUMULATIOR WILL BE THE SUM AND VALUE WILL BE THE CUURENT VAL OF ELEMENT

const myNums = [1, 2, 3, 4, 5]
// BASICALLY IT WILL RETURN THE SUM OF ALL THE VALUES.

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
// 0 AT LAST WILL ACT AS AN INITIALIZER AS WE HAVE TO INITIALIZE THE VALUE OF ACCUMULATOR(OUTSIDE THE CALL BACK FUNCTION).
// INITIALLY ACCUMULATOR WILL BE EQUAL TO THE INITIALIZED VALUE BUT ATER EACH ITERATION, ITS VALUE WILL BE ACCUMULATOR + CURRENTVALUE.

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // ARROW FUNCTION

console.log(myTotal);


// +++++++++++++++++++ EXAMPLE +++++++++++++

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
// HERE INITIALIZED ACCUMULATOR IS 0 AND ITS VALUE GET UPDATED AFTER EACH ITERATION AND LASTLY IT WILL RETURN THE SUM.

// IN REDUCE WE CAN PERFORM OPERATION ON THE VALUES OF ARRAY USING ACCUMULATIOR.
// SO BASICALLY IT INVOLVES A CALL BACK FUNCTION, ACCUMULATOR AND INITIALIZER.
// THE RESULT WILL DEPEND UPON THE OPERATION BETWEEN THE ACCUMULATOR AND CURRENT VALUE.