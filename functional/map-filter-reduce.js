const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
];

const greaterStudent = students => students.score >= 9
const getScore = el => el.score
const avg = (accumulater, el, i, array) => {
    if (i === array.length - 1) {
        return (accumulater + el) / array.length
    } else {
        return accumulater + el
    }
}

console.log(
    students
        .filter(greaterStudent)
        .map(getScore)
        .reduce(avg)
)
