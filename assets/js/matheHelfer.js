// Declare variables
let a;
let b;
let summe;

function defineVariables() {

    // Create random integer for Variables
    a = Math.floor(Math.random() * 21);
    b = Math.floor(Math.random() * 21);

    // Define 'summe'
    summe = a + b;

    console.log(a);
    console.log(b);
    console.log(summe);
}

function createLesson() {
    
}

defineVariables();

if (summe < 20) {
    createLesson();
} else {
    console.log("Die Summe ist groesser als 20")
}
