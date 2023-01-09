import React from 'react';
import { image2cdn } from '../../functions'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({data}) => {
    const imageOnError = (event) => event.currentTarget.src = data.onerror.split("'")[1];
    const href = () => data.url.replace('/videos','/watch');

    const [ttl, eps] = data.title.split(' Episode ')

    return (
        <>
            <a href={href()}>
            <div className="flex-wrap py-2 rounded hover:shadow-black hover:shadow-lg">
                <LazyLoadImage src={image2cdn(data.image)} alt={data.title} onError={imageOnError} className="object-cover w-full rounded h-[200px] md:h-[210px]"/>
                <h3 className="mx-2 text-md font-bold truncate">{ttl}</h3>
                <p className="mx-2">Episode {eps}</p>
                <p className="mx-2 text-sm pb-2 truncate">{data.meta}</p>
            </div>
            </a>
        </>
    )
}

export default Card;