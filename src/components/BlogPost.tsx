import { Category } from "../contexts/AppContext";
import { getDateInfo } from "../lib/getDate";

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
        <div className="flex flex-col p-2">
            <div>
                <img src={image} alt="BlogPostImage" />
            </div>
            <div>
                <p>{ category.title }</p>
                <h4>{ title }</h4>
                <div className="flex justify-between items-center">
                    <div>
                        <img src={ author.profile } alt="Author Profile" />
                        <p>{ author.name }</p>
                    </div>
                    <p>{ getDateInfo (date_published) }</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;