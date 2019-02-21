"use strict";
var exerciseResult;

function createExercise() {
  let firstOperand;
  let secondOperand;
  let exerciseOperator;
  let exerciseOutput;
  const form = document.querySelector("#exerciseForm");
  form.reset();
  document.querySelector("#resultOutput").innerHTML = "";

  do {
    firstOperand = Math.floor(Math.random() * 21);
    secondOperand = Math.floor(Math.random() * 21);
    exerciseOperator = Math.floor(Math.random() * 2);

    if (exerciseOperator == 0) {
      exerciseOperator = "-";
    } else if (exerciseOperator == 1) {
      exerciseOperator = "+";
    }

    if (exerciseOperator == "-") {
      exerciseResult = firstOperand - secondOperand;
    } else if (exerciseOperator == "+") {
      exerciseResult = firstOperand + secondOperand;
    }
  } while (exerciseResult > 20 || exerciseResult < 0);
  exerciseOutput = `Löse diese Aufgabe: <br> ${firstOperand} ${exerciseOperator} ${secondOperand}`;
  document.getElementById("lessonOutput").innerHTML = exerciseOutput;
}

function checkResult() {
  let exerciseResultOutput;
  let exerciseInput = document.getElementById("lessonInputValue").value;

  if (exerciseInput == exerciseResult) {
    exerciseResultOutput =
      '<span class="correct">Super! Du hast die Aufgabe richtig gelöst :)</span>';
  } else {
    exerciseResultOutput =
      '<span class="wrong">Das war leider falsch. Versuche es noch einmal.</span>';
  }
  document.querySelector("#resultOutput").innerHTML = exerciseResultOutput;
}
