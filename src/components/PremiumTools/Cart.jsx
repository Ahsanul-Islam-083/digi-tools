import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    // console.log(cart);
    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const handlePayment =()=>{
        setCart([]);
        toast.success("Payment successful");
    }
    

    return (
        <div className='p-10 border border-gray-100 rounded-2xl'>
            <h2 className='text-2xl font-bold'>Your Cart</h2>
            <div className='space-y-4 '>

                {
                    cart.map(item => <div className='flex justify-between items-center bg-base-200 p-5 rounded-2xl'>
                        <div className='flex items-center gap-4'>

                            <div className='flex'>
                                <div className='p-4 border border-gray-200 rounded-full'><img className='h-8' src={item.icon} alt="" /></div>
                            </div>

                            <div>
                                <h5 className='text-xl font-semibold'>{item.name}</h5>
                                <p className='text-gray-400'>${item.price}</p>
                            </div>
                        </div>
                        <button className='btn btn-ghost text-pink-600'>Remove</button>
                    </div>)
                }


            </div>
            <div className='flex justify-between items-center py-6'>
                <h2 className='text-2xl text-gray-400 font-bold'>Total:</h2>
                <h2 className='text-2xl font-bold'>${total}</h2>
            </div>
            <button onClick={handlePayment} className='btn h-14 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-lg'>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;