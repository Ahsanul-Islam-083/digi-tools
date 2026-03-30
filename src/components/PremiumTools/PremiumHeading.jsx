import React, { use } from 'react';
import ToolsTab from './ToolsTab';

const PremiumHeading = ({toolsPromise, cart,setCart}) => {
    const tools = use(toolsPromise);
    // console.log(tools);
    
    return (
        <div className='container mx-auto pt-6'>
            <h2 className='text-4xl font-bold text-center'>Premium Digital Tools</h2>
            <p className='text-center text-gray-400 py-8'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <ToolsTab tools={tools} cart={cart} setCart={setCart}/>
        </div>
    );
};

export default PremiumHeading;