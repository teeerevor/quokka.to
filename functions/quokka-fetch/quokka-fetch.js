const fetch = require('node-fetch');
const quokkas = require('./quokkas');

const imageTypes = {
    jpg: 'image/jpeg',
    png: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
};

const cloudinaryUrl = 'https://res.cloudinary.com/dep74pn0n/image/upload';
const base_mods = 'f_auto,q_auto';
const fill_mods = 'c_fill,g_faces';

exports.handler = async function(event, context) {
    const { path, headers } = event;
    const [widthStr, heightStr] = path.split('/').filter(x => parseInt(x));
    const grey = path.split('/').filter(x => x === 'g').length > 0;
    const width = parseInt(widthStr);
    const height = parseInt(heightStr);
    const imageId = event.queryStringParameters.id;

    if (!width || (heightStr && !height) || (imageId && !quokkas[imageId])) {
        return {
            statusCode: 404,
            body: 'not a thing',
        };
    }
    const mods = [base_mods, fill_mods, `w_${width}`, `h_${height || width}`].filter(Boolean).join(',');

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
