import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { options } from './config/options';
import { useTheme } from './hooks/useTheme';
import axios from 'axios';
import BlogHighLight from './components/BlogHighLight';
import BlogPost from './components/BlogPost';

function App() {
    const { posts, setPosts } = useTheme();
    // const { image, category, title, date_published, author } = results[0];
    
    useEffect (() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get ('http://localhost:3500/results');
                const data = response.data;
                setPosts (data);
            } catch (er) {
                console.error (er);
            }
        };

        fetchPosts();
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <Navbar />
            <BlogHighLight />
            <p className='font-bold text-2xl mt-4 text-slate-700'>Latest Posts</p>
            
            { posts.map (post => (
                <BlogPost image={post.image} category={post.category} title={post.title} date_published={post.date_published} author={post.author} />
            ))}
            
            <Footer />
        </div>
    );
}

export default App;
