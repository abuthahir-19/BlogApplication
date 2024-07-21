import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Post } from "../contexts/AppContext";
import { Author } from "../components/BlogPost";
import AuthorDetails from "../components/AuthorDetails";
import BlogsLists from "../components/BlogsLists";
// import { useTheme } from "../hooks/useTheme";
import ResponsiveNav from "../components/ResponsiveNav";
import useSWR from "swr";
import { getPosts } from "../api/postsApi";

const AuthorPage = () => {
    const { authorID } = useParams();
    const [author, setAuthor] = useState<Author | undefined>(undefined);
    // const { posts, setPosts } = useTheme();

    useEffect(() => {
        const posts: Post[] = JSON.parse(localStorage.getItem('posts') as string);
        const currAuthor = posts.find(post => post.author.id + "" === (authorID as string))?.author;

        setAuthor(currAuthor);

        // console.log (currAuthor);
    }, [authorID]);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const {
        data: posts
    } = useSWR<Post[]> (
        '/',
        _ => getPosts ('latest-posts'), {
            suspense: true,
        }
    )

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3500/latest-posts');
    //             const data = response.data;
    //             setPosts(data);
    //             localStorage.setItem('posts', JSON.stringify(data));
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };

    //     fetchPosts();

    // }, [posts, setPosts]);

    return (
        <section className="dark:bg-slate-900">
            <div className="w-[85%] mx-auto">
                <Navbar />
                <ResponsiveNav />
                <AuthorDetails author={author} />
                <BlogsLists posts={posts} />
            </div>
            <Footer />
        </section>
    );
};

export default AuthorPage;
