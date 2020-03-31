import styled from 'styled-components';
import { quokkaUrl } from '~/utils/urlHelpers';

const Image = styled.img`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export default ({ Component, width, height, g, name, quokkas }) => {
    const quokka = quokkas && quokkas[Math.floor(Math.random() * quokkas.length)];
    const qName = name || quokka;
    const alt = qName ? `a quokka named ${qName}` : 'quokka doing quoking things';
    return (
        <Component>
            <Image src={quokkaUrl({ width, height, g, name: name || quokka })} alt={alt} />
        </Component>
    );
};
