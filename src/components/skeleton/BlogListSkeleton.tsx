import BlogPostSkeleton from "./BlogPostSkeleton";

const BlogListSkeleton = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center my-5 gap-6 w-[85%] mx-auto">
            {[...Array (20).keys()].map (i => {
                return <BlogPostSkeleton key={i} />
            })}
        </div>
    )
};

export default BlogListSkeleton;