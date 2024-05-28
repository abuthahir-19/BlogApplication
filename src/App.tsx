import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";
import AuthorPage from "./pages/AuthorPage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={`/blog/:title/:id`} element={<SinglePost />} />
            <Route path={`/author/:authorname`} element={<AuthorPage />} />
        </Routes>
    );
}

export default App;
