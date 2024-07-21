const BlogPostSkeleton = () => {
    return (
        <div className="flex flex-col w-[310px] h-[430px] md:w-[320px] md:h-[440px] sm:w-[320px] sm:h-[440px] xs:w-[300px] xs:h-[420px] xxs:w-[300px] xxs:h-[420px] ultra-xs:w-[290px] ultra-xs:h-[410px] x-ultra-xs:w-[270px] x-ultra-xs:h-[390px] border-1 dark:border-slate-700 border-opacity-50 rounded-lg">
            <div className="p-3 h-1/2">
                <div className="rounded-lg h-full w-full bg-slate-300 animate-pulse"></div>
            </div>
            <div className="p-3 h-1/2 flex flex-col justify-evenly box-content">
                <div className="w-1/2">
                    <span className="py-2 bg-slate-300 rounded-md mb-3 inline-block w-full"></span>
                </div>
                <h4 className="bg-slate-300 animate-pulse w-full py-3 rounded-md"></h4>
                <h4 className="bg-slate-300 animate-pulse w-full py-3 rounded-md"></h4>
                <h4 className="bg-slate-300 animate-pulse w-1/2 py-3 rounded-md"></h4>
                <div className="flex justify-between items-center py-3">
                    <div className="flex justify-evenly items-center w-1/2">
                        <div className="w-10 h-10 md:w-7 md:h-7 sm:w-7 sm:h-7 bg-slate-300 rounded-[50%] animate-pulse"></div>
                        <p className="py-2 rounded-md bg-slate-300 animate-pulse w-1/2"></p>
                    </div>
                    <p className="bg-slate-300 animate-pulse py-2 rounded-md w-1/2"></p>
                </div>
            </div>
        </div>
    );
}

export default BlogPostSkeleton;