import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    // console.log(cart);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCart([]);
        toast.success("Payment successful");
    }
    const handleDelete = (item) => {
        const filteredCart = cart.filter(c => c.id !== item.id);
        setCart(filteredCart);
        toast.info("Item has been removed")
    }

    return (
        <div className='p-10 border mt-6 border-gray-100 rounded-2xl'>
            <h2 className='text-2xl font-bold'>Your Cart</h2>

            {
                cart.length ? <div>
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
                                <button onClick={() => handleDelete(item)} className='btn btn-ghost text-pink-600'>Remove</button>
                            </div>)
                        }


                    </div>
                    <div className='flex justify-between items-center py-6'>
                        <h2 className='text-2xl text-gray-400 font-bold'>Total:</h2>
                        <h2 className='text-2xl font-bold'>${total}</h2>
                    </div>
                    <button onClick={handlePayment} className='btn h-14 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-lg'>Proceed to Checkout</button>
                </div> : <div className='flex justify-center items-center py-20'>
                    <div className='text-gray-400 flex flex-col items-center'>
                        <CiShoppingCart className='text-9xl font-bold ' />
                        <p className='text-xl font-bold'>Your cart is empty !</p>
                    </div>
                </div>
            }




        </div>
    );
};

export default Cart;