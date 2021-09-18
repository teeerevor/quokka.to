export const baseUrl =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:8888/.netlify/functions/quokka-fetch/'
        : 'https://quokka.to/images';

export const quokkaUrl = ({ width, height, g, name, selfies, noSelfies }) => {
    const urlBits = [baseUrl, width];
    if (height) urlBits.push(height);
    if (g) urlBits.push('g');
    if (name) urlBits.push(`${name}`);
    if (selfies) urlBits.push('selfies');
    if (noSelfies) urlBits.push('noselfies');
    return urlBits.join('/');
};
