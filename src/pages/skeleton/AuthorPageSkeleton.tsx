import AuthorDetailsSkeleton from "../../components/skeleton/AuthorDetailsSkeleton";
import BlogListSkeleton from "../../components/skeleton/BlogListSkeleton";
import NavbarSkeleton from "../../components/skeleton/NavbarSkeleton";

const AuthorPageSkeleton = () => {
    return (
        <>
            <div className="w-[85%] mx-auto">
                <NavbarSkeleton />
                <AuthorDetailsSkeleton />
            </div>
            <BlogListSkeleton />
        </>
    );
};

export default AuthorPageSkeleton;