import React from 'react'


export const darkModeHandler = (setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>) => {
    setMode(prevMode => prevMode === "dark" || prevMode === null ? "light" : "dark");
    document.body.classList.toggle("dark");
}
