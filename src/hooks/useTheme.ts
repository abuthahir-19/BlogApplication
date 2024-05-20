import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

const useTheme = () => {
    const context = useContext (AppContext);
    if (!context) {
        throw new Error ("Context must be invoked within the provider function !");
    }
    return context;
};

export { useTheme };