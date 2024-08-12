
const obj = {
    name_hoga_kuch :"JavaScript",
    Id_bhi_hoga : 1546,
    fee_bhi_lgegi : 120,
    complete_hogya : false 
}

const {name_hoga_kuch} = obj     // object destructuring is done while calling APIs and all
console.log(name_hoga_kuch)

const {Id_bhi_hoga : id} = obj   // props can be created like this and accessed further
console.log(id)