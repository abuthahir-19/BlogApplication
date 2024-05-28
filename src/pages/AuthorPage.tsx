import { useParams } from "react-router-dom";

const AuthorPage = () => {
    const { authorname } = useParams();
    return (
        <div>
            <h1>Author Page</h1>
            <p>{`Author Name: ${authorname}`}</p>
        </div>
    );
};

export default AuthorPage;
