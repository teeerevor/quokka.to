export const baseUrl =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:8888/.netlify/functions/quokka-fetch/'
        : 'https://quokka.to/images';
const webp = () =>
    process.browser ? document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0 : false;

export const quokkaUrl = ({ width, height, g, name, selfies, noSelfies }) => {
    let format = 'jpg';
    if (webp()) format = 'webp';
    const urlBits = [baseUrl, width];
    if (height) urlBits.push(height);
    if (g) urlBits.push('g');
    if (name) urlBits.push(`${name}.${format}`);
    if (selfies) urlBits.push('selfies');
    if (noSelfies) urlBits.push('noselfies');
    return urlBits.join('/');
};
