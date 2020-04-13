import styled from 'styled-components';
import { quokkaUrl } from '~/utils/urlHelpers';
import { sizeMap } from '~/data/sizes';

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export default ({ variant, name, display }) => {
    const { Component, width, height, g, quokkaNames } = sizeMap[variant] || {};
    const quokkaName = quokkaNames && quokkaNames[Math.floor(Math.random() * quokkaNames.length)];
    const quokka = name || quokkaName;
    const alt = quokka ? `a quokka named ${quokka}` : 'quokka doing quokking things';
    return (
        <Component sx={{ display }}>
            <Image src={quokkaUrl({ width, height, g, name: quokka })} alt={alt} />
        </Component>
    );
};
