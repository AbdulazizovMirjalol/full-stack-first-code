const students = [
    { name: "Mirjalol", scores: [80, 90, 100] },
    { name: "Bob", scores: [50, 60, 70] },
    { name: "Charlie", scores: [30, 40, 20] }
];

students.forEach(student => {
    const sum = student.scores.reduce((a, b) => a + b, 0);
    const average = sum / student.scores.length;

    console.log(student.name + " average score: " + average);
});


