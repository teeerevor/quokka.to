const fetch = require('node-fetch');

const imageTypes = {
    jpg: 'image/jpeg',
    png: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
};
const vDunno = 'v1583062821';
const cloudinary = 'https://res.cloudinary.com/dep74pn0n/image/upload';
const base_mods = 'f_auto,q_auto';
const fill_mods = 'c_fill,g_faces';
const size_mods = 'h_377,w_508';
const extraLargeQuokkas = [
    'v1583062821/piqsels.com-id-fsmmq_d7hjbv',
    'v1583062821/piqsels.com-id-fiisq_sootmx',
    'v1583062820/piqsels.com-id-znfzb_agmwys',
];

exports.handler = async function(event, context) {
    const { path, headers } = event;
    console.log({ path });
    const [junk, width, height, grey] = path.split('/');
    const mods = [base_mods, fill_mods, `w_${width}`, `h_${height}`].join(',');
    try {
        const response = await fetch(
            `https://res.cloudinary.com/dep74pn0n/image/upload/${mods}/v1583062821/piqsels.com-id-fsmmq_d7hjbv`,
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
