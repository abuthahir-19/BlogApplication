import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";
import AuthorPage from "./pages/AuthorPage";
import { useTheme } from "./hooks/useTheme";
import { useEffect } from "react";
import CategoryListing from "./pages/CategoryListing";

function App() {
    const { isNavOpen } = useTheme();

    useEffect (() => {
        if (isNavOpen) {
            document.body.classList.add ('no-scroll');
        } else {
            document.body.classList.remove ('no-scroll');
        }
    }, [isNavOpen]);

    useEffect(() => {
        window.scrollTo (0, 0);
    })
    
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={`/blog/:title/:id`} element={<SinglePost />} />
            <Route path={`/author/:authorID/:authorName`} element={<AuthorPage />} />
            <Route path={`/page/category/:categoryID/:categoryName`} element={<CategoryListing />} />
        </Routes>
    );
}

export default App;
