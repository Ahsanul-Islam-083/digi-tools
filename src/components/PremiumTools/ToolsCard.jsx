import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ToolsCard = ({ tool, cart,setCart }) => {
    // console.log(tool);
    const [buyNow, setBuyNow] =useState(false)
    const toolExist = cart.find(c=> c.id === tool.id);
    const handleBuyNow =()=>{
        setBuyNow(true);
        if (toolExist) {
            toast.warning("Item already exists !")
            return;
        }
        setCart([...cart,tool])
        // console.log(tool, "clicked");
        // console.log(buyNow);
        
        toast.success("Added to cart")
        
    }

    return (
        <div className='border border-gray-200 rounded-2xl p-4 shadow transform transition duration-300 hover:scale-105 relative'>

            {
                tool.tagType && (
                    <div className={`absolute top-4 right-4 px-4 py-1.5 text-xs font-semibold rounded-full uppercase 
                    ${tool.tagType === "new" ? "bg-green-100 text-green-500" : ""} 
                    ${tool.tagType === "best seller" ? "bg-orange-100 text-orange-500" : ""} 
                    ${tool.tagType === "popular" ? "bg-indigo-100 text-indigo-500" : ""}`}>
                        {tool.tagType}

                    </div>
                )
            }
            <div className='flex'>
                <div className='p-4 border border-gray-200 rounded-full'><img className='h-10' src={tool.icon} alt="" /></div>
            </div>
            <div>
                <h3 className='text-2xl font-bold'>{tool.name}</h3>
                <p className=' text-gray-400 py-4'>{tool.description}</p>
                <h3 className='text-2xl font-bold pb-4'>
                    ${tool.price}
                    <span className='text-[16px] text-gray-400 font-normal'>/{tool.period}</span>
                </h3>
                <ul class="space-y-3 mb-8 text-gray-400">
                    {
                        tool.features.map((f,i)=> <li key={i} class="flex items-center gap-2"><span className='text-green-400'>✔</span> {f}</li>)
                    }
                </ul>
                <button onClick={handleBuyNow} className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>{buyNow ? "Added to cart": "Buy Now"}</button>
            </div>
        </div>
    );
};

export default ToolsCard;