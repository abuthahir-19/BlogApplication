import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { options } from './config/options';
import { useTheme } from './hooks/useTheme';
import axios from 'axios';
import BlogHighLight from './components/BlogHighLight';

function App() {
    const { posts, setPosts } = useTheme();

    useEffect (() => {
        async function fetchPosts () {
            try {
                const response = await axios.request (options);
                const data = response.data;
                const results = data.results;
                console.log (results);
                
                setPosts (results);
            } catch (error) {
                console.error (error);
            }
        }

        fetchPosts();
    }, [posts]);

    return (
        <div className="w-11/12 mx-auto">
            <Navbar />
            <BlogHighLight />
            <Footer />
        </div>
    );
}

export default App;
