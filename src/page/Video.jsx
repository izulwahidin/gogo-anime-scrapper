import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASEAPI } from '../functions'
import Info from '../components/single/Info'
import HeadTag from '../components/single/HeadTag'

import NoPage from './NoPage'
import CardSection from '../components/CardSection'

export default function Video() {
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)

    const { slug } = useParams();

    // API Call
    useEffect(()=> {
        let encode = btoa(`https://gogohd.net/videos/${slug}`);
        fetch(`${BASEAPI}?gogo=${encode}`)
            .then(res => res.json())
            .then(json => {
                setData(json)
                setLoaded(true)
            })
            .catch((e) => setError(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            {
                !error?(
                    <>
                        <div className='bg-sky-50 grid grid-cols-1 gap-2 grid-rows-1 p-2 lg:grid-cols-[70%_30%]'>
                            {
                                !loaded?(
                                    <>
                                        shimmer...
                                    </>
                                ):(
                                    <>
                                        <HeadTag title={`Watch ${data.info.full_title}`} desc={data.info.description} />
                                        <div className=''>
                                            <Info data={data.info}/>
                                            <CardSection title='List Episode' data={data.cards.slice(0,data.cards.length-30)} grid={5}/>
                                        </div>
                                        <div className=''>
                                            <CardSection title='Latest Episode' data={data.cards.slice(-30)} grid={false}/>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </>
                ):(
                    <>
                        <NoPage/>
                    </>
                )
            }
        </>
    )
}
