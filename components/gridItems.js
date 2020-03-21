import styled from 'styled-components';

export const Medium = styled.div`
    grid-column: span 2;
    grid-row: span 2;

    & img {
        width: 100%;
        height: auto;
        border-radius: 2px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 682px) {
        grid-row: span 1 !important;
        grid-column: 1 / -1 !important;
    }
`;

export const Small = styled(Medium)`
    grid-column: span 1;
    grid-row: span 1;

    @media (max-width: 682px) {
        display: none;
    }
`;

export const Tall = styled(Medium)`
    grid-column: span 2;
    grid-row: span 4;
`;
export const Wide = styled(Medium)`
    grid-column: span 4;
    grid-row: span 2;
`;

export const Large = styled(Medium)`
    grid-column: span 4;
    grid-row: span 4;
`;
