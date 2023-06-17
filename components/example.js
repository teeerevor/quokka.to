import styled from 'styled-components';
import { Link } from 'rebass/styled-components';
import { DisplayLink } from './displayLink';

const Cell = styled.td`
    padding: var(--size7);
    text-align: ${({ right }) => (right ? 'right' : 'center')};
`;

export const Example = ({ url, heading, meet }) => (
    <tr>
        <Cell right>
            <img src={url} alt={`${heading} Quokka`} loading="lazy" />
        </Cell>
        <Cell>
            <h3>{heading}</h3>
            <DisplayLink href={url}>{url}</DisplayLink>
            {meet && (
                <Link variant="block" mt="6" href="/meet-the-quokkas">
                    Meet the Quokkas
                </Link>
            )}
        </Cell>
    </tr>
);
