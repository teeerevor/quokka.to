import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-gap: var(--size6);
    grid-template-columns: repeat(auto-fit, minmax(var(--size10), 1fr));
    grid-auto-rows: auto;
    grid-auto-flow: dense;
`;
