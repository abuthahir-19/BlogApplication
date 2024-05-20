import { MdOutlineMail } from "react-icons/md";
import nextLogo from '../images/Logo2.svg';

const Footer = () => {
   
    return (
        <section className="relative">
            <div className="flex justify-between gap-5">
                <div className='w-1/3 pr-24'>
                    <div className='w-full'>
                        <h4 className='font-bold text-lg text-slate-700'>About</h4>
                        <p className='mt-3 text-base text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, eum aliquid soluta numquam quo sapiente vitae reiciendis aperiam quaerat, explicabo facilis! Inventore hic eligendi cumque totam officia corporis voluptas deleniti.</p>
                    </div>

                    <div className='w-full'>
                        <p className='mt-3 text-slate-600'><strong className='text-slate-700'>Email:</strong> info@metablog.com</p>
                        <p className='text-slate-600'><strong className='text-slate-700'>Phone:</strong> 7895426314</p>
                    </div>
                </div>

                <div className='flex w-1/3'>
                    <div className='w-full leading-8'>
                        <h4 className='font-bold text-lg text-slate-700'>Quick Link</h4>
                        <ul className='mt-3 text-slate-600'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/achived">Archived</a></li>
                            <li><a href="/author">Author</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='w-full leading-8'>
                        <h4 className='font-bold text-lg text-slate-700'>Category</h4>
                        <ul className='mt-3 text-slate-600'>
                            <li><a href="/lifestyle">LifeStyle</a></li>
                            <li><a href="/technology">Technology</a></li>
                            <li><a href="/travel">Travel</a></li>
                            <li><a href="/business">Business</a></li>
                            <li><a href="/economy">Economy</a></li>
                            <li><a href="/sports">Sports</a></li>
                        </ul>
                    </div>

                </div>
                <div className='w-1/3 text-center flex flex-col justify-center items-center'>
                    <div className='text-center w-3/4'>
                        <p className='font-extrabold text-lg text-slate-700'>Weekly Newsletter</p>
                        <p className='text-slate-600'>Get Blog articles and offer via emails</p>
                    </div>
                    <div className='w-full p-5'>
                        <div className='flex border-2 justify-between items-center rounded-md border-slate-300 mt-4'>
                            <input
                                type="text"
                                placeholder='Your Email'
                                className='outline-none border-none p-3 w-full'
                            />
                            <MdOutlineMail className='text-2xl text-slate-600 mr-2' />
                        </div>
                        <div className='cursor-pointer p-3 mt-4 bg-blue-500 rounded-md text-white font-medium'>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-12 border-slate-300' />
            <div className='py-8 flex items-center justify-between w-full'>
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
                    <ul className='flex justify-between'>
                        <li className='px-6 border-r-1 border-slate-300'><a href="/tou">Terms of Use</a></li>
                        <li className='px-6 border-r-1 border-slate-300'><a href="/pp">Privary Policy</a></li>
                        <li className='px-6'><a href="/cp">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;