import { type ReactNode, createContext, useState } from "react";

type AppContextProps = {
    children: ReactNode
}

type AppContextType = {
    isDarkMode: boolean;
    changeTheme: () => void;
}

export const AppContext = createContext<AppContextType | null> (null);

const AppContextProvider = ({ children }: AppContextProps) => {
    const [isDarkMode, setIsDarkMode] = useState (false);

    const changeTheme = () => {
        setIsDarkMode (prevState => !prevState);
        // console.log (isDarkMode);
    }

    const contextValue: AppContextType = {
        isDarkMode,
        changeTheme
    }

    return (
        <AppContext.Provider value={contextValue}>
            { children }
        </AppContext.Provider>
    )
};

export default AppContextProvider;