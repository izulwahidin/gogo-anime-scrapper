import React from 'react';

const Pagination = ({url,text,active}) => {
    return (
        <>
            <a href={url} className={`py-2 px-3 border-2 bg-sky-${active?'500':'100'} rounded hover:bg-sky-500 hover:text-white hover:font-bold`}>{text}</a>
        </>
    )
}

export default Pagination;