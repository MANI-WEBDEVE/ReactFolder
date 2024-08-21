import { createContext, useState, use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () =>  {
    return setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")
  }

  return <ThemeContext.Provider value={{theme, handleToggleTheme}}>{children}</ThemeContext.Provider>;
};


export const DarkLight = () => {

    const {handleToggleTheme, theme} = use(ThemeContext)

    return (
        <div className={`h-lvh flex justify-center items-center flex-col ${theme === 'dark' ? "bg-slate-900 text-white" : "bg-white text-black"} `}>
            <h1 className="text-2xl font-semibold">Light And Dark Mode</h1>
            <p className="text-xl font-medium tracking-tighter"> Select your Theme</p>
            <button onClick={handleToggleTheme} className={`p-2 rounded-lg border-none text-xl font-medium ${theme === 'dark' ? "bg-slate-300/50": "bg-black/50"} `}>{`${theme === "dark" ?  "Switch Light Mode☀": "Switch Dark Mode🌛"}`}</button>
        </div>
    )
}