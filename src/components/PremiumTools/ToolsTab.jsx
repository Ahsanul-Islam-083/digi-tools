import React, { useState } from 'react';
import ToolsCard from './ToolsCard';
import Cart from './Cart';

const ToolsTab = ({ tools,cart,setCart }) => {
    
    const [tab, setTab] = useState("products")

    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs bg-transparent justify-center items-center tabs-box shadow-none">
                <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${tab === "products" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`} aria-label="Products" onClick={() => setTab("products")} defaultChecked />
                <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${tab === "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`} aria-label={`Cart (${cart.length})`} onClick={() => setTab("cart")} />
            </div>

            {
                tab === "products" ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-6'>
                    {
                        tools.map(tool => <ToolsCard key={tool.id} tool={tool} cart={cart} setCart={setCart} />)
                    }
                </div> : <Cart cart={cart} setCart={setCart} />
            }

        </div>
    );
};

export default ToolsTab;