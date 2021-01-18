function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams()


// definindo valores default
function defaultParams(a = 3, b = 2, c = 1) {
    console.log(a, b, c)
}

defaultParams(7, 8, 9) 
defaultParams(4) 


console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


function logNums(nums) {
    for (let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3, 4, 5, 6])



// Spread/Rest

function logNums2(...nums) {
    console.log(Array.isArray(nums))
    for (let n of nums) {
        console.log(n)
    }
}

logNums2(9, 8, 7, 6, 5)



function sumAll(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5))
