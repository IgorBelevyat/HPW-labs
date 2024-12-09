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
}

array.forEach(item => {
    let itemType = typeof item

    if (item === null) {
        itemType = 'object'
    } else if (item === NaN) {
        itemType = 'number'
    }
    
    if (!collection[itemType]) {
        collection[itemType] = 0
    }
    collection[itemType]++
})

console.log(collection)
