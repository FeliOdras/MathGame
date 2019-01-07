// Task: Create a math game for addition and substraction with the following requirements:
// - randomly created addition and substraction exercises
// - only numbers from 1 - 20 are calculated
// - also the result must not be greater than 20 and not less 0
// - create feedback wether the input result is correct or not

"use strict";

function createExercise() {
    // Declare variables
    let firstOperand; // First number of exercise
    let secondOperand; // Second number of exercise
    let exerciseOperator; // Mathematical operator + or -
    let exerciseOutput; // Exercise to solve
    let exerciseInput; // Solition. Inputr by user
    let exerciseResult; // Result of exercise

    do {
        // Select random values for exercise variables a and b
        firstOperand = Math.floor(Math.random() * 21);
        secondOperand = Math.floor(Math.random() * 21);
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
            exerciseResult = firstOperand - secondOperand;
        } else if (exerciseOperator == '+') {
            exerciseResult = firstOperand + secondOperand;
        }
    }
    // Repeat until sum or difference of variables is not greater than 20 and not less than 0
    while (exerciseResult > 20 || exerciseResult < 0);


    exerciseOutput = firstOperand + ' ' + exerciseOperator + ' ' + secondOperand;
    // console.log(exerciseOutput)
    // console.log(exerciseResult)

    // Create lesson output (Prompt for now)
    exerciseInput = prompt("Löse diese Aufgabe: " + exerciseOutput);

    // Compare if the input result is correct or not and put out corresponding feedback
    if (exerciseInput == exerciseResult) {
        alert("Super! Du hast die Aufgabe richtig gelöst :)");
    } else {
        alert("Das war leider falsch :(");
    }
}

createExercise();