import React, { useRef, useState } from 'react'
import ShimmerInfo from '../shimmer/ShimmerInfo'

export default function Info({data,shimmer}) {
    const ref = useRef();
    const [height, setHeight] = useState("0px");

    const set_iframe_eight = () => {
        setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
    }

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
                        <iframe ref={ref} onLoad={set_iframe_eight} className="w-full aspect-video rounded" frameborder="0" src={data.video} title={data.title} scrolling="no"></iframe>
                        <p className='font-bold py-2'>{data.title}</p>
                        <p className='text-sm '>{data.description}</p>
                        </div>
                    </>
                )
            }
        </>
    )
}
