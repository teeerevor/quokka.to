const fetch = require('node-fetch');
const useragent = require('useragent');
const quokkaList = require('./quokkas');

const cloudinaryUrl = 'https://res.cloudinary.com/dep74pn0n/image/upload';
const baseMods = 'q_auto';
const fillMods = 'c_fill,g_faces';
const nameRegx = new RegExp(Object.keys(quokkaList).join('|'));

const formatMap = {
    chrome: 'webp',
    firefox: 'webp',
    opera: 'webp',
    ie: 'wdp',
};

const filteredHeader = (headers) => {
    const bin = ['host'];
    return Object.keys(headers)
        .filter((key) => !bin.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: headers[key],
            };
        }, {});
};

exports.handler = async function (event) {
    const { path, headers } = event;
    const [file, ext] = path.split('.');
    const split = file.split('/');
    const [widthStr, heightStr] = split.filter((x) => parseInt(x, 10));
    const grey = split.filter((x) => x === 'g').length > 0 ? 'e_grayscale' : null;
    const noSelfies = split.filter((x) => x === 'noselfies').length > 0;
    const selfies = split.filter((x) => x === 'selfies').length > 0 && !noSelfies;

    let quokkaKeys = Object.keys(quokkaList);
    if (selfies) quokkaKeys = quokkaKeys.filter((key) => quokkaList[key].selfie);
    if (noSelfies) quokkaKeys = quokkaKeys.filter((key) => !quokkaList[key].selfie);

    const [imageId] = nameRegx.exec(path) || [];
    const width = parseInt(widthStr, 10);
    const height = parseInt(heightStr, 10) || width;

    if (!width || (ext && !['jpg', 'webp', 'gif', 'wdp'].includes(ext)) || (imageId && !quokkaKeys.includes(imageId))) {
        return {
            statusCode: 404,
            body: 'not a thing',
        };
    }

    const agents = useragent.is(headers['user-agent']);
    const [agent] = Object.keys(agents).filter((key) => agents[key] === true);
    const format = ext || formatMap[agent] || 'jpg';
    const mods = [`w_${width}`, `h_${height}`, grey, baseMods, fillMods].filter(Boolean).join(',');

    try {
        const quokkaKey = imageId || quokkaKeys[(width + height) % quokkaKeys.length];
        const url = `${cloudinaryUrl}/${mods}/${quokkaList[quokkaKey].src}.${format}`;
        const response = await fetch(url, { headers: filteredHeader(headers) });
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
