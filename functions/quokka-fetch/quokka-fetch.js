const fetch = require('node-fetch');

const imageTypes = {
    jpg: 'image/jpeg',
    png: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
};

const cloudinaryUrl = 'https://res.cloudinary.com/dep74pn0n/image/upload';
const base_mods = 'f_auto,q_auto';
const fill_mods = 'c_fill,g_faces';

const QUOKKA_MAP = {
    aimee: { src: 'v1583062821/piqsels.com-id-fsmmq_d7hjbv', maxWidth: 3840, maxHeight: 2160, url: '' },
    barry: { src: 'v1583062821/piqsels.com-id-fiisq_sootmx', maxWidth: 3840, maxHeight: 2160, url: '' },
    charlie: { src: 'v1583062820/piqsels.com-id-znfzb_agmwys', maxWidth: 3888, maxHeight: 2592, url: '' },
    daisy: {
        src: 'v1582292211/Quokka_family_wmswbs',
        maxWidth: 3184,
        maxHeight: 2376,
        url: 'https://commons.wikimedia.org/wiki/File:Quokka_family.jpg',
    },
    esme: {
        src: 'v1582292199/Quokka_Rottnest_Island_uhcdo9',
        maxWidth: 1789,
        maxHeight: 2386,
        url: 'https://commons.wikimedia.org/wiki/Category:Setonix_brachyurus#/media/File:Quokka_Rottnest_Island.jpg',
    },
    finn: {
        src: 'v1583062810/8670484575_42befbd867_o_c2dowi',
        maxWidth: 1200,
        maxHeight: 1600,
        url: 'https://www.flickr.com/photos/fraggy/8670484575/',
        portrait: true,
    },
    gregor: {
        src: 'v1582292199/Quokka_at_rottnest_cibkxs',
        maxWidth: 1166,
        maxHeight: 778,
        url: 'https://commons.wikimedia.org/wiki/Category:Setonix_brachyurus#/media/File:Quokka_at_rottnest.jpg',
    },
    harry: {
        src: 'v1584968004/Quokka_q7yvpm.jpg',
        maxWidth: 1704,
        maxHeight: 2272,
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Quokka.jpg',
    },
    ivy: {
        src: 'v1584969287/5661728684332708_ibefii',
        maxWidth: 1536,
        maxHeight: 1542,
        url:
            'https://www.watson.ch/u/zoom?url=%2Fimgdb%2Fd211%2FQx%2CB%2C0%2C0%2C721%2C724%2C300%2C301%2C120%2C120%2F5661728684332708&source=Bild%3A%20Imgur&caption=',
    },
    jack: {
        src: 'v1584969822/Quokka_selfie_vuwvwu.jpg',
        maxWidth: 1280,
        maxHeight: 960,
        url: 'https://commons.wikimedia.org/wiki/Category:Setonix_brachyurus#/media/File:Quokka_selfie.jpg',
    },
    katie: {
        src: 'v1584970287/RottnestQuokka_enh0ty',
        maxWidth: 3625,
        maxHeight: 2412,
        url: 'https://commons.wikimedia.org/wiki/Category:Setonix_brachyurus#/media/File:RottnestQuokka.jpg',
    },
    simon: {
        src: 'v1583062812/46680407785_53d6b13bd4_o_vhh79s',
        maxWidth: 1280,
        maxHeight: 960,
        url: 'https://www.flickr.com/photos/39551170@N02/46680407785',
    },
    thomas: {
        src: 'v1584906437/90170220_201f5a8d24_o_u5n1jn',
        maxWidth: 1024,
        maxHeight: 934,
        url: 'https://www.flickr.com/photos/done/90170220',
    },
};

exports.handler = async function(event, context) {
    const { path, headers } = event;
    const [widthStr, heightStr] = path.split('/').filter(x => parseInt(x));
    const grey = path.split('/').filter(x => x === 'g').length > 0;
    const width = parseInt(widthStr);
    const height = parseInt(heightStr);
    const imageId = event.queryStringParameters.id;

    if (!width || (heightStr && !height) || (imageId && !QUOKKA_MAP[imageId])) {
        return {
            statusCode: 404,
            body: 'not a thing',
        };
    }
    const mods = [base_mods, fill_mods, `w_${width}`, `h_${height || width}`].filter(Boolean).join(',');

    try {
        const quokkaKey = imageId || Object.keys(QUOKKA_MAP)[(width + height) % Object.keys(QUOKKA_MAP).length];
        const url = `${cloudinaryUrl}/${mods}/${QUOKKA_MAP[quokkaKey].src}`;
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
