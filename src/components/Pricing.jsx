import React from 'react';

const Pricing = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Simple, Transparent Pricing</h2>
            <p className='text-center text-gray-400 py-8'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='container mx-auto'>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center pb-24">

                    <div class="rounded-2xl px-8 py-10 shadow-xl flex flex-col h-128 bg-gray-100 border border-gray-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">

                        <div className='flex-1'>
                            <h2 class="text-2xl font-semibold mb-1">Starter</h2>
                            <p class="mb-6 text-gray-400">Perfect for getting started</p>


                            <div class="mb-6">
                                <span class="text-5xl font-bold">$0</span>
                                <span class="text-lg ml-1 text-gray-400">/Month</span>
                            </div>


                            <ul class="space-y-3 mb-8 text-gray-400">
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Access to all premium tools</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Basic templates</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Community support</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> 1 project per month</li>

                            </ul>
                        </div>


                        <button class=" w-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-3 rounded-full 
                   hover:bg-gray-100 transition">
                            Get Started Free
                        </button>

                    </div>
                    <div class="relative rounded-2xl px-8 py-10 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">


                        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-sm px-4 py-1 rounded-full shadow">
                            Most Popular
                        </div>


                        <h2 class="text-2xl font-semibold mb-1">Pro</h2>
                        <p class="text-white/80 mb-6">Best for professionals</p>


                        <div class="mb-6">
                            <span class="text-5xl font-bold">$29</span>
                            <span class="text-lg ml-1 text-white/80">/Month</span>
                        </div>


                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center gap-2">✔ Access to all premium tools</li>
                            <li class="flex items-center gap-2">✔ Unlimited templates</li>
                            <li class="flex items-center gap-2">✔ Priority support</li>
                            <li class="flex items-center gap-2">✔ Unlimited projects</li>
                            <li class="flex items-center gap-2">✔ Cloud sync</li>
                            <li class="flex items-center gap-2">✔ Advanced analytics</li>
                        </ul>


                        <button class="w-full bg-white text-purple-600 font-semibold py-3 rounded-full cursor-pointer">
                            Start Pro Trial
                        </button>

                    </div>
                    <div class="rounded-2xl px-8 py-10 shadow-xl flex flex-col h-128 bg-gray-100 border border-gray-200 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">

                        <div className='flex-1'>
                            <h2 class="text-2xl font-semibold mb-1">Enterprise</h2>
                            <p class="mb-6 text-gray-400">For teams and businesses</p>


                            <div class="mb-6">
                                <span class="text-5xl font-bold">$99</span>
                                <span class="text-lg ml-1 text-gray-400">/Month</span>
                            </div>


                            <ul class="space-y-3 mb-8 text-gray-400">
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Everything in Pro</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Team collaboration</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Custom integrations</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Dedicated support</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> SLA guarantee</li>
                                <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Custom branding</li>

                            </ul>
                        </div>


                        <button class=" w-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-3 rounded-full cursor-pointer">
                            Get Started Free
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;