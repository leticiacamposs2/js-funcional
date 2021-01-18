const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map((el) => el * 2)

// const numbersV3 = []
// for(let n of numbers) {
//     numbersV3.push(n * 2)
// }

console.log(numbers, numbersV2)

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
];


const getScore = el => el.score

students.map(getScore)

console.log(
    students
        .map(getScore)
        .map(Math.ceil) //arrendoda pra cima
)

console.log(students)



