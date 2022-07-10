import React, { useContext, useState } from "react";

const BackgroundColorContext = React.createContext()
const BackgroundColorUpdateContext = React.createContext()

export function useBackgroundColor() {
    return useContext(BackgroundColorContext)
}

export function useBackgroundColorUpdate() {
    return useContext(BackgroundColorUpdateContext)
}

export function BackgroundColorThemeProvider({ children }) {
    const [bgColor, setBgColor] = useState(true)

    function bgChange() {
        setBgColor(prevBgColor => !prevBgColor)
    }

    return(
        <BackgroundColorContext.Provider value={bgColor}>
            <BackgroundColorUpdateContext.Provider value={bgChange}>
                {children}
            </BackgroundColorUpdateContext.Provider>
        </BackgroundColorContext.Provider>
    )
}