// Declare variables
let a;
let b;
let summe;
let lessonOutput;

function createAdditionLesson() {

    do {

        // Create random integer for Variables
        a = Math.floor(Math.random() * 21);
        b = Math.floor(Math.random() * 21);

        // Define 'summe'
        summe = a + b;

        //console.log(a);
        //console.log(b);
        console.log(summe);
    }
    while (summe > 20);

    lessonOutput = a + ' + ' + b + ' = <input type="number">';
    console.log (lessonOutput);
}

createAdditionLesson()