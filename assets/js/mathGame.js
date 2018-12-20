// Declare variables
let a;
let b;
let summe;

function createAddtionLesson() {
    // Create random integer for Variables
    a = Math.floor(Math.random() * 21);
    b = Math.floor(Math.random() * 21);

    // Define 'summe'
    summe = a + b;

    console.log(a);
    console.log(b);
    console.log(summe);

    if (summe < 21) {
        window.document.write(a + ' + ' + b + ' = <input type="number">');
    } else {
        window.document.write("Das Ergebnis ist groesser als 20.")
    }

}

createAddtionLesson()

// if (summe < 20) {
//     lessonOutput();
// } else {
//     console.log("Die Summe ist groesser als 20")
// }