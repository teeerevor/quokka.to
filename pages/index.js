import Grid from '~/components/grid';
import { Medium, Tall, Large, Small, Wide } from '~/components/gridItems';
import Card from '~/components/card';

const sizeMap = {
    small: { Component: Small, width: 508, height: 377 },
    medium: { Component: Medium, width: 508, height: 377 },
    large: { Component: Large, width: 1157, height: 858 },
    tall: { Component: Tall, width: 508, height: 800 },
    wide: { Component: Wide, width: 1016, height: 377 },
};

const topHomeQuokkas = [
    'tall',
    'medium',
    'small',
    'small',
    'medium',
    'small',
    'small',
    'medium',
    'medium',
    'small',
    'small',
    'small',
    'small',
    'large',
];

const Item = ({ Component, width, height }) => (
    <Component>
        <img src={`https://quok.in/${width}/${height}`} />
    </Component>
);

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
            <a href="https://quok.in/200/300">https://quok.in/200/300</a>
            {/* <p>Squares</p>
            <a href="https://quok.in/200/300">https://quok.in/200/300</a>
            <p>Tall</p>
            <a href="https://quok.in/200/500">https://quok.in/200/300</a>
            <p>Wide</p>
            <a href="https://quok.in/500/200">https://quok.in/200/300</a>
            <p>Grey</p>
            <a href="https://quok.in/500/g">https://quok.in/200/300</a> */}
        </Card>
        {topHomeQuokkas.map(quok => (
            <Item key={Math.random() * 1000} {...sizeMap[quok]} />
        ))}
        <QuakkaFiller />
    </Grid>
);
