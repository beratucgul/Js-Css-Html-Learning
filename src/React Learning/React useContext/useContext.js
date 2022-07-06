import React from "react";
import FunctionContextComponent from "./functionContextComponent";
import { ThemeProvider } from "./themeContext";

export default function UseContext() {


    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    )


}