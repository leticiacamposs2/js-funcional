const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el
const total = numbers.reduce(sum, 100)
console.log(total)

const media = numbers.reduce(sum) / numbers.length+1
console.log(media)

// outra forma
const avg = (accumulater, el, i, array) => {
    if (i === array.length - 1) {
        return (accumulater + el) / array.length
    } else {
        return accumulater + el
    }
}

const result = numbers.reduce(avg)
console.log(result)

