function main() {

    const grades = [73,67,38,33]

    gradingStudents(grades);
}

function gradingStudents(grades) {
    // Write your code here
    console.log(grades)
    var grade_round;
    for (let grade_no = 0; grade_no < grades.length ; grade_no++){
        if (grades[grade_no] <= 38) continue;
        grade_round = Math.ceil(grades[grade_no] / 5) * 5;
        console.log(grade_round);
        if (grade_round - grades[grade_no] < 3){
            grades[grade_no] = grade_round;
        }
    }
    console.log(grades);
}

main();