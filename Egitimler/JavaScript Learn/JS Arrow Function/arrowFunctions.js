function sum(a, b) {
    return a + b
}

let sum2 = (a, b) => a + b   // everything after the arrow is assumed to be returned (Without curly braces)



function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0



function randomNumber() {
    return Math.random
}

let randomNumber2 = () => {
    return Math.random
}



document.addEventListener("click", function() {
    console.log("Click")
})

document.addEventListener("click", () => {
    console.log("Click")
})