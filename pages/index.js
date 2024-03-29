import styled from 'styled-components';
import { Link } from 'rebass/styled-components';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Grid } from '../components/grid';
import { Card } from '../components/card';
import { DisplayLink } from '../components/displayLink';
import { Image } from '../components/image';
import { QuokkaHead as Head } from '../components/head';
import { Example } from '../components/example';
import { QuokkaSvg } from '../components/quokkasSvg';
import { quokkaUrl } from '../utils/urlHelpers';
import homeQuokkas from '../data/homeQuokkas';

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

const HiddenH1 = styled.h1`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const LinkBlock = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 64px;
    flex-direction: column;
`;

const HomePage = () => (
    <>
        <Head />
        <Home>
            <Grid>
                <Card>
                    <HiddenH1>Quokkas</HiddenH1>
                    <QuokkaSvg color="#36333a" />
                    <p>All shapes and sizes</p>
                    <p>
                        Do you love adorable marsupials? Use <a href="http://quokka.to">quokka.to</a> for all your
                        quokka-d placeholder needs.
                    </p>
                    <DisplayLink href={quokkaUrl({ width: 550, height: 450 })}>https://quokka.to/550/450</DisplayLink>
                    <LinkBlock>
                        <ScrollLink activeClass="active" to="options" smooth duration={500}>
                            More options
                        </ScrollLink>
                        <Link href="/meet-the-quokkas">Meet the Quokkas</Link>
                        <Link href="mailto:hi@trev.io">Get in touch</Link>
                    </LinkBlock>
                </Card>
                {homeQuokkas.map((quokka) => (
                    <Image key={Math.random() * 1000} {...quokka} />
                ))}
            </Grid>
            <InfoPanel>
                <Element name="options">
                    <h2>Options</h2>
                </Element>
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
