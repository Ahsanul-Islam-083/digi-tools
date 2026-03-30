import React from 'react';

const ToolsCard = ({ tool }) => {
    console.log(tool);

    return (
        <div className='border border-gray-200 rounded-2xl p-4 shadow transform transition duration-300 hover:scale-105 relative'>
            {/* {model.status && (
                <div
                    className={`absolute top-4 right-4 px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider
                                        ${model.status === "popular" ? "bg-red-600 text-white" : ""}
                                        ${model.status === "favourite" ? "bg-orange-500 text-white" : ""}
                                        ${model.status === "mostwanted" ? "bg-amber-500 text-white" : ""}
                                    `}
                >
                    {model.status === "popular" && "🔥 Popular"}
                    {model.status === "favourite" && "❤️ Favourite"}
                    {model.status === "mostwanted" && "⭐ Most Wanted"}
                </div>
            )} */}

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
                <h3 className='text-2xl font-bold'>AI Writing Pro</h3>
                <p className=' text-gray-400 py-4'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <h3 className='text-2xl font-bold pb-4'>
                    $29
                    <span className='text-[16px] text-gray-400 font-normal'>/month</span>
                </h3>
                <ul class="space-y-3 mb-8 text-gray-400">
                    <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Everything in Pro</li>
                    <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Team collaboration</li>
                    <li class="flex items-center gap-2"><span className='text-green-400'>✔</span> Custom integrations</li>
                </ul>
                <button className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default ToolsCard;