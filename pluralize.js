// Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

function pluralize(words) {
    // create an empty object
    let obj = {}
    // count frequency of each word
    for (const value of words) {
        obj[value] = (obj[value] || 0) + 1
    }

    const arr = []
    for (const prop in obj) {
        // if the word appears more than once, add an 's' to the end of it
        if (obj[prop] > 1) {
            arr.push(prop + 's')
        } else arr.push(prop)
    }
    
    console.log(arr)
}

pluralize(["cow", "pig", "cow", "cow"]);
pluralize(["table", "table", "table"]);
pluralize(["chair", "pencil", "arm"]);