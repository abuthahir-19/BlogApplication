type Author = {
    name: string;
    profile: string;
}

type BlogPostProps = {
    image: string;
    category: string;
    title: string;
    date_published: string;
    author: Author;
};

const BlogPost = ({ image, category, title, date_published, author }: BlogPostProps) => {
    return (
        <div className="flex flex-col p-2">
            <div>
                <img src={image} alt="BlogPostImage" />
            </div>
            <div>
                <p>{ category }</p>
                <h4>{ title }</h4>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;