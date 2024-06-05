import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";
import AuthorPage from "./pages/AuthorPage";
import { useTheme } from "./hooks/useTheme";
import { useEffect } from "react";

function App() {
    const { isNavOpen } = useTheme();

    useEffect (() => {
        if (isNavOpen) {
            document.body.classList.add ('no-scroll');
        } else {
            document.body.classList.remove ('no-scroll');
        }
    }, [isNavOpen]);
    
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={`/blog/:title/:id`} element={<SinglePost />} />
            <Route path={`/author/:authorID/:authorName`} element={<AuthorPage />} />
        </Routes>
    );
}

export default App;
