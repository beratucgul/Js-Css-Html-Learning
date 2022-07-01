/* select single element and just passed it a css selector */

// const grandparent = document.getElementById("grandparent-id")
// const grandparent = document.querySelector("#grandparent-id") 
//const grandparent = document.querySelector(".grandparent")
//changeColor(grandparent)



/* Array.from is used for forEach loop */

// const grandparent = document.querySelector(".grandparent")
// const parents = Array.from(grandparent.children)     
// parents.forEach(changeColor)



/* changes the color of the first children */

/* const grandparent = document.querySelector(".grandparent")
const parents = Array.from(grandparent.children)
const parentOne = parents[0]
const children = parentOne.children */
//changeColor(children[0])  



/* changes the color of the first children */

// const grandparent = document.querySelector(".grandparent")
// const childOne = grandparent.querySelector(".child")
// changeColor(childOne)  



/* changes the color of the all children */

// const grandparent = document.querySelector(".grandparent")
// const children = grandparent.querySelectorAll(".child")
// children.forEach(changeColor)   



/* changes the parent element's background color of first children */

// const childOne = document.querySelector("#child-one")
// const parent = childOne.parentElement
// changeColor(parent) 



/* changes the sibling element's background color of first children */

const childOne = document.querySelector("#child-one")
const childTwo = childOne.nextElementSibling
changeColor(childTwo) 



/* We have to add Array.from for using forEach loop. We can change the background color of parents */

// const parents = Array.from(document.getElementsByClassName("parent")) 
// parents.forEach(changeColor)


/* only first parent class's background color will change */

// const parent = document.querySelector(".parent") 
// changeColor(parent)


/* all parent class's background color will change */

// const parents = document.querySelectorAll(".parent") 
// parents.forEach(changeColor)




function changeColor(element) {
    element.style.backgroundColor = "#333"
}