let counter = 0;
let numOfCookies = document.getElementById("numOfCookies");
let cookiesPerSecond = document.getElementById("cookiesPerSecond");
let addOneButton = document.getElementById("addOneBtn");

function addOne() {
    counter++;
    numOfCookies.textContent = counter;
    localStorage.setItem("counter", counter);
}

addOneButton.addEventListener("click", addOne);

function getLocalStorage() {
    const localCounter = localStorage.getItem("counter");
    if (localCounter !== null) {
        counter = parseInt(localCounter);
        numOfCookies.textContent = counter;
    }
}

