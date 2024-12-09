const array = [
    true, 
    'hello', 
    5, 
    12, 
    -200, 
    false, 
    'word', 
    3.14, 
    null, 
    undefined, 
    NaN, 
]

const collection = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
};


array.forEach(element => {
    const elementType = typeof element

    if (element === null) {
        collection.object++
    } else if (element === NaN) {
        collection.number++
    } else {
        collection[elementType]++
    }
})

console.log(collection)
