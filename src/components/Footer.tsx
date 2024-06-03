import { MdOutlineMail } from "react-icons/md";
import nextLogo from '../images/Logo2.svg';
import { Link } from "react-router-dom";

const Footer = () => {
   
    return (
        <section className="relative mt-24 pt-12 bg-slate-100 dark:bg-gray-950">
            <div className="flex justify-between sm:justify-center md:justify-center gap-5 w-[85%] mx-auto x-ultra-xs:flex-wrap ultra-xs:flex-wrap xxs:flex-wrap xs:flex-wrap sm:flex-wrap md:flex-wrap">
                <div className='w-1/3 pr-24 x-ultra-xs:pr-0 x-ultra-xs:w-full ultra-xs:pr-0 ultra-xs:w-full xxs:pr-0 xxs:w-full xs:pr-0 xs:w-full sm:w-full md:w-full'>
                    <div className='w-full'>
                        <h4 className='font-bold text-lg text-slate-700 dark:text-white'>About</h4>
                        <p className='mt-3 text-base text-slate-600 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, eum aliquid soluta numquam quo sapiente vitae reiciendis aperiam quaerat, explicabo facilis! Inventore hic eligendi cumque totam officia corporis voluptas deleniti.</p>
                    </div>

                    <div className='w-full'>
                        <p className='mt-3 text-slate-600 dark:text-gray-400'><strong className='text-slate-700 dark:text-white'>Email:</strong> info@metablog.com</p>
                        <p className='text-slate-600 dark:text-gray-400'><strong className='text-slate-700 dark:text-white'>Phone:</strong> 7895426314</p>
                    </div>
                </div>

                <div className='flex w-1/3 x-ultra-xs:w-full ultra-xs:w-full xxs:w-full xs:w-full sm:w-full md:w-full'>
                    <div className='w-full leading-8'>
                        <h4 className='font-bold text-lg text-slate-700 dark:text-white'>Quick Link</h4>
                        <ul className='mt-3 text-slate-600 dark:text-gray-400'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/achived">Archived</Link></li>
                            <li><Link to="/author">Author</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='w-full leading-8'>
                        <h4 className='font-bold text-lg text-slate-700 dark:text-white'>Category</h4>
                        <ul className='mt-3 text-slate-600 dark:text-gray-400'>
                            <li><Link to="/lifestyle">LifeStyle</Link></li>
                            <li><Link to="/technology">Technology</Link></li>
                            <li><Link to="/travel">Travel</Link></li>
                            <li><Link to="/business">Business</Link></li>
                            <li><Link to="/economy">Economy</Link></li>
                            <li><Link to="/sports">Sports</Link></li>
                        </ul>
                    </div>

                </div>
                <div className='w-[380px] text-center flex flex-col justify-center items-center p-5 x-ultra-xs:px-0 ultra-xs:px-0 xxs:px-0 xs:px-0 sm:px-0 md:px-0 bg-white dark:bg-slate-900 rounded-xl'>
                    <div className='text-center w-3/4'>
                        <p className='font-extrabold text-lg x-ultra-xs:text-base ultra-xs:text-base xxs:text-base xs:text-base sm:text-base md:text-base text-slate-700 dark:text-white'>Weekly Newsletter</p>
                        <p className='text-slate-600 dark:text-gray-400'>Get Blog articles and offer via emails</p>
                    </div>
                    <div className='w-full p-5 x-ultra-xs:p-3 ultra-xs:p-3 xxs:p-3 xs:p-3 sm:p-3 md:p-3'>
                        <div className='flex border-1 justify-between items-center rounded-md border-slate-300 mt-4 dark:bg-gray-950 dark:border-slate-500'>
                            <input
                                type="text"
                                placeholder='Your Email'
                                className='outline-none border-none py-3 ml-3 w-full dark:bg-gray-950'
                            />
                            <MdOutlineMail className='text-2xl text-slate-600 mr-2' />
                        </div>
                        <div className='cursor-pointer p-3 x-ultra-xs:p-2 ultra-xs:p-2 xxs:p-2 xs:p-2 sm:p-2 md:p-2 mt-4 bg-blue-500 rounded-md text-white font-medium'>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-12 border-slate-300 w-[85%] mx-auto dark:border-slate-600' />
            <div className='py-8 flex items-center justify-between sm:justify-center w-[85%] mx-auto x-ultra-xs:flex-wrap-reverse x-ultra-xs:gap-y-3 ultra-xs:flex-wrap-reverse ultra-xs:gap-y-3 xxs:flex-wrap-reverse xxs:gap-y-3 xs:flex-wrap-reverse xs:gap-y-3 sm:flex-wrap-reverse sm:gap-y-3'>
                <div className='flex gap-3'>
                    <img 
                        src={nextLogo}
                        alt='MetaBlog Logo'
                    />
                    <div>
                        <p>Meta<strong>Blog</strong></p>
                        <p>&copy;MetaBlog 2023. All Rights Reserved. </p>
                    </div>
                </div>

                <div className='box-border'>
                    <ul className='flex justify-between x-ultra-xs:flex-wrap x-ultra-xs:justify-center ultra-xs:flex-wrap ultra-xs:justify-center xxs:flex-wrap xxs:justify-center sm:flex-wrap sm:justify-center'>
                        <li className='px-6 border-r-1 border-slate-300 x-ultra-xs:border-r-0 x-ultra-xs:py-2 ultra-xs:border-r-0 ultra-xs:py-2 xxs:border-r-0 xxs:py-2 xs:border-r-0 xs:py-2 sm:border-r-0 sm:py-2'><Link to="/tou">Terms of Use</Link></li>
                        <li className='px-6 border-r-1 border-slate-300 x-ultra-xs:border-r-0 x-ultra-xs:py-2 ultra-xs:border-r-0 ultra-xs:py-2 xxs:border-r-0 xxs:py-2 xs:border-r-0 xs:py-2 sm:border-r-0 sm:py-2'><Link to="/pp">Privary Policy</Link></li>
                        <li className='px-6 x-ultra-xs:py-2 ultra-xs:py-2 xxs:py-2 xs:py-2 sm:py-2'><Link to="/cp">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;