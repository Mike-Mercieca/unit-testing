// Function that returns the largest of three values

const getLargest = (a, b, c) => {
    if (a && b && c) {
        return Math.max(a, b, c);
    } else {
        throw 'Error: all inputs must have a value'
    }
}

// console.log(getLargest(4, 6, 8));


const getSmallest = (a, b, c) => {
    if (a && b && c) {
        return Math.min(a, b, c);
    } else {
        throw 'Error: all inputs must have a value'
    }
}


module.exports = {
    getLargest: getLargest,
    getSmallest: getSmallest
}