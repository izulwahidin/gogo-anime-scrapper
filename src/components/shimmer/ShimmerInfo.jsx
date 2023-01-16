import React from 'react';

const ShimmerCard = () => {
    return (
        <>
            <div className="animate-pulse flex-wrap py-2 rounded">
                <div className="bg-slate-300 mx-2 my-1 h-6 w-[60%]"></div>
                <div className="bg-slate-300 w-full h-[300px] rounded"></div>
                <div className="bg-slate-300 mx-2 my-1 h-5 mb-3 w-[60%]"></div>
                <div className="bg-slate-300 mx-2 my-1 h-4 w-[95%]"></div>
                <div className="bg-slate-300 mx-2 my-1 h-4 w-[90%]"></div>
                <div className="bg-slate-300 mx-2 my-1 h-4 w-[70%]"></div>
            </div>
        </>
    )
}

export default ShimmerCard;