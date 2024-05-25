import BlogHighLightImg from '../images/Image.jpg';
import { FaUserCircle } from 'react-icons/fa';

const BlogHighLight = () => {
    return (
        <section className="relative w-full box-border my-7">
            <img 
                src={BlogHighLightImg} 
                alt="This is trending topic today !"
                className="w-full relative rounded-2xl"
            />
            <div className="absolute bottom-14 px-10">
                <p className="bg-blue-500 px-4 py-1 inline-block text-white rounded-md font-medium text-lg">Technology</p>
                <h1 className="text-white font-bold text-4xl w-10/12 mt-6">The impact of technology on the Workplace: How Technology is Changing</h1>
                <div className='text-white flex items-center mt-6'>
                    <FaUserCircle style={{ height: '40px', width: '40px', color: 'white', marginRight: '20px' }} />
                    <p className='mr-5'>Tracey Wilson</p>
                    <p>August 25, 2022</p>
                </div>
            </div>
        </section>
    );
}

export default BlogHighLight;