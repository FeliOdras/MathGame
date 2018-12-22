// Task: Create a math game for Addition with the following requirements:
// - only numbers from 1 - 20 are calculated
// - also the result must not be greater than 20
// - create feedback wether the input result is correct or not

// Declare variables
let a;
let b;
let summe;
let lessonOutput;
let lessonInput;

function createAdditionLesson() {

    do {

        // Create random integer for Variables
        a = Math.floor(Math.random() * 21);
        b = Math.floor(Math.random() * 21);

        // Define 'summe'
        summe = a + b;

    }
    // Repeat until sum of variables is not greater than 20
    while (summe > 20);

    // Build lesson to solve
    lessonOutput = a + ' + ' + b + ' = ';
    // Create lesson output (Prompt for now)
    lessonInput = prompt(lessonOutput);

    // Compare if the input result is correct
    if (lessonInput == summe) {
        alert("Super! Du hast die Aufgabe richtig gelöst :)");
    } else {
        alert("Das war leider falsch :(");
    }
}

createAdditionLesson()