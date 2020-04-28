import { Box } from 'rebass/styled-components';

export const Medium = ({ sx, ...props }) => (
    <Box
        {...props}
        sx={{
            gridRow: 'span 1',
            gridColumn: '1 / -1',
            minHeight: 249,
            '@media screen and (min-width: 682px)': {
                gridColumn: 'span 2',
                gridRow: 'span 2',
            },
            ...sx,
        }}
    />
);

export const Small = ({ sx, ...props }) => (
    <Box
        {...props}
        sx={{
            minHeight: 114,
            '@media screen and (min-width: 682px)': {
                gridColumn: 'span 1',
                gridRow: 'span 1',
            },
            '@media screen and (max-width: 682px)': {
                display: 'none',
            },
            ...sx,
        }}
    />
);

export const Tall = (props) => (
    <Medium
        {...props}
        sx={{
            img: {
                minHeight: 520,
            },
            '@media screen and (min-width: 682px)': {
                gridColumn: 'span 2',
                gridRow: 'span 4',
            },
        }}
    />
);

export const Wide = (props) => (
    <Medium
        {...props}
        sx={{
            '@media screen and (min-width: 682px)': {
                gridColumn: 'span 4',
                gridRow: 'span 2',
            },
        }}
    />
);

export const Large = ({ sx, ...props }) => (
    <Medium
        {...props}
        sx={{
            minHeight: 520,
            '@media screen and (min-width: 682px)': {
                gridColumn: 'span 4',
                gridRow: 'span 4',
            },
            ...sx,
        }}
    />
);
