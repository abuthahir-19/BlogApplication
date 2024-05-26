import { Category } from "../contexts/AppContext";
import { getDateInfo } from "../lib/getDate";
import { FaUserCircle } from 'react-icons/fa';

type Author = {
    name: string;
    profile: string;
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
        <div className="flex flex-col w-[360px] h-auto border-1 dark:border-slate-700 border-opacity-50 rounded-lg">
            <div className="p-3 h-1/2">
                <img className="rounded-lg h-full w-full" src={image} alt="BlogPostImage" />
            </div>
            <div className="p-3 h-1/2 flex flex-col justify-evenly">
                <div>
                    <span className="px-3 py-1 bg-blue-100 rounded-lg text-blue-600 mb-3 font-medium inline-block dark:bg-blue-800 dark:bg-opacity-15 dark:text-blue-500">{category.title}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-700 py-3 dark:text-white">{title}</h4>
                <div className="flex justify-between items-center py-3">
                    <div className="flex justify-between items-center">
                        {author.profile ? (
                            <img className="w-9 h-9 mr-2" src={author.profile} alt="Author Profile" />
                        ) : (
                            <FaUserCircle className="w-7 h-7 mr-2" />
                        )}
                        <p className="font-semibold text-slate-400">{author.name}</p>
                    </div>
                    <p className="font-normal text-slate-400">{getDateInfo(date_published)}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;