import styled from 'styled-components';
import { Box, Text, Flex, Link } from 'rebass';
import quokkas from '../functions/quokka-fetch/quokkas';
import { QuokkaHead as Head } from '../components/head';
import { ProgressiveImage } from '../components/image/progressiveImage';
import { quokkaUrl } from '../utils/urlHelpers';
import quokkaPreviewsMap from '../data/quokkaPreviews';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--size12), 1fr));
    grid-auto-rows: auto;
    grid-auto-flow: dense;
`;

const Heading = styled.h1`
    padding: var(--size5) var(--size7);
    margin: 0;
`;

const Name = styled(Text).attrs({
    fontWeight: 500,
    fontSize: 4,
    mt: 3,
})`
    text-transform: uppercase;
`;

const HomeLink = styled(Link).attrs({ fontSize: 3, ml: 4 })`
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    & ::before {
        content: '«';
        position: absolute;
        left: -20px;
        top: -2px;
    }
`;

const QuokkaLink = styled(Link).attrs({ color: 'white', mt: 2 })`
    display: none;
    text-decoration: none;
    text-transform: capitalize;

    & :hover {
        text-decoration: underline;
    }
    & :visited {
        color: white;
    }
`;

const Card = styled(Box).attrs({ p: 4, pl: 5 })`
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: absolute;
    align-self: end;
    color: white;
    background: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 0.5) 30%);
    width: 100%;
`;

const GridItem = styled.div`
    display: grid;
    position: relative;
    & img {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        align-self: center;
        filter: grayscale(100%);
        width: 100%;
        height: auto;
        margin-bottom: -4px;
        transition: all 0.2s ease-in;
    }

    & :hover {
        ${QuokkaLink} {
            display: block;
        }
        img {
            filter: grayscale(0%);
        }
    }
`;

export default () => (
    <>
        <Head title="Meet the Quokkas" desc="All the quokkas in the one place" image="http://quokka.to/250/250/duo" />
        <Flex alignItems="center">
            <Heading>Meet the quokkas</Heading>
            <HomeLink href="/">Home</HomeLink>
        </Flex>
        <Grid>
            {Object.keys(quokkas).map((key) => {
                const { url } = quokkas[key];
                const src = quokkaUrl({ width: 500, name: key });
                const alt = ['duo', 'trio'].includes(key) ? `a ${key} of quokkas` : `${key} the quokka`;
                const preview = quokkaPreviewsMap[`${key}-meet`];
                return (
                    <GridItem>
                        <ProgressiveImage src={src} alt={alt} preview={preview} />
                        <Card>
                            <Name>{key}</Name>
                            <QuokkaLink href={url}>{key} original</QuokkaLink>
                        </Card>
                    </GridItem>
                );
            })}
        </Grid>
    </>
);
