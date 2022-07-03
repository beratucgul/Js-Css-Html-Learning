import { View, Text } from 'react-native'
import React, { useState } from 'react'

/* Hooks can only use inside the function, cannot use inside the class */
/* Hooks cannot be nested anything. It have to be top level. We cant use hooks inside the if or loops */

export default function StateLearning() {

    function countInitial() {  /* If we set this function to useState without arrow function, this function will run every time when we increment or decrement the number */
        console.log("run function")
        return 4
    }

    /*const [count, setCount] = useState(() => {   //Arrow function run only the once. Very first time
        console.log("run function")
        return 4
    })  */



    /*const [state, setState] = useState({count: 4, theme: "blue"})
    const count = state.count
    const theme = state.theme

      function decrementCount () {     // We can use two different useState instead of this state.
        setState(prevState => {
            return {...prevState, count: prevState.count - 1} // we use ...prevState because when we update the object, we want to update all object. Not only count object 
                                                               // If we dont use ...prevstate, we cant update the theme object and it will not render
        })
    }*/

    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState("blue")

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}