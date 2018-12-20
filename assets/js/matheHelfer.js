let a;
let b;

function defineVariables() {
    a = Math.floor(Math.random() * 21);
    b = Math.floor(Math.random() * 21);

    // console.log(a);
    // console.log(b);
}

function createLesson() {

}

defineVariables();

if (a + b < 20) {
    createLesson();
} else {
    defineVariables();
}
