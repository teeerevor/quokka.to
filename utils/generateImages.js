import fs from 'fs';
import axios from 'axios';
import path from 'path';

import { sizeMap } from '../data/sizes';

const formats = ['jpg', 'webp'];

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
    const url = `http://localhost:8888/${width}/${height}/${name}.${format}`;
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
        if (['medium', 'tall', 'wide'].includes(sizeKey)) {
            const previewKey = `${quokka}-${sizeKey}`;
            generateImage(
                Math.floor(width / 10),
                Math.floor(height / 10),
                quokka,
                'jpg',
                path.join(__dirname, '..', 'public', 'previews', `${previewKey}.jpg`),
            );
            previews[previewKey] = `require('~/public/previews/${previewKey}.jpg')`;
        }
    });
});
console.log(previews);

// aimee: require('~/public/inline/aimee.jpg?inline'),
// barry: require('~/public/inline/barry.jpg?inline'),
// duoTall: require('~/public/inline/duoTall.jpg?inline'),
// duo: require('~/public/inline/duo.jpg?inline'),
// ivy: require('~/public/inline/ivy.jpg?inline'),
// jason: require('~/public/inline/jason.jpg?inline'),
// gregor: require('~/public/inline/gregor.jpg?inline'),
// mark: require('~/public/inline/mark.jpg?inline'),
// oli: require('~/public/inline/oli.jpg?inline'),
// simon: require('~/public/inline/simon.jpg?inline'),
// suzy: require('~/public/inline/suzy.jpg?inline'),
// thomas: require('~/public/inline/thomas.jpg?inline'),
// trio: require('~/public/inline/trio.jpg?inline'),
// };
