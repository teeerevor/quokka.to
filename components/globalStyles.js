/* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811 */

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --size1: 2px;
    --size2: 3px;
    --size3: 5px;
    --size4: 8px;
    --size5: 13px;
    --size6: 21px;
    --size7: 34px;
    --size8: 55px;
    --size9: 89px;
    --size10: 144px;
    --size11: 233px;
    --size12: 377px;
    --size13: 610px;
    --size14: 987px;
    --size15: 1597px;
    --size16: 2584px;
    --darkblue: #002F8B;
    --darkgreen: #006D77;
    --lightgrey: #EDF6F9;
}

a, a[href^="mailto:"] {
    color: var(--darkgreen);
    text-decoration: none;
}

a:hover, a[href^="mailto:"]:hover {
    text-decoration: underline;
}

a:visited {
    color: var(--darkgreen)
}


body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
    font-size: 16px;
}

h1 {
    text-transform: uppercase;
    letter-spacing: var(--size3);
    font-size: var(--size8);
    font-weight: 20;
    letter-spacing: var(--size2);
    margin: 0;
    margin-bottom: var(--size6);
}

h2 {
    text-transform: uppercase;
    font-size: var(--size7);
    font-weight: 144;
    letter-spacing: 2px;
}
h4 {
    font-size: var(--size6);
    font-weight: 144;
    letter-spacing: 2px;
}

p {
    font-weight: 300;
    margin-bottom: var(--size6);
}
`;
