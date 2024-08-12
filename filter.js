const languages = ["C++", "C#", ".NET", "Java", "Python", "JavaScript", "GoLang"]

const values = languages.forEach((item) => {
    console.log(item)
    return item
})

console.log(values)

// FOR-EACH DOESN'T PERFORM ANY OPERATIONS IT WILL ONLY ITERATE.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = myNums.filter((item) => item > 4)
console.log(nums)
// BY USING FILTER WE CAN TRAVERSE AS WELL AS WE CAN PERFORM OPERATIONS.

const newNum = []
myNums.forEach((items) => {
    if (items > 4) {
        newNum.push(items)
    }
})
console.log(newNum)
// IF WE USE FOR-EACH WE HAVE TO PERFORM ABOVE OPERATIONS. 

// +++++++++++++++ EXAMPLE OF FILTER +++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let response = books.filter((bks) => bks.genre === "History")
console.log(response)

response = books.filter((bks) => {
    return bks.genre === "History" && bks.edition > 2002
})

console.log(response)

// FILTER WORKS ON THE PRINCIPLE OF BOOLEAN SO IT WILL EXECUTE ONLY IF THE CONDITION IS TRUE.