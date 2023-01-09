import React from 'react';
import { siteTitle } from '../../functions';

const Header = () => {
    return (
        <>
            <header className="flex flex-wrap bg-sky-500 text-white py-5 px-5 md:flex-nowrap md:justify-evenly md:gap-3 md:items-center">
                    <a href="/"><h1 className="text-2xl mx-[auto] max-h-10 pb-2 sm:pb-0">{siteTitle}</h1></a>
                    <div className="flex flex-row gap-1 mx-[auto] mt-3 order-last md:order-none md:mt-0 md:grid-cols-7 md:gap-2 lg:gap-5">
                        {/* <a href="/sub" className="font-normal hover:font-bold">Sub</a> */}
                        <a href="/raw" className="font-normal hover:font-bold">Raw</a>
                        <a href="/dub" className="font-normal hover:font-bold">Dub</a>
                        <a href="/movie" className="font-normal hover:font-bold">Movies</a>
                        <a href="/season" className="font-normal hover:font-bold">Season</a>
                        <a href="/popular" className="font-normal hover:font-bold">Popular</a>
                        <a href="/ongoing" className="font-normal hover:font-bold">Ongoing</a>
                    </div>
                    <input type="text" placeholder="Search..." className="flex w-full text-black border-solid border-1 rounded bg-sky-100 px-2 md:max-w-[25%]"/>
            </header>
        </>
    )
}

export default Header;