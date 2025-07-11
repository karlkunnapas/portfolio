import {useEffect, useState} from "react";
import { Moon, Sun } from "lucide-react"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")

        if (storedTheme === "light") {
            document.documentElement.classList.add("light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.remove("light")
            setIsDarkMode(true)
        }

    }, []);
    const toggleTheme = () => {
        if (isDarkMode) {
            localStorage.setItem("theme", "light")
            document.documentElement.classList.add("light")
            setIsDarkMode(false)
        } else {
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.remove("light")
            setIsDarkMode(true)
        }
    }

    return <button className="max-sm:hidden z-50 rounded-full transition-colors duration-300 focus:outline-hidden cursor-pointer" onClick={toggleTheme}> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}</button>
}