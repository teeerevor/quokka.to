// const useragent = require('useragent');

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : 'https://quok.in';

// const agents = useragent.is(headers['user-agent']);
// const [agent] = Object.keys(agents).filter((key) => agents[key] === true);
// const format = formatMap[agent] || 'jpg';

export const quokkaUrl = ({ width, height, g, name, selfies, noSelfies }) => {
    const urlBits = [baseUrl, width];
    if (height) urlBits.push(height);
    if (g) urlBits.push('g');
    if (name) urlBits.push(`${name}.jpg`);
    if (selfies) urlBits.push('selfies');
    if (noSelfies) urlBits.push('noselfies');
    return urlBits.join('/');
};
