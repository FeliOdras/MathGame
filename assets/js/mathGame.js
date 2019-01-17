// Task: Create a math game for addition and substraction with the following requirements:
// - randomly created addition and substraction exercises
// - only numbers from 1 - 20 are calculated
// - also the result must not be greater than 20 and not less 0
// - create feedback wether the input result is correct or not

"use strict";
var exerciseResult; // Result of exercise
function createExercise() {
  // Declare variables
  let firstOperand;
  let secondOperand;
  let exerciseOperator; // Mathematical operator + or -
  let exerciseOutput; // Exercise to solve

  do {
    // Select random values for exercise operands
    firstOperand = Math.floor(Math.random() * 21);
    secondOperand = Math.floor(Math.random() * 21);
    // Select operator randomly
    exerciseOperator = Math.floor(Math.random() * 2);

    // Define mathematical operators for exercise
    if (exerciseOperator == 0) {
      exerciseOperator = "-";
    } else if (exerciseOperator == 1) {
      exerciseOperator = "+";
    }

    // Calculate Result of exercise
    if (exerciseOperator == "-") {
      exerciseResult = firstOperand - secondOperand;
    } else if (exerciseOperator == "+") {
      exerciseResult = firstOperand + secondOperand;
    }
  } while (
    // Repeat until sum or difference of variables is not greater than 20 and not less than 0
    exerciseResult > 20 ||
    exerciseResult < 0
  );
  exerciseOutput = `Löse diese Aufgabe: <br> ${firstOperand} ${exerciseOperator} ${secondOperand}`;
  document.getElementById("lessonOutput").innerHTML = exerciseOutput;
  console.log(exerciseOutput);
}

function checkResult() {
  let exerciseResultOutput;
  let exerciseInput = document.getElementById("lessonInputValue").value; // Solution. Input by user
  console.log(exerciseInput);
  console.log(exerciseResult);

  // Compare if the input result is correct or not and put out corresponding feedback
  if (exerciseInput == exerciseResult) {
    exerciseResultOutput = "Super! Du hast die Aufgabe richtig gelöst :)";
  } else {
    exerciseResultOutput = "Das war leider falsch. Versuche es noch einmal.";
  }
  console.log(exerciseResultOutput);
  document.getElementById("resultOutput").innerHTML = exerciseResultOutput;
}
