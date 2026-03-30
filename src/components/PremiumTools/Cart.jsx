import React from 'react';

const Cart = () => {
    return (
        <div className='p-10 border border-gray-100 rounded-2xl'>
            <h2 className='text-2xl font-bold'>Your Cart</h2>
            <div className='space-y-4 '>
                <div className='flex justify-between items-center bg-base-200 p-5 rounded-2xl'>
                    <div className='flex items-center gap-4'>

                        <div className='flex'>
                            <div className='p-4 border border-gray-200 rounded-full'><img className='h-10' src='' alt="" /></div>
                        </div>

                        <div>
                            <h5 className='text-xl font-semibold'>AI Writing Pro</h5>
                            <p className='text-gray-400'>$29</p>
                        </div>
                    </div>
                    <button className='btn btn-ghost text-pink-600'>Remove</button>
                </div>
            </div>
            <div className='flex justify-between items-center py-6'>
                <h2 className='text-2xl text-gray-400 font-bold'>Total:</h2>
                <h2 className='text-2xl font-bold'>$78</h2>
            </div>
            <button className='btn h-14 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-lg'>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;