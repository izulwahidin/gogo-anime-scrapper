import React from 'react'

export default function Info({data}) {
    return (
        <div className='m-2 p-3'>
            <h2 className='text-2xl pb-5'>{data.full_title}</h2>
            <iframe className="w-full aspect-video rounded" frameborder="0" src={data.video}></iframe>
            <p className='font-bold py-2'>{data.title}</p>
            <p className='text-sm '>{data.description}</p>
        </div>
    )
}
