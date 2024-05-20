import nextLogo from '../images/Logo.svg';
import { IoSearch } from "react-icons/io5";
import { Switch } from '@nextui-org/switch';
import { ChangeIcon } from './ChangeIcon';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const { isDarkMode, changeTheme } = useTheme();

    return (
        <section className='flex justify-between items-center mx-auto p-3 w-full'>
            <a href="/">
                <img
                    src={nextLogo}
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

            <div className='flex items-center justify-between w-1/4'>
                <div className='w-1/2'>
                    <input
                        className='outline-none bg-none p-4'
                        type="text"
                        placeholder='Search'
                    />
                </div>
                <IoSearch
                    className='text-2xl cursor-pointer'
                />
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