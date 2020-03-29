import styled from 'styled-components';
import Grid from '~/components/grid';
import Card from '~/components/card';
import { quokkaUrl } from '~/utils/urlHelpers';
import { sizeMap } from './sizes';
import Item from './item';
import QuokkaFiller from './quokkaFiller';
import topHomeQuokkas from './topHomeQuokkas';

const InfoPanel = styled.div`
    position: absolute;
    background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 40%,
        rgba(255, 255, 255, 1) 70%,
        rgba(255, 255, 255, 1) 80%
    );
    padding-top: 500px;
    bottom: 0;
    height: 1200px;
    width: 100%;
`;

const Home = styled.div`
    position: relative;
`;

const Example = ({ url }) => (
    <>
        <img src={url} />
        <a href={url}>{url}</a>
    </>
);

const HomePage = () => (
    <Home>
        <Grid>
            <Card>
                <h1>Quokkas</h1>
                <p>All shapes and sizes</p>
                <a href={quokkaUrl({ width: 200, height: 300 })}>https://quok.in/200/300</a>
            </Card>
            {topHomeQuokkas.map(({ variant, name }) => (
                <Item key={Math.random() * 1000} {...sizeMap[variant]} name={name} />
            ))}
            <QuokkaFiller />
        </Grid>
        <InfoPanel>
            <h2>Advanced</h2>
            <p>Boxes</p>
            <Example url={quokkaUrl({ width: 377 })} />
            <p>Odd boxes</p>
            <Example url={quokkaUrl({ width: 610, height: 377 })} />
            <p>Grey</p>
            <Example url={quokkaUrl({ width: 377, g: true })} />
            <p>Named Quokka</p>
            <Example url={quokkaUrl({ width: 377, name: 'suzy' })} />
        </InfoPanel>
    </Home>
);

export default HomePage;
