// Task: Create a math game for Addition with the following requirements:
// - only numbers from 1 - 20 are calculated
// - also the result must not be greater than 20
// - create feedback wether the input result is correct or not

function createExercise() {
    // Declare variables
    let a;
    let b;
    let exerciseOutput;
    let exerciseInput;
    let exerciseOperator;
    let exerciseResult;

    // Select operator (+ or -)
    // debugger
    do {
    a = Math.floor(Math.random() * 21);
    b = Math.floor(Math.random() * 21);
    exerciseOperator = Math.floor(Math.random() * 2);

    if (exerciseOperator == 0) {
        exerciseOperator = '-';
    } else if (exerciseOperator == 1) {
        exerciseOperator = '+';
    }

    if (exerciseOperator == '-') {
        exerciseResult = a - b;
    } else if (exerciseOperator == '+') {
        exerciseResult = a + b;
    }

    exerciseOutput = a + exerciseOperator + b;
    console.log(a + exerciseOperator + b)
    console.log(exerciseResult)
    console.log(exerciseOutput)

    }
    // Repeat until sum of variables is not greater than 20
    while (exerciseResult > 20 || exerciseResult < 0);

    // Build lesson to solve
    // Create lesson output (Prompt for now)
    exerciseInput = prompt("Löse diese Aufgabe: " + exerciseOutput);
    // Compare if the input result is correct
    if (exerciseInput == exerciseResult) {
        alert("Super! Du hast die Aufgabe richtig gelöst :)");
    } else {
        alert("Das war leider falsch :(");
    }
}

createExercise()