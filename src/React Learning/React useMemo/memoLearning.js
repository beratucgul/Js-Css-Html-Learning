import React, { useState, useMemo, useEffect } from "react";

export default function MemoLearning() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    
    const doubleNumber = useMemo(() => {    // Doesn't recompute every single time we render the component and it only computes when we actually need value form
                                            // that function since the inputs actually changed
        return slowFunction(number)
    }, [number])

    const themeStyles = useMemo(() => { //Below useEffect will run only theme styles changed. If number is changing, useEffect will not run
                                        // If our dark variable doesn't change we don't need update our theme styles.
        return {
            backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
        }
    }, [dark])

    useEffect(() => {
        console.log("Theme Changed")
    }, [themeStyles])

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        
        </>
    )
}

function slowFunction(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2
}