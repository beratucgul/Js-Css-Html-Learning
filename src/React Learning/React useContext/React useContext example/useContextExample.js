import React from "react";
import FunctionContextExample from "./functionContextExample";
import { BackgroundColorThemeProvider } from "./backgroundContext";

export default function UseContextExample() {

    return (
        <BackgroundColorThemeProvider>
            <FunctionContextExample/>
        </BackgroundColorThemeProvider>
    )

}