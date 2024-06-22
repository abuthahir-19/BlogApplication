import { Link } from "react-router-dom";
import { Category } from "../contexts/AppContext";
import { getDateInfo } from "../lib/getDate";
import { FaUserCircle } from 'react-icons/fa';

export type Author = {
    id: number;
    role: string;
    name: string;
    profile: string;
    about_me: string;
    linkedin: string;
    instagram: string;
    twitter: string;
    youtube: string;
}

type BlogPostProps = {
    image: string;
    category: Category;
    title: string;
    date_published: string;
    author: Author;
};

const BlogPost = ({ image, category, title, date_published, author }: BlogPostProps) => {
    return (
        <div className="flex flex-col w-[320px] h-[480px] md:w-[320px] md:h-[440px] sm:w-[320px] sm:h-[440px] xs:w-[300px] xs:h-[420px] xxs:w-[300px] xxs:h-[420px] ultra-xs:w-[290px] ultra-xs:h-[410px] x-ultra-xs:w-[270px] x-ultra-xs:h-[390px] border-1 dark:border-slate-700 border-opacity-50 rounded-lg">
            <div className="p-3 h-1/2">
                <img className="rounded-lg h-full w-full" src={image} alt="BlogPostImage" />
            </div>
            <div className="p-3 h-1/2 flex flex-col justify-between box-content">
                    <div>
                        <Link to={`/page/category/${category.id}/${category.title}`}>
                            <span className="px-3 py-1 bg-blue-100 rounded-lg text-blue-600 mb-3 font-medium inline-block dark:bg-blue-800 dark:bg-opacity-15 dark:text-blue-500 text-sm sm:text-sm xs:text-sm xxs:text-sm ultra-xs:text-sm x-ultra-xs:text-xs">{category.title}</span>
                        </Link>
                    </div>
                <h4 className="text-lg md:text-lg sm:text-base xs:text-base xxs:text-base ultra-xs:text-base x-ultra-xs:text-base font-bold text-slate-700 py-3 dark:text-white">{title}</h4>
                <div className="flex justify-between items-center py-3">
                    <Link to={`/author/${author.id}/${author.name}`}>
                        <div className="flex justify-between items-center">
                            {author.profile ? (
                                <img className="w-9 h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 mr-2" src={author.profile} alt="Author Profile" />
                            ) : (
                                <FaUserCircle className="w-7 h-7 mr-2" />
                            )}
                            <p className="font-semibold text-sm md:text-base sm:text-sm xs:text-sm xxs:text-sm ultra-xs:text-sm x-ultra-xs:text-sm text-slate-400">{author.name}</p>
                        </div>
                    </Link>
                    <p className="font-normal text-slate-400 text-sm sm:text-sm xs:text-sm xxs:text-sm ultra-xs:text-sm x-ultra-xs:text-sm">{getDateInfo(date_published)}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;