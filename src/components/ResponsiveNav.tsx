import { Link } from "react-router-dom";
import { IoSearch } from 'react-icons/io5'
import { Switch } from '@nextui-org/switch';
import { ChangeIcon } from "./ChangeIcon";
import { useTheme } from "../hooks/useTheme";

const ResponsiveNav = () => {
    const { isDarkMode, changeTheme } = useTheme();

    return (
        <div className="bg-white dark:bg-gray-900 w-full top-13 z-10">
            <div className="flex flex-col">
                <nav>
                    <ul className='flex flex-col text-center text-lg font-normal'>
                        <li className='py-4'><Link to="/">Home</Link></li>
                        <li className='py-4'><Link to="/blog">Blog</Link></li>
                        <li className='py-4'><Link to="/single-post">Single Post</Link></li>
                        <li className='py-4'><Link to="/pages">Pages</Link></li>
                        <li className='py-4'><Link to="/contact">contact</Link></li>
                    </ul>
                </nav>

                <div className='flex justify-between items-center px-3 my-3 bg-slate-100 dark:bg-gray-800 rounded-md w-1/4 mx-auto'>
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
                    className="mx-auto my-3"
                />
            </div>
        </div>
    );
};

export default ResponsiveNav;