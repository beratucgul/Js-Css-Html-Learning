import React from "react";
import { useBackgroundColor, useBackgroundColorUpdate } from "./backgroundContext";

export default function FunctionContextExample() {

    const bgColor = useBackgroundColor()
    const bgChange = useBackgroundColorUpdate()
    const bgStyle = {
        backgroundColor: bgColor ? "#866" : "#123664",
        color: bgColor ? "#fff" : "#A5D",
        fontSize: bgColor ? "25px" : "30px"
        
        
    }

    return (
        <>
            <button onClick={bgChange}>Change BG Color</button>
            <br></br>
            <text style={bgStyle}>Change Background Color</text>
        </>
    )



}



