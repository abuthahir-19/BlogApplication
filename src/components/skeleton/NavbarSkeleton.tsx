const NavbarSkeleton = () => {
    return (
        <section className='w-[85%] flex justify-between items-center mx-auto px-3 py-6 x-ultra-xs:w-[85%] ultra-xs:w-[85%] xxs:w-[85%] xs:w-[85%] sm:w-[85%]'>
            <div className="bg-slate-300 w-[130px] py-5 animate-pulse rounded-md">
               
            </div>

            <nav>
                <ul className='flex text-lg font-normal x-ultra-xs:hidden ultra-xs:hidden xxs:hidden xs:hidden sm:hidden md:hidden'>
                    <li className='py-5 animate-pulse bg-slate-300 w-[100px] mx-3 rounded-md'></li>
                    <li className='py-5 animate-pulse bg-slate-300 w-[100px] mx-3 rounded-md'></li>
                    <li className='py-5 animate-pulse bg-slate-300 w-[100px] mx-3 rounded-md'></li>
                    <li className='py-5 animate-pulse bg-slate-300 w-[100px] mx-3 rounded-md'></li>
                    <li className='py-5 animate-pulse bg-slate-300 w-[100px] mx-3 rounded-md'></li>
                </ul>
            </nav>

            <div className='py-5 animate-pulse bg-slate-300 w-[170px] mx-3 rounded-md x-ultra-xs:hidden ultra-xs:hidden xxs:hidden xs:hidden sm:hidden'>

            </div>

            <div className='py-5 animate-pulse rounded-md bg-slate-300 w-[50px] mx- 3 hidden x-ultra-xs:inline-block ultra-xs:inline-block xxs:inline-block xs:inline-block sm:inline-block md:inline-block'>
            </div>
        </section>
    );
}

export default NavbarSkeleton;