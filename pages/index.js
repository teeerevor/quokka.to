import styled from 'styled-components';
import { Link } from 'rebass/styled-components';
import Grid from '~/components/grid';
import Card from '~/components/card';
import DisplayLink from '~/components/displayLink';
import { quokkaUrl } from '~/utils/urlHelpers';
import homeQuokkas from '~/data/homeQuokkas';
import ImageItem from '~/components/imageItem';
import Head from '~/components/head';
import Example from '~/components/example';

const InfoPanel = styled.div`
    background: white;
    padding-top: var(--size7);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home = styled.div`
    position: relative;
`;

const HomePage = () => (
    <>
        <Head />
        <Home>
            <Grid>
                <Card>
                    <h1>Quokkas</h1>
                    <p>All shapes and sizes</p>
                    <DisplayLink href={quokkaUrl({ width: 200, height: 300 })}>https://quokka.to/200/300</DisplayLink>
                    <Link variant="block" mt="7" href="/meet-the-quokkas">
                        Meet the Quokkas
                    </Link>
                </Card>
                {homeQuokkas.map((quokka) => (
                    <ImageItem key={Math.random() * 1000} {...quokka} />
                ))}
            </Grid>
            <InfoPanel>
                <h2>Options</h2>
                <table>
                    <tbody>
                        <Example heading="Square" url={quokkaUrl({ width: 233 })} />
                        <Example heading="Rectangular" url={quokkaUrl({ width: 377, height: 233 })} />
                        <Example heading="Grey" url={quokkaUrl({ width: 233, g: true })} />
                        <Example heading="Named Quokka" url={quokkaUrl({ width: 233, name: 'suzy' })} meet />
                        <Example heading="Selfies" url={quokkaUrl({ width: 233, selfies: true })} />
                        <Example heading="No Selfies thanks" url={quokkaUrl({ width: 233, noSelfies: true })} />
                    </tbody>
                </table>
            </InfoPanel>
        </Home>
    </>
);

export default HomePage;
