// Task: Create a math game for Addition with the following requirements:
// - randomly created addition and substraction exercises
// - only numbers from 1 - 20 are calculated
// - also the result must not be greater than 20 and not less 0
// - create feedback wether the input result is correct or not

function createExercise() {
    // Declare variables
    let a; // First number of exercise
    let b; // Second number of exercise
    let exerciseOperator; // Mathematical operator + or -
    let exerciseOutput; // Exercise to solve
    let exerciseInput; // Solition. Inputr by user
    let exerciseResult; // Result of exercise

    do {
    // Select random values for exercise variables a and b
    a = Math.floor(Math.random() * 21);
    b = Math.floor(Math.random() * 21);
    // Select operator randomly  
    exerciseOperator = Math.floor(Math.random() * 2);

    // Define mathematical operators for exercise
    if (exerciseOperator == 0) {
        exerciseOperator = '-';
    } else if (exerciseOperator == 1) {
        exerciseOperator = '+';
    }

    // Calculate Result of exercise
    if (exerciseOperator == '-') {
        exerciseResult = a - b;
    } else if (exerciseOperator == '+') {
        exerciseResult = a + b;
    }

    exerciseOutput = a + ' ' + exerciseOperator + ' ' + b;
    // console.log(exerciseOutput)
    // console.log(exerciseResult)
    }
    // Repeat until sum or difference of variables is not greater than 20 and not less than 0
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