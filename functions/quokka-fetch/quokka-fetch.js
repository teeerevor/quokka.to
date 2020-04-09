const fetch = require('node-fetch');
const useragent = require('useragent');
const quokkas = require('./quokkas');

const cloudinaryUrl = 'https://res.cloudinary.com/dep74pn0n/image/upload';
const baseMods = 'q_auto';
const fillMods = 'c_fill,g_faces';
const nameRegx = new RegExp(Object.keys(quokkas).join('|'));

const formatMap = {
    chrome: 'webp',
    firefox: 'webp',
    opera: 'webp',
    ie: 'wdp',
};

exports.handler = async function (event) {
    const { path, headers } = event;
    const split = path.split('/');
    const [widthStr, heightStr] = split.filter((x) => parseInt(x, 10));
    const grey = split.filter((x) => x === 'g').length > 0 ? 'e_grayscale' : null;
    const [imageId] = nameRegx.exec(path) || [];
    const width = parseInt(widthStr, 10);
    const height = parseInt(heightStr, 10) || width;
    const agents = useragent.is(headers['user-agent']);
    const [agent] = Object.keys(agents).filter((key) => agents[key] === true);
    const format = formatMap[agent] || 'jpg';

    if (!width || (imageId && !quokkas[imageId])) {
        return {
            statusCode: 404,
            body: 'not a thing',
        };
    }
    const mods = [`w_${width}`, `h_${height}`, grey, baseMods, fillMods].filter(Boolean).join(',');

    try {
        const quokkaKey = imageId || Object.keys(quokkas)[(width + height) % Object.keys(quokkas).length];
        const url = `${cloudinaryUrl}/${mods}/${quokkas[quokkaKey].src}.${format}`;
        const response = await fetch(url);
        const image = await response.buffer();
        return {
            statusCode: 200,
            headers: {
                'Content-type': `image/${format}`,
            },
            body: image.toString('base64'),
            isBase64Encoded: true,
        };
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};
