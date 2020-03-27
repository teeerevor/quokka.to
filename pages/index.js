import Grid from '~/components/grid';
import { Medium, Tall, Large, Small, Wide } from '~/components/gridItems';
import Card from '~/components/card';
import quokkas from '~/functions/quokka-fetch/quokkas';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8888/' : 'https://quok.in/';

const tall = Object.keys(quokkas).filter(key => quokkas[key].tall);
const wide = Object.keys(quokkas).filter(key => quokkas[key].wide);
const reg = Object.keys(quokkas).filter(key => !quokkas[key].tall);
const sizeMap = {
    small: { Component: Small, width: 508, height: 377 },
    medium: { Component: Medium, width: 508, height: 377 },
    large: { Component: Large, width: 1157, height: 858 },
    tall: { Component: Tall, width: 508, height: 800 },
    wide: { Component: Wide, width: 1016, height: 377 },
};

const topHomeQuokkas = [
    { variant: 'tall', name: 'duo' },
    { variant: 'medium', name: 'aimee' },
    { variant: 'small', name: 'barry' },
    { variant: 'small', name: 'trio' },
    { variant: 'medium', name: 'thomas' },
    { variant: 'small', name: 'gregor' },
    { variant: 'small', name: 'oli' },
    { variant: 'medium', name: 'mark' },
    { variant: 'medium', name: 'suzy' },
    { variant: 'small', name: 'duo' },
    { variant: 'small', name: 'jason' },
    { variant: 'small', name: 'ivy' },
    { variant: 'small', name: 'simon' },
    { variant: 'large', name: 'trio' },
];

const Item = ({ Component, width, height, name, quokkas }) => {
    const quokka = quokkas && quokkas[Math.floor(Math.random() * quokkas.length)];
    const url = name || quokka ? `${BASE_URL}${width}/${height}?id=${name || quokka}` : `${BASE_URL}${width}/${height}`;
    return (
        <Component>
            <img src={url} />
        </Component>
    );
};

const QuakkaFiller = () => (
    <>
        {[...new Array(150)].map((quok, index) => {
            const size =
                index !== 0 && index % 13 === 0
                    ? ['tall', 'wide', 'large'][Math.floor(Math.random() * 3)]
                    : Math.random() >= 0.5
                    ? 'medium'
                    : 'small';
            return <Item key={Math.random() * 1000} {...sizeMap[size]} />;
        })}
    </>
);

export default () => (
    <Grid>
        <Card>
            <h1>Quokkas</h1>
            <p>All shapes and sizes</p>
            <a href={`${BASE_URL}200/300`}>https://quok.in/200/300</a>
            {/* <p>Squares</p>
            <a href="https://quok.in/200/300">https://quok.in/200/300</a>
            <p>Tall</p>
            <a href="https://quok.in/200/500">https://quok.in/200/300</a>
            <p>Wide</p>
            <a href="https://quok.in/500/200">https://quok.in/200/300</a>
            <p>Grey</p>
            <a href="https://quok.in/500/g">https://quok.in/200/300</a> */}
        </Card>
        {topHomeQuokkas.map(({ variant, name }) => (
            <Item key={Math.random() * 1000} {...sizeMap[variant]} name={name} />
        ))}
        <QuakkaFiller />
    </Grid>
);
