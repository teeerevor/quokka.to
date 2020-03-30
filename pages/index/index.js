import styled from 'styled-components';
import Grid from '~/components/grid';
import Card from '~/components/card';
import DisplayLink from '~/components/displayLink';
import { quokkaUrl } from '~/utils/urlHelpers';
import { sizeMap } from './sizes';
import Item from './item';
import QuokkaFiller from './quokkaFiller';
import topHomeQuokkas from './topHomeQuokkas';

const InfoPanel = styled.div`
    position: absolute;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.92) 40%, rgba(255, 255, 255, 1) 90%);
    padding-top: var(--size13);
    bottom: 0;
    height: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home = styled.div`
    position: relative;
`;

const Cell = styled.td`
    padding: var(--size7);
    text-align: ${({ right }) => (right ? 'right' : 'center')};
`;

const Example = ({ url, heading }) => (
    <tr>
        <Cell right>
            <img src={url} alt={`${heading} Quokka`} />
        </Cell>
        <Cell>
            <h4>{heading}</h4>
            <DisplayLink href={url}>{url}</DisplayLink>
        </Cell>
    </tr>
);

const HomePage = () => (
    <Home>
        <Grid>
            <Card>
                <h1>Quokkas</h1>
                <p>All shapes and sizes</p>
                <DisplayLink href={quokkaUrl({ width: 200, height: 300 })}>https://quok.in/200/300</DisplayLink>
            </Card>
            {topHomeQuokkas.map(({ variant, name }) => (
                <Item key={Math.random() * 1000} {...sizeMap[variant]} name={name} />
            ))}
            <QuokkaFiller />
        </Grid>
        <InfoPanel>
            <h2>Options</h2>
            <table>
                <Example heading="Square" url={quokkaUrl({ width: 213 })} />
                <Example heading="Rectangular" url={quokkaUrl({ width: 377, height: 213 })} />
                <Example heading="Grey" url={quokkaUrl({ width: 213, g: true })} />
                <Example heading="Named Quokka" url={quokkaUrl({ width: 213, name: 'suzy' })} />
            </table>
        </InfoPanel>
    </Home>
);

export default HomePage;
