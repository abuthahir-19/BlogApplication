import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Post } from "../contexts/AppContext";
import { FaUserCircle } from 'react-icons/fa';
import { getDateInfo } from "../lib/getDate";
import Technology from '../images/technology.jpg';
import { useTheme } from "../hooks/useTheme";
import ResponsiveNav from "../components/ResponsiveNav";

const SinglePost = () => {
    const { id } = useParams();
    const [currBlog, setCurrBlog] = useState<Post | undefined>(undefined);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const posts: Post[] = JSON.parse(localStorage.getItem('posts') as string);
        setCurrBlog(posts.find(post => post.id + "" === (id as string)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect (() => {
        if (isDarkMode === true) {
            document.getElementById ("excerpt")?.classList.add ("experpt");
            document.getElementById ("excerpt")?.classList.remove ("experpt-light");

        } else {
            document.getElementById ("excerpt")?.classList.add ("experpt-light");
            document.getElementById ("excerpt")?.classList.remove ("experpt");
        }
    }, [isDarkMode]);

    return (
        <main className="dark:bg-gray-900">
            <div className="w-[85%] mx-auto x-ultra-xs:w-full">
                <Navbar />
                <ResponsiveNav />
                <section className="w-2/3 mx-auto x-ultra-xs:w-[90%] ultra-xs:w-[95%]">
                    <p className="bg-blue-500 px-[10px] py-[3px] inline-block text-white rounded-md font-medium text-medium mt-4 x-ultra-xs:text-sm ultra-xs:text-sm">{currBlog?.category.title}</p>
                    <h1 className="text-4xl x-ultra-xs:text-lg ultra-xs:text-lg font-bold text-slate-800 mt-4 dark:text-white">{currBlog?.title}</h1>
                    <div className="flex justify-between items-center py-3 w-[45%] x-ultra-xs:w-full ultra-xs:w-full mt-4">
                        <Link to={`/author/${currBlog?.author.id}/${currBlog?.author.name}`}>
                            <div className="flex justify-between items-center">
                                {currBlog?.author.profile ? (
                                    <img className="w-9 h-9 mr-2" src={currBlog.author.profile} alt="Author Profile" />
                                ) : (
                                    <FaUserCircle className="w-7 h-7 mr-2" />
                                )}
                                <p className="font-semibold text-slate-400 x-ultra-xs:text-sm ultra-xs:text-sm">{currBlog?.author.name}</p>
                            </div>
                        </Link>
                        <p className="font-normal text-slate-400 x-ultra-xs:text-sm ultra-xs:text-sm">{getDateInfo(currBlog?.date_published as string)}</p>
                    </div>

                    <img
                        src={ Technology }
                        alt="Blog Background"
                        className="mt-4 rounded-xl w-full bg-center"
                    />

                    <p className="text-xl x-ultra-xs:text-lg ultra-xs:text-lg mt-8 leading-[38px]">{currBlog?.body}</p>
                    <div id="excerpt" className="p-5 mt-6 rounded-xl bg-slate-100 shadow-white dark:bg-gray-800">
                        <p className="italic text-xl x-ultra-xs:text-lg ultra-xs:text-lg leading-[38px]">{` "${currBlog?.excerpt}" `}</p>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default SinglePost;