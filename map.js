const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map(function(item){
    return item * 10
})

// console.log(newNums)


const chainNums = newNums.map(
    function(item){
        return item * 10
    }).map(
        (item) => (item + 1)).map(
        (item) => {
        return   item + 1
        }).filter(
            function(item){
        return item > 500
    })

console.log(chainNums)    

// THIS IS CALLED CHAINING OF MAP.
// MAP IS ALSO USED FOR TRAVERSING AND PERFORMING OPERATIONS ON EVERY ELEMENT OF ARRAY.
// UNLINKE FILTER MAP DOESN'T FOLLOW THE BOOLEAN PRINCIPLE.
// IT WILL EXECUTE ITS TASK EVEN IF THE CONDITION IS NOT SATISFIED.