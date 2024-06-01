import BlogHighLightImg from '../images/Image.jpg';
import { FaUserCircle } from 'react-icons/fa';

const BlogHighLight = () => {
    return (
        <section className="relative top-13 w-[85%] mx-auto box-border my-7">
            <img 
                src={BlogHighLightImg} 
                alt="This is trending topic today !"
                className="w-full relative rounded-2xl"
            />
            <div className="absolute bottom-12 px-10 sm:bottom-3 md:bottom-3 xs:bottom-3 xxs:hidden ultra-xs:hidden x-ultra-xs:hidden">
                <p className="bg-blue-500 px-4 py-1 inline-block text-white rounded-md font-medium text-lg lg:text-base md:text-sm sm:text-xs xs:text-xs xxs:text-xs ultra-xs:text-xs x-ultra-xs:text-xs">Technology</p>
                <h1 className="text-white font-bold text-4xl w-10/12 mt-6 lg:text-3xl md:text-2xl sm:text-xl xs:text-lg xxs:text-base ultra-xs:text-base x-ultra-xs:text-xs">The impact of technology on the Workplace: How Technology is Changing</h1>
                <div className='text-white flex items-center mt-6 xs:mt-3 xxs:mt-4 x-ultra-xs:mt-2'>
                    <FaUserCircle className='w-9 h-9 text-white mr-[20px] xs:w-5 xs:h-5 xxs:h-5 xxs:w-5' />
                    <p className='mr-5 xxs:text-base'>Tracey Wilson</p>
                    <p className='xxs:text-base'>August 25, 2022</p>
                </div>
            </div>
        </section>
    );
}

export default BlogHighLight;