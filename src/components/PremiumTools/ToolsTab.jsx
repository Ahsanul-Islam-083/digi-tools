import React from 'react';
import ToolsCard from './ToolsCard';

const ToolsTab = ({tools}) => {
    console.log(tools);
    
    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs bg-transparent justify-center items-center tabs-box shadow-none">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked/>
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart (2)" />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-6'>
               {
                tools.map(tool=> <ToolsCard key={tool.id} tool={tool} />)
               } 
            </div>

            
        </div>
    );
};

export default ToolsTab;