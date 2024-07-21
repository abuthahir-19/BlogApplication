import BlogHighLightSkeleton from "../../components/skeleton/BlogHighLightSkeleton";
import BlogListSkeleton from "../../components/skeleton/BlogListSkeleton";
import NavbarSkeleton from "../../components/skeleton/NavbarSkeleton";

const HomePageSkeleton = () => {
    return (
        <div className="dark:bg-gray-900">
            <NavbarSkeleton />
            <BlogHighLightSkeleton />
            <BlogListSkeleton />
        </div>
    );
}

export default HomePageSkeleton;