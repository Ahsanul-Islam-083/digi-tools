import React from 'react';
import bannerImg from "../assets/banner.png";
import playImg from '../assets/Play.png';
import badgeImg from '../assets/Group 5.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-192">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                    />
                    <div>
                        <div className='flex'>
                            <p className='py-2 px-4 rounded-full flex items-center gap-2 bg-[#E1E7FF]'> <img className='h-4' src={badgeImg} /> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span></p>
                        </div>
                        <h1 className="text-6xl font-extrabold py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Supercharge Your Digital Workflow </h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                        </p>

                        <div className='space-x-4'>
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
                            <button className="btn btn-outline btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> <img src={playImg} alt="" /> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
