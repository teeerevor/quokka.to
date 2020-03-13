const fetch = require('node-fetch');

const imageTypes = {
    jpg: 'image/jpeg',
    png: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
};
const vDunno = 'v1583062821';
const cloudinaryUrl = 'https://res.cloudinary.com/dep74pn0n/image/upload';
const base_mods = 'f_auto,q_auto';
const fill_mods = 'c_fill,g_faces';
const extraLargeQuokkas = [
    'v1583062821/piqsels.com-id-fsmmq_d7hjbv',
    'v1583062821/piqsels.com-id-fiisq_sootmx',
    'v1583062820/piqsels.com-id-znfzb_agmwys',
];
const QUOKKA_MAP = {
    one: 'v1583062821/piqsels.com-id-fsmmq_d7hjbv',
    two: 'v1583062821/piqsels.com-id-fiisq_sootmx',
    three: 'v1583062820/piqsels.com-id-znfzb_agmwys',
}

const WIDE = 1.5;
const TALL = 0.6;

const image = (width, height) => {
    const aspectRatio = width / height;
    if(aspectRatio > Tall && aspectRatio <= WIDE)
        return extraLargeQuokkas[Math.random]
}

exports.handler = async function(event, context) {
    const { path, headers } = event;
    const [junk, widthStr, heightStr, grey] = path.split('/');
    const width = parseInt(widthStr);
    const height = parseInt(heightStr);
    const grey = g === 'g'
    const imageId = event.queryStringParameters.id;
    
    if (!width || (heightStr && !height) || (imageId && !QUOKKA_MAP[imageId]) )
        return {
            statusCode: 404,
            body: 'not a thing',
        };
    }
    const mods = [base_mods, fill_mods, `w_${width}`, `h_${height || width}`].join(',');

    try {
        const response = await fetch(
            `${cloudinaryUrl}${mods}/${image}`,
            {
                headers: { accept: headers.accept, 'user-agent': headers['user-agent'] },
            },
        );
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
