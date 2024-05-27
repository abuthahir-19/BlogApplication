import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={`/blog/:title/:id`} element={<SinglePost />} />
        </Routes>
    );
}

export default App;
