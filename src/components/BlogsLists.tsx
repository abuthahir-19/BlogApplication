import { Post } from "../contexts/AppContext";
import BlogPost from "./BlogPost";

type BlogsListsProps = {
    posts: Post[]
}
const BlogsLists = ({ posts }: BlogsListsProps) => {
    return (
        <div className="flex flex-row flex-wrap justify-evenly my-5 gap-6 w-full">
            { posts.map (post => (
                <BlogPost 
                    key={post.id}
                    image={post.image} 
                    category={post.category}   
                    title={post.title}
                    date_published={post.date_published}
                    author={post.author}
                />
            ))}
        </div>
    )
};

export default BlogsLists;