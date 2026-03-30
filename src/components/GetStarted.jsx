import React from 'react';
import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className='container mx-auto p-2 md:p-0 py-24'>
            <h2 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h2>
            <p className='text-center text-gray-400 py-8'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='border border-gray-100 shadow rounded-2xl px-5 py-16 transform transition duration-300 hover:scale-105 relative'>
                    <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] badge-md rounded-full absolute top-2 right-2 py-4.5 text-white">01</div>
                   <div className='flex justify-center items-center mb-4'>
                        <div className='bg-[#E1E7FF] p-5 rounded-full'><img src={userImg} alt="" /></div>
                    </div>
                    <h3 className='text-2xl text-center font-bold'>Create Account</h3>
                    <p className='text-center text-gray-400 py-4'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='border border-gray-100 shadow rounded-2xl px-5 py-16 transform transition duration-300 hover:scale-105 relative'>
                    <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] badge-md rounded-full absolute top-2 right-2 py-4.5 text-white">02</div>
                    <div className='flex justify-center items-center mb-4'>
                        <div className='bg-[#E1E7FF] p-5 rounded-full'><img src={packageImg} alt="" /></div>
                    </div>
                    <h3 className='text-2xl text-center font-bold'>Choose Products</h3>
                    <p className='text-center text-gray-400 py-4'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='border border-gray-100 shadow rounded-2xl px-5 py-16 transform transition duration-300 hover:scale-105 relative'>
                    <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] badge-md rounded-full absolute top-2 right-2 py-4.5 text-white">03</div>
                    <div className='flex justify-center items-center mb-4'>
                        <div className='bg-[#E1E7FF] p-5 rounded-full'><img src={rocketImg} alt="" /></div>
                    </div>
                    <h3 className='text-2xl text-center font-bold'>Start Creating</h3>
                    <p className='text-center text-gray-400 py-4'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;