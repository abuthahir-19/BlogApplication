import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";
import AuthorPage from "./pages/AuthorPage";
import { useTheme } from "./hooks/useTheme";
import { Suspense, useEffect } from "react";
import CategoryListing from "./pages/CategoryListing";
import HomePageSkeleton from "./pages/skeleton/HomePageSkeleton";
import AuthorPageSkeleton from "./pages/skeleton/AuthorPageSkeleton";
import CategoryListSkeleton from "./pages/skeleton/CategoryListSkeleton";

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

    const homepage = (
        <Suspense fallback={<HomePageSkeleton />}>
            <HomePage />
        </Suspense>
    );

    const authorPage = (
        <Suspense fallback={<AuthorPageSkeleton />}>
            <AuthorPage />
        </Suspense>
    );

    const categoryList = (
        <Suspense fallback={<CategoryListSkeleton />}>
            <CategoryListing />
        </Suspense>
    );

    return (
        <Routes>
            <Route path="/" element={homepage} />
            <Route path={`/blog/:title/:id`} element={<SinglePost />} />
            <Route path={`/author/:authorID/:authorName`} element={authorPage} />
            <Route path={`/page/category/:categoryID/:categoryName`} element={categoryList} />
        </Routes>
    );
}

export default App;