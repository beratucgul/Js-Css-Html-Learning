const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// When we click on the child, the items will be render from the inside out.

grandparent.addEventListener("click", e => { // When we add capture, items will be render inside from the outside but firstly render grandparent because of capture property
    console.log("Grandparent Capture 1")
}, {capture: true} )

grandparent.addEventListener("click", e => {
    console.log("Grandparent 1")
})

parent.addEventListener("click", e => {
    console.log("Parent 1")
})

parent.addEventListener("click", e => { // When we add capture, items will be render inside from the outside but firstly render document 
                                              //then grandparent and then parent because of capture property
    e.stopPropagation() // Rendering will stop after this Listener rendering
    console.log("Parent Capture 1")
}, {capture: true} )


child.addEventListener("click", e => {
    console.log("Child 1")
})

document.addEventListener("click", e => {
    console.log("Document 1")
}, {once : true})  // When we use once property, this event will run one time and then remove itself

document.addEventListener("click", e => { // When we add capture, items will be render inside from the outside but firstly render document
                                            //  and then grandparent because of capture property
    console.log("Document Capture 1")
}, {capture: true} )