const fetch = require('node-fetch');
const quokkas = require('./quokkas');

const cloudinaryUrl = 'https://res.cloudinary.com/dep74pn0n/image/upload';
const baseMods = 'f_auto,q_auto';
const fillMods = 'c_fill,g_faces';
const nameRegx = new RegExp(Object.keys(quokkas).join('|'));

exports.handler = async function(event) {
    const { path, headers } = event;
    const split = path.split('/');
    const [widthStr, heightStr] = split.filter(x => parseInt(x));
    const grey = split.filter(x => x === 'g').length > 0 ? 'e_grayscale' : null;
    const [imageId] = nameRegx.exec(path) || [];
    const width = parseInt(widthStr);
    const height = parseInt(heightStr) || width;

    if (!width || (imageId && !quokkas[imageId])) {
        return {
            statusCode: 404,
            body: 'not a thing',
        };
    }
    const mods = [baseMods, fillMods, `w_${width}`, `h_${height}`, grey].filter(Boolean).join(',');

    try {
        const quokkaKey = imageId || Object.keys(quokkas)[(width + height) % Object.keys(quokkas).length];
        const url = `${cloudinaryUrl}/${mods}/${quokkas[quokkaKey].src}`;
        const response = await fetch(url, {
            headers: { accept: headers.accept, 'user-agent': headers['user-agent'] },
        });
        const image = await response.buffer();
        return {
            statusCode: 200,
            headers: {
                'Content-type': 'image/jpeg',
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
