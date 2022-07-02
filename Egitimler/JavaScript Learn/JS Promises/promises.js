let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})


p.then((message) => { // Then is going to be called when our promises resolves successfully
    console.log("This is in the then " + message)
}).catch((message) => { // catch is going to be called when our promises reject or fails
    console.log("This is in the catch " + message)
})


/* Callback EXAMPLE */

const userLeft = true
const userWatchingMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: "User Left",
            message: ":("
        })
    } else if (userWatchingMeme) {
        errorCallback({
            name: "User Watching Cat Meme",
            message: "Berat < Cat"
        })
    } else {
        callback("Thumbs up")
    }
}

watchTutorialCallback((message) => {
    console.log("Success " + message)
}, (error) => {
    console.log(error.name + " " + error.message)
})




/* Promise Example */

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: "User Left",
                message: ":("
            })
        } else if (userWatchingMeme) {
            reject({
                name: "User Watching Cat Meme",
                message: "Berat < Cat"
            })
        } else {
            resolve("Thumbs up")
        }
    })
}


watchTutorialPromise().then((message) => {
    console.log("Success " + message)
}).catch ((error) => {
    console.log(error.name + " " + error.message)
})


/* Another Promise Example */
/* These promises will run at the same time */

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})