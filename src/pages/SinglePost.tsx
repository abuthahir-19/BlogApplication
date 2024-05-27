import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { Post } from "../contexts/AppContext";

const SinglePost = () => {
    const { title, id } = useParams();
    const currBlog = useRef<Post | undefined> (undefined);

    useEffect (() => {;
        const posts: Post[] = JSON.parse (localStorage.getItem ('posts') as string);
        currBlog.current = (posts.find (post => post.id+"" === (id as string)))

        console.log (currBlog);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="dark:bg-gray-900">
            <div className="w-[85%] mx-auto">
                <Navbar />
                <p>{`Title: ${title}`}</p>
                <p>{`Blog ID: ${id}`}</p>
                Single Post Page
            </div>
            <Footer />
        </main>
    );
};

export default SinglePost;