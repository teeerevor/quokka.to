import fs from 'fs';
import axios from 'axios';
import path from 'path';

import { sizeMap } from '../data/sizes';

const formats = ['jpg', 'webp'];
const site = 'http://quok.in';
// const site = 'http://localhost:8888';

const storeImage = (url, filePath, format) => {
    axios
        .get(url, {
            responseType: 'arraybuffer',
            headers: {
                'Content-type': `image/${format}`,
            },
        })
        .then((response) => {
            fs.writeFileSync(filePath, response.data, {
                flag: 'wx',
            });
            console.log({ filePath, done: true });
        })
        .catch((error) => {
            console.log(error);
        });
};

// const url = `https://quok.in/${width}/${height}/${key}`;
// `../public/${width}/${height}/${key}.jpg`;

const previews = {};

const generateImage = (width, height, name, format, filePath) => {
    const url = `${site}/${width}/${height}/${name}.${format}`;
    const file =
        filePath || path.join(__dirname, '..', 'public', width.toString(), height.toString(), `${name}.${format}`);
    if (!fs.existsSync(file)) storeImage(url, file, format);
};

Object.keys(sizeMap).forEach((sizeKey) => {
    const { quokkaNames, width, height } = sizeMap[sizeKey];
    quokkaNames.forEach((quokka) => {
        formats.forEach((format) => {
            generateImage(width, height, quokka, format);
        });
        if (['medium', 'tall', 'wide', 'meet'].includes(sizeKey)) {
            const previewKey = `${quokka}-${sizeKey}`;
            const url = `${site}/${Math.floor(width / 10)}/${Math.floor(height / 10)}/${quokka}.jpg`;
            // console.log({ url });
            axios
                .get(url, {
                    responseType: 'arraybuffer',
                    headers: {
                        'Content-type': `image/jpg`,
                    },
                })
                .then((response) => {
                    previews[previewKey] = `data:image/jpeg;base64,${Buffer.from(response.data, 'binary').toString(
                        'base64',
                    )}`;
                    console.log({ previews });
                });
        }
    });
});
