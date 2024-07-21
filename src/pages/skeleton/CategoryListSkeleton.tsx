import BlogListSkeleton from "../../components/skeleton/BlogListSkeleton";
import NavbarSkeleton from "../../components/skeleton/NavbarSkeleton";

const CategoryListSkeleton = () => {
    return (
        <div>
            <NavbarSkeleton />
            <BlogListSkeleton />
        </div>
    );
};

export default CategoryListSkeleton;