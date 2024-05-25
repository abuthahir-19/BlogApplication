import AppLogoLight from '../images/Logo.svg';
import AppLogoDark from '../images/LogoDark.svg';
import { IoSearch } from "react-icons/io5";
import { Switch } from '@nextui-org/switch';
import { ChangeIcon } from './ChangeIcon';
import { useTheme } from '../hooks/useTheme';
import { useEffect } from 'react';

const Navbar = () => {
    const { isDarkMode, changeTheme } = useTheme();

    useEffect (() => {
        if (isDarkMode === true) {
            document.documentElement.classList.add ("dark");
        } else {
            document.documentElement.classList.remove ("dark");
        }
    }, [isDarkMode]);

    return (
        <section className='flex justify-between items-center mx-auto px-3 py-6 w-full'>
            <a href="/">
                <img
                    src={ isDarkMode ? AppLogoDark : AppLogoLight }
                    alt='Something sample'
                    width={130}
                    height={130}
                />
            </a>

            <nav>
                <ul className='flex text-lg font-normal'>
                    <li className='px-4 py-1'><a href="/">Home</a></li>
                    <li className='px-4 py-1'><a href="/blog">Blog</a></li>
                    <li className='px-4 py-1'><a href="/single-post">Single Post</a></li>
                    <li className='px-4 py-1'><a href="/pages">Pages</a></li>
                    <li className='px-4 py-1'><a href="/contact">contact</a></li>
                </ul>
            </nav>

            <div className='flex items-center justify-between w-[30%]'>
                <div className='flex justify-between items-center px-3 dark:bg-gray-800 rounded-md'>
                    <input
                        className='dark:bg-gray-800 outline-none bg-none py-2 px-3'
                        type="text"
                        placeholder='Search'
                    />
                    <IoSearch
                        className='text-2xl cursor-pointer text-slate-700'
                    />
                </div>
                <Switch
                    size='sm'
                    color='primary'
                    thumbIcon={ChangeIcon}
                    onClick={changeTheme}
                />
            </div>
        </section>
    )
}

export default Navbar;