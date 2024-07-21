import axios from 'axios';

const postsApi = axios.create ({
    baseURL: "https://abuthahir-19.github.io/BlogsAPI/"
});

export const delay = () => new Promise<void> (res => setTimeout (() => res(), 1800));

const getPosts = async (param: string) => {
    await delay();

    const response = await postsApi.get (`/${param}.json`);
    return response.data[param];
}

const getCategoryPosts = async (category: string) => {
    await delay ();

    const response = await postsApi.get (`/${category}.json`);
    return response.data[category];
}

export { getPosts, getCategoryPosts };