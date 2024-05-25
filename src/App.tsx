import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useTheme } from './hooks/useTheme';
import axios from 'axios';
import BlogHighLight from './components/BlogHighLight';
import BlogsLists from './components/BlogsLists';

function App() {
    const { posts, setPosts } = useTheme();
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3500/latest-posts');
                const data = response.data;
                setPosts(data);
            } catch (er) {
                console.error(er);
            }
        };

        fetchPosts();
        //eslint-disable-next-line
    }, [])

    return (
        <main className="dark:bg-gray-900">
            <div className="w-[85%] mx-auto">
                <Navbar />
                <BlogHighLight />
                 <p className='font-bold text-2xl mt-4 text-slate-700 py-5 px-3 mx-auto dark:text-white'>Latest Posts</p>
                <BlogsLists posts={posts} />
            </div>
            <Footer />
        </main>
    );
}

export default App;
