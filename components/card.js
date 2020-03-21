import styled from 'styled-components';

export default styled.div`
    background-color: white;
    padding: var(--size8) var(--size7);
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    grid-column: span 2;
    grid-row: span 4;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 682px) {
        grid-row: span 1 !important;
        grid-column: 1 / -1 !important;
    }

    & a {
        background-color: rgba(0, 0, 0, 0.08);
        padding: var(--size6);
        border-radius: 2px;
        display: block;
        color: #26268e;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
