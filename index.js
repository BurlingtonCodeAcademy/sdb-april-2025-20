const box = document.getElementById('box');
let myButton = document.getElementById('my-button')

const prestoBtn = document.getElementById('presto');
const abraBtn = document.getElementById('abra');
const theRock = document.getElementById('the-rock');

const form = document.getElementById('form')
const nameInput = document.getElementById('name')

function alertMe() {
    alert("Button clicked!");
}

box.addEventListener("click", () => {
    console.log("Clicked on the box");
})

myButton.addEventListener("click", alertMe)

function sayMagicWord(event) {
    if (event.target === prestoBtn) {
        alert("Change-o!")
    } else if (event.target === abraBtn) {
        alert("Kadabra!")
    } else {
        alert("Shazam!");
    }

    console.log(event.target)
}

prestoBtn.addEventListener("click", sayMagicWord);
abraBtn.addEventListener("click", sayMagicWord);
theRock.addEventListener("click", sayMagicWord);

document.getElementById('outer').addEventListener("click", () => { console.log("Outer div clicked") })
document.getElementById('middle').addEventListener("click", () => {
    console.log("Middle div clicked")
})
document.getElementById('inner').addEventListener("click", () => {
    console.log("Inner div clicked")
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // get the value of the input field
    const name = nameInput.value;

    console.log(`Form submitted with name: ${name}`);

    // basic validation
    if (name === "") {
        alert("Please enter your name.");
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
    }

    // success message - OR do something with the data
    console.log(`Hello, ${name}! Your form has been submitted successfully.`);
    alert(`Hello, ${name}! Your form has been submitted successfully.`);

    // clear the input field
    form.reset();
})