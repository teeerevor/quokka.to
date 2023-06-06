import styled from 'styled-components';

export const Grid = styled.div`
    margin: var(--size6);
    display: grid;
    grid-gap: var(--size6);
    grid-template-columns: repeat(auto-fit, minmax(var(--size10), 1fr));
    // grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-auto-flow: dense;
`;
