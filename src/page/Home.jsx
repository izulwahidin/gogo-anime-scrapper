import React from "react";
import { useState, useEffect } from 'react';
import { getEndpoint, BASEAPI, getPath } from "../functions";

// import { useParams } from 'react-router-dom';

import CardSection from "../components/CardSection";
import PaginationSection from "../components/PaginationSection";
import HeadTag from "../components/single/HeadTag";

import NoPage from './NoPage' 

const Home = ({slug}) => {
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    

    // API Call
    useEffect(()=> {
        const parsePage = () => getEndpoint().replace(getPath(),slug);

        let encode = btoa(`https://gogohd.net${parsePage()}`);
        fetch(`${BASEAPI}/api/gogo.php?url=${encode}`)
            .then(res => res.json())
            .then(json => {
                setData(json)
                setLoaded(true)
            })
            .catch((e) => setError(e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                !error?(
                    !loaded?(
                        <>
                            <CardSection title="Loading..." shimmer='30'/>
                            <PaginationSection shimmer='5'/>
                        </>
                    ):(
                        <>
                            <HeadTag title='Watch Anime Free' />
                            <CardSection title={`Recently Added ${getPath() ? 'Sub' : getPath()}`} data={data.cards}/>
                            <PaginationSection data={data.pagination}/>
                        </>
                    )
                ):(
                    <NoPage/>
                )
            }
        </>
    )
}

export default Home;
