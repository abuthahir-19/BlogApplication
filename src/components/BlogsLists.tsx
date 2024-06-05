import { Link } from "react-router-dom";
import { Post } from "../contexts/AppContext";
import BlogPost from "./BlogPost";
import Technology from '../images/technology.jpg';

type BlogsListsProps = {
    posts: Post[]
}

const BlogsLists = ({ posts }: BlogsListsProps) => {
    return (
        <div className="flex flex-row flex-wrap justify-center my-5 gap-6 w-full">
            { posts.map (post => (
                <Link to={`/blog/${post.title.split("").filter (c => c !== '?').join('')}/${post.id}`} key={post.id}>
                    <BlogPost
                        image={Technology} 
                        category={post.category}   
                        title={post.title}
                        date_published={post.date_published}
                        author={post.author}
                    />
                </Link>
            ))}
        </div>
    )
};

export default BlogsLists;