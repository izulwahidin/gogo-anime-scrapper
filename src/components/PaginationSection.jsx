import React from 'react';
import ShimmerPagination from './shimmer/ShimmerPagination';
import Pagination from './single/Pagination';
const PaginationSection = ({data, shimmer}) => {

    return (
        <>
        <section>
            <div className="flex bg-sky-50 justify-center gap-1 pb-5">
                {
                    shimmer? (
                        Array.from(Array(parseInt(shimmer)).keys()).map( () => {
                            return <ShimmerPagination />
                        })
                    ):(
                        data.map(e =>{
                            return <Pagination text={e.name} active={e.active} url={e.url}/>
                        })
                    )
                }
            </div>
        </section>
        </>
    )
}

export default PaginationSection;