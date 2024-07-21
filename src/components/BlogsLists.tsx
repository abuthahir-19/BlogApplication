import { Link } from "react-router-dom";
import { Post } from "../contexts/AppContext";
import BlogPost from "./BlogPost";

type BlogsListsProps = {
    posts: Post[] | undefined;
}

const BlogsLists = ({ posts }: BlogsListsProps) => {
    return (
        <div className="flex flex-row flex-wrap justify-center my-5 gap-6 w-full">
            { posts?.map ((post: Post) => (
                <Link to={`/blog/${post.title.split("").filter (c => c !== '?').join('')}/${post.id}`} key={post.id}>
                    <BlogPost
                        image={post.image} 
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