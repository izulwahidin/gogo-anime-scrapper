import React from 'react';
import Card from './single/Card';
import ShimmerCard from './shimmer/ShimmerCard';

const CardSection = ({title, shimmer, data, grid = 6}) => {

    const costumClassGrid = () => {
        let c_class = null;
        if(grid === 6){
            c_class = `grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-${grid}`;
        }else if(grid === 5){
            c_class = `grid gap-5 grid-cols-2 md:grid-cols-5`;
        }else{
            c_class = `grid gap-5 grid-cols-2`;
        }
        return c_class;
    }

    return (
        <>
            <section>
                <div className="p-5 bg-sky-50">
                    <h1 className="text-2xl">{title}</h1>
                    <div className={costumClassGrid()}>
                        {
                            shimmer? (
                                Array.from(Array(parseInt(shimmer)).keys()).map( () => {
                                    return <ShimmerCard />
                                })
                            ):(
                                [...data].map(e => {
                                    return <Card data={e}/>
                                })
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardSection;