import styled from 'styled-components';

const Link = styled.a`
    padding: var(--size6);
    border-radius: 2px;
    display: block;
    background-color: var(--lightgrey);
    color: 'caribbeanCurrent';
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const DisplayLink = ({ children, color = 'caribbeanCurrent', background = 'aliceBlue', ...props }) => (
    <Link {...props}>{children}</Link>
);
