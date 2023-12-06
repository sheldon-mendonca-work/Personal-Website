import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {


    const [ theme, setTheme ] = useState('lightTheme');

    useEffect(()=>{
        document.documentElement.className = theme;
    }, [theme])

    useEffect(()=>{
        if(localStorage.getItem('sheldonPortFolioTheme') !== 'darkTheme'){
            setTheme("darkTheme");
            localStorage.setItem('sheldonPortFolioTheme', 'darkTheme');
        }
    }, [])

    const modifyTheme = () => {
        if(theme === 'lightTheme'){
            setTheme('darkTheme');
            localStorage.setItem('sheldonPortFolioTheme', 'darkTheme');
        }else{
            setTheme('lightTheme');
            localStorage.setItem('sheldonPortFolioTheme', 'lightTheme');
        }
    }

    return <ThemeContext.Provider value={{theme, setTheme, modifyTheme}}>
        {children}
    </ThemeContext.Provider>
};