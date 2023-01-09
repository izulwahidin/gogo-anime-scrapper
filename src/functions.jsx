
export const siteTitle = 'KissAnime';
export const BASEAPI = 'http://localhost:1212';
export const currentURL = new URL(window.location);

export const image2cdn = (url) => {
    if(!url) return;
    return `https://i2.wp.com/` + url.replace(/^http(?:s|):\/\//,'');
}

// export const getParams = (val) => {
//     const url = new URL(window.location);
//     return url.searchParams.get(val) ?? 1;
// }

export const getEndpoint = () => {
    const url = new URL(window.location);
    return url.href.replace(url.origin,'');
}
export const getPath = () => {
    const url = new URL(window.location);
    return url.pathname;
}

const funcs = {
    siteTitle,
    BASEAPI,
    currentURL,
    image2cdn,
    // getParams,
    getEndpoint,
    getPath,
}
export default funcs;