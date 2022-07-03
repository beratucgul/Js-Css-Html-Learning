function Storage() {
    /* LOCAL STORAGE */
    /* Can accessible in any window */
    /* Expires time: NEVER */
    /* Storage Location: Browser Only */
    /* Sent with request: NO */
    localStorage.setItem("name", "Bob")
    console.log(localStorage.getItem("name"))
    //localStorage.removeItem("name")


    /* SESSION STORAGE */
    /* Just accessible in the same tab */
    /* Expires time: On Tab Close */
    /* Storage Location: Browser Only */
    /* Sent with request: NO */
    sessionStorage.setItem("name", "Berat")
    sessionStorage.setItem("name", "Mark")
    //sessionStorage.removeItem("name")


    /* COOKIE STORAGE */
    /* Can accessible in any window */
    /* Expires time: Manually set */
    /* Storage Location: Browser and Server */
    /* Sent with request: YES */
    document.cookie = "name=Kyle; expires=" + new Date(9999,0,1).toUTCString
    document.cookie = "lastName=Smith; expires=" + new Date(9999,0,1).toUTCString

    console.log(document.cookie)
}

export default Storage