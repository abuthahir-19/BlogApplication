import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Post } from "../contexts/AppContext";
import { FaUserCircle } from 'react-icons/fa';
import { getDateInfo } from "../lib/getDate";
import TechnologyImg from '../images/technology.jpg';

const SinglePost = () => {
    const { title, id } = useParams();
    const [currBlog, setCurrBlog] = useState<Post | undefined>(undefined);

    useEffect(() => {
        ;
        const posts: Post[] = JSON.parse(localStorage.getItem('posts') as string);
        setCurrBlog (posts.find(post => post.id + "" === (id as string)))
        
        console.log(currBlog);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="dark:bg-gray-900">
            <div className="w-[85%] mx-auto">
                <Navbar />
                <p className="bg-blue-500 px-[10px] py-[3px] inline-block text-white rounded-md font-medium text-medium mt-4">{currBlog?.category.title}</p>
                <h1 className="text-4xl font-bold text-slate-800 mt-4 dark:text-white">{currBlog?.title}</h1>
                <div className="flex justify-between items-center py-3 w-1/3 mt-4">
                    <div className="flex justify-between items-center">
                        {currBlog?.author.profile ? (
                            <img className="w-9 h-9 mr-2" src={currBlog.author.profile} alt="Author Profile" />
                        ) : (
                            <FaUserCircle className="w-7 h-7 mr-2" />
                        )}
                        <p className="font-semibold text-slate-400">{currBlog?.author.name}</p>
                    </div>
                    <p className="font-normal text-slate-400">{getDateInfo(currBlog?.date_published as string)}</p>
                </div>

                <img 
                    src={TechnologyImg} 
                    alt="Blog Image" 
                    className="mt-4 rounded-xl"
                />

                <p className="text-xl mt-8 leading-[38px]">{ currBlog?.body }</p>
            </div>
            <Footer />
        </main>
    );
};

export default SinglePost;