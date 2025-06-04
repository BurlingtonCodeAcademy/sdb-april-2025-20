const box = document.getElementById('box');
let myButton = document.getElementById('my-button')

function alertMe() {
    alert("Button clicked!");
}

box.addEventListener("click", () => {
    console.log("Clicked on the box");
})

myButton.addEventListener("click", alertMe)