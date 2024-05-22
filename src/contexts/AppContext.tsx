import { type ReactNode, createContext, useState } from "react";

export type Category = {
    id: number;
    title: string;
    categoryDesc: string;
    categoryImage: string;
};

type Post = {
    id: number;
    category: Category;
    author: {
        name: string;
        profile: string;
    }
    title: string;
    body: string;
    excerpt: string;
    tags: string;
    contentSourceName: (string | null);
    contentSourceURL: (string | null);
    extraImageUrl: (string | null);
    imageOwnerName: (string | null);
    imageOwnerBacklink: (string | null);
    image: string;
    videoURL: (string | null);
    date_published: string;
    website: (string | null);
}

type AppContextProps = {
    children: ReactNode
}

type AppContextType = {
    isDarkMode: boolean;
    changeTheme: () => void;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

export const AppContext = createContext<AppContextType | null> (null);

const AppContextProvider = ({ children }: AppContextProps) => {
    const [isDarkMode, setIsDarkMode] = useState (false);
    const [posts, setPosts] = useState<Post[]>([]);

    const changeTheme = () => {
        setIsDarkMode (prevState => !prevState);
        // console.log (isDarkMode);
    }
    
    const contextValue: AppContextType = {
        isDarkMode,
        changeTheme,
        posts,
        setPosts,
    }

    return (
        <AppContext.Provider value={contextValue}>
            { children }
        </AppContext.Provider>
    )
};

export default AppContextProvider;