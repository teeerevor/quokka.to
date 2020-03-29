export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : 'https://quok.in';

export const quokkaUrl = ({ width, height, g, name }) => {
    const urlBits = [baseUrl, width];
    if (height) urlBits.push(height);
    if (g) urlBits.push('g');
    if (name) urlBits.push(name);
    return urlBits.join('/');
};
