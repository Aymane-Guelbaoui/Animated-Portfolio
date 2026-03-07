import React, { useEffect, useState } from "react";
import {Sun, Moon} from "lucide-react";

export default function Theme() {

    const[theme, setTheme] = useState(localStorage.getItem('theme'))
    
    const ToggleTheme = () =>{
        setTheme(theme == "dark" ? "light" : "dark")
    }

    useEffect(() => {
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme)
    },[theme])

    return (
        <div className="hover:text-amber-600 ">
            <button className=" p-3 rounded-full shadow-lg shadow-black/30 cursor-pointer" onClick={ToggleTheme}>
                {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/> }

            </button>
        </div>
    )
}