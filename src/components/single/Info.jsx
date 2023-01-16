import React from 'react'
import ShimmerInfo from '../shimmer/ShimmerInfo'

export default function Info({data,shimmer}) {
    // is_shimmer = shimmer ? true : false;
    return (
        <>
            {
                shimmer ? (
                    <>
                        <ShimmerInfo/>
                    </>
                ):(
                    <>
                        <div className='m-2 p-3'>
                        <h2 className='text-2xl pb-5'>{data.full_title}</h2>
                        <iframe className="w-full aspect-video rounded" frameborder="0" src={data.video} title={data.title}></iframe>
                        <p className='font-bold py-2'>{data.title}</p>
                        <p className='text-sm '>{data.description}</p>
                        </div>
                    </>
                )
            }
        </>
    )
}
