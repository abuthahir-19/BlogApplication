import AppLogoLight from '../images/Logo.svg';
import AppLogoDark from '../images/LogoDark.svg';
import { IoSearch } from "react-icons/io5";
import { Switch } from '@nextui-org/switch';
import { ChangeIcon } from './ChangeIcon';
import { useTheme } from '../hooks/useTheme';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">
                <img
                    src={ isDarkMode ? AppLogoDark : AppLogoLight }
                    alt='Something sample'
                    width={130}
                    height={130}
                />
            </Link>

            <nav>
                <ul className='flex text-lg font-normal'>
                    <li className='px-4 py-1'><Link to="/">Home</Link></li>
                    <li className='px-4 py-1'><Link to="/blog">Blog</Link></li>
                    <li className='px-4 py-1'><Link to="/single-post">Single Post</Link></li>
                    <li className='px-4 py-1'><Link to="/pages">Pages</Link></li>
                    <li className='px-4 py-1'><Link to="/contact">contact</Link></li>
                </ul>
            </nav>

            <div className='flex items-center justify-between w-[30%]'>
                <div className='flex justify-between items-center px-3 bg-slate-100 dark:bg-gray-800 rounded-md'>
                    <input
                        className='bg-slate-100 dark:bg-gray-800 outline-none bg-none py-2 px-3'
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