import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import Navbar from "../components/Navbar";
import BlogHighLight from "../components/BlogHighLight";
import BlogsLists from "../components/BlogsLists";
import Footer from "../components/Footer";
import axios from "axios";
import ResponsiveNav from "../components/ResponsiveNav";

const HomePage = () => {
    const { posts, setPosts } = useTheme();

    useEffect (() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get ('https://abuthahir-19.github.io/BlogsAPI/latest-posts.json');
                const data = response.data['latest-posts'];
                // const response = await axios.request (options);
                // const data = response.data.results;
                // console.log (data);
                setPosts (data);
                localStorage.setItem ('posts', JSON.stringify (data));
            } catch (err) {
                console.error (err);
            }
        };

        fetchPosts();


    }, []);

    return (
        <main className={`dark:bg-gray-900`}>
            <div className="w-[85%] mx-auto relative x-ultra-xs:w-full ultra-xs:w-full xxs:w-full xs:w-full sm:w-full">
                <Navbar />
                <ResponsiveNav />
                <BlogHighLight />
                <p className='w-[85%] md:w-full lg:w-full xl:w-full 2xl:w-full font-bold text-2xl mt-4 text-slate-700 py-5 px-3 mx-auto dark:text-white'>Latest Posts</p>
                <BlogsLists posts={posts} />
            </div>
            <Footer />
        </main>
    )
};

export default HomePage;