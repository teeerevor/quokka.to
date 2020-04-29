import fs from 'fs';
import axios from 'axios';
import path from 'path';
import quokkas from '../functions/quokka-fetch/quokkas';

const width = '622';
const height = '498';

Object.keys(quokkas).forEach((key) => {
    // const url = `https://quok.in/${width}/${height}/${key}`;
    const format = 'jpg';
    const url = `http://localhost:8888/${width}/${height}/${key}.${format}`;
    // `../public/${width}/${height}/${key}.jpg`;
    const file = path.join(__dirname, '..', 'public', width, height, `${key}.${format}`);
    if (!fs.existsSync(file)) {
        axios
            .get(url, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-type': `image/${format}`,
                },
            })
            .then((response) => {
                fs.writeFileSync(file, response.data, {
                    flag: 'wx',
                });
                console.log({ file, done: true });
            });
    } else {
        console.log({ file, existis: true });
    }
});
