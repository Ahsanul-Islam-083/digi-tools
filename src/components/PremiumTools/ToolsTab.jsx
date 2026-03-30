import React, { useState } from 'react';
import ToolsCard from './ToolsCard';
import Cart from './Cart';

const ToolsTab = ({ tools,cart,setCart }) => {
    // console.log(tools);
    const [tab, setTab] = useState("products")

    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs bg-transparent justify-center items-center tabs-box shadow-none">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setTab("products")} defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${cart.length})`} onClick={() => setTab("cart")} />
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