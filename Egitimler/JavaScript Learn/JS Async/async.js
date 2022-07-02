let a = 1
let b = 2

setTimeout(function() {     // This function will run after 100 milliseconds
    console.log("Async")    // This function will render after the below logs
}, 100)

fetch("/").then(function() { //This function will run after fetch the data(Async method)
    console.log("Fetch")
})

console.log("Synchronous")

console.log(a)
console.log(b)