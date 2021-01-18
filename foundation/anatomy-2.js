// Anonymous function
(function (a, b, c) {
    return a + b + c
})

// Function expression
const sum = function (a, b) {
    return a + b
}

console.log(sum(1,7))

const anotherSum = sum
console.log(anotherSum(8,9))

