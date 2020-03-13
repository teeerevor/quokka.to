import styled from 'styled-components';

const GridItem = styled.div`
    grid-column: span 2;
    grid-row: span 2;

    & img {
        width: 100%;
        height: auto;
        border-radius: 2px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

export default GridItem;

export const Small = styled(GridItem)`
    grid-column: span 1;
    grid-row: span 1;
`;

export const Tall = styled(GridItem)`
    grid-column: span 2;
    grid-row: span 4;
`;
export const Wide = styled(GridItem)`
    grid-column: span 4;
    grid-row: span 2;
`;

export const Large = styled(GridItem)`
    grid-column: span 4;
    grid-row: span 2;
`;
