import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResponsiveNav from "../components/ResponsiveNav";
import Footer from "../components/Footer";
import BlogsLists from "../components/BlogsLists";
import { useEffect } from "react";
import useSWR from "swr";
import { Post } from "../contexts/AppContext";
import { getCategoryPosts } from "../api/postsApi";

const CategoryListing = () => {
    // const [CategoryPosts, setCategoryPosts] = useState ([]);

    let { categoryName } = useParams();
    categoryName = categoryName?.toLowerCase();
    let spacecheck = categoryName?.split(' ');
    if (spacecheck?.length! > 1) {
        categoryName = categoryName?.split(' ').join('-');
    }

    const {
        data: posts
    } = useSWR<Post[]> (
        '/',
        _ => getCategoryPosts (categoryName as string), {
            suspense: true,
        }
    );

    console.log (posts);
    
    // useEffect(() => {
    //     const fetchCategory = async () => {
    //         try {
    //             const response = await axios.get (`https://abuthahir-19.github.io/BlogsAPI/${categoryName}.json`)
    //             const data = response.data[categoryName as string];
    //             setCategoryPosts (data);
    //         } catch (err) {
    //             console.error (err);
    //         }
    //     };

    //     fetchCategory();
    // });
    
    useEffect (() => {
        window.scrollTo (0, 0);
    }, [])

    return (
        <section className="dark:bg-slate-900">
            <div className="w-[85%] mx-auto">
                <Navbar />
                <ResponsiveNav />
                {/* <p className='w-[85%] md:w-full lg:w-full xl:w-full 2xl:w-full font-bold text-2xl mt-4 text-slate-700 py-5 px-3 mx-auto dark:text-white'>{categoryName}</p> */}
                <BlogsLists posts={posts} />
            </div>
            <Footer />
        </section>
    );
}

export default CategoryListing;