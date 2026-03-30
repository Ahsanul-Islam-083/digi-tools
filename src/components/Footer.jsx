import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='container mx-auto'>
                <footer className="footer sm:footer-horizontal text-gray-300 p-10 md:py-10">
                    <aside>
                        <h2 className='text-4xl font-bold text-gray-200'>DigiTools</h2>
                        <p className='max-w-96'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Careers</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a className=' rounded-full p-1 bg-white'>
                                <AiFillInstagram  className='text-[#101727] text-2xl'/>
                            </a>
                            <a className=' rounded-full p-1 bg-white'>
                               <FaSquareFacebook className='text-[#101727] text-2xl' />
                            </a>
                            <a className=' rounded-full p-1 bg-white'>
                                <FaXTwitter className='text-[#101727] text-2xl' />
                            </a>
                        </div>
                    </nav>
                </footer>
                <footer className=" text-gray-300 border-gray-700 border-t p-10 md:py-4 ">
                    <div className='flex justify-between items-center flex-wrap text-sm'>
                        <p>© {new Date().getFullYear()} Digitools. All right reserved</p>
                        <ul className='flex justify-between items-center gap-4 flex-wrap'>
                            <li>Privacy Policy</li>
                            <li> Terms of Service </li>
                            <li> Cookies</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;