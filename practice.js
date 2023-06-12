let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon' },
        results: { science: 93, maths: 95, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 63, maths: 79, art: 95 },
    }
];

// we accomulate points and record increment of items to be able to calculate the average

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let increment = 0;

    for (let target of arr) {
        if (subject in target.results) {
            allPoints += target.results[subject];
            increment += 1;
        }
    }
    return allPoints / increment;
}

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);


// Understand access and values

const readStudents = (read) => {
    for (data of read){
        console.log(data.results);
        let numbers = data.results['english'];
        console.log(numbers);
    }
}

readStudents(students);