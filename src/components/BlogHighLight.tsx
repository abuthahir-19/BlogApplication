import BlogHighLightImg from '../images/Image.jpg';
import { CgProfile } from 'react-icons/cg';

const BlogHighLight = () => {
    return (
        <section className="relative">
            <img 
                src={BlogHighLightImg} 
                alt="This is trending topic today !"
                // style={{ height: '80%'}}
            />
            <div className="absolute top-1/2 px-10">
                <p className="bg-blue-500 px-4 py-1 inline-block text-white rounded-md font-medium text-lg">Technology</p>
                <h1 className="text-white font-bold text-5xl w-10/12 mt-6">The impact of technology on the Workplace: How Technology is Changing</h1>
                <CgProfile />
            </div>
        </section>
    );
}

export default BlogHighLight;