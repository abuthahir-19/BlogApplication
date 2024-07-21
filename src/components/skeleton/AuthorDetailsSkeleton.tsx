const AuthorDetailsSkeleton = () => {
    return (
        <div className="bg-slate-100 py-6 px-3 dark:bg-slate-800 rounded-lg mt-4">
            <div className="flex justify-center items-center w-full mx-auto">
                <div className="w-14 h-14 mr-2 bg-slate-300 animate-pulse rounded-[50%]">
                    
                </div>
                <div className="flex flex-col justify-between h-10">
                    <p className="bg-slate-300 w-36 rounded-md animate-pulse py-2"></p>
                    <p className="bg-slate-300 w-28 rounded-md animate-pulse py-2"></p>
                </div>
            </div>
            <div className="w-full lg:w-4/5 xl:w-4/5 2xl:w-4/5 mx-auto text-center p-2 mt-3 bg-slate-300 rounded-md animate-pulse"></div>
            <div className="w-[85%] lg:w-4/5 xl:w-4/5 2xl:w-4/5 mx-auto text-center p-2 mt-3 bg-slate-300 rounded-md animate-pulse"></div>
            <div className="w-full lg:w-4/5 xl:w-1/2 2xl:w-4/5 mx-auto text-center p-2 mt-3 bg-slate-300 rounded-md animate-pulse"></div>

            <div className="flex justify-evenly items-center w-full md:w-3/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 mt-4 mx-auto">
                <div className="w-10 h-10 bg-slate-300 rounded-md animate-pulse"></div>
                <div className="w-10 h-10 bg-slate-300 rounded-md animate-pulse"></div>
                <div className="w-10 h-10 bg-slate-300 rounded-md animate-pulse"></div>
                <div className="w-10 h-10 bg-slate-300 rounded-md animate-pulse"></div>
            </div>
        </div>
    );
};

export default AuthorDetailsSkeleton;