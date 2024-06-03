import { type ReactNode, createContext, useState } from "react";

export type Category = {
    id: number;
    title: string;
    categoryDesc: string;
    categoryImage: string;
};

export type Post = {
    id: number;
    category: Category;
    author: {
        id: number;
        role: string;
        name: string;
        profile: string;
        about_me: string;
        linkedin: string;
        instagram: string;
        twitter: string;
        youtube: string;
    };
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
    isNavOpen: boolean;
    ToggleNav: () => void;
}

export const AppContext = createContext<AppContextType | null> (null);

const AppContextProvider = ({ children }: AppContextProps) => {
    const [isDarkMode, setIsDarkMode] = useState (false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [isNavOpen, setIsNavOpen] = useState (false);

    const changeTheme = () => {
        setIsDarkMode (prevState => !prevState);
        // console.log (isDarkMode);
    }

    const ToggleNav = () => {
        setIsNavOpen (prevState => !prevState);
        // console.log (isNavOpen);
    };
    
    const contextValue: AppContextType = {
        isDarkMode,
        changeTheme,
        posts,
        setPosts,
        isNavOpen,
        ToggleNav
    }

    return (
        <AppContext.Provider value={contextValue}>
            { children }
        </AppContext.Provider>
    )
};

export default AppContextProvider;