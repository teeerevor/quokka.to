import quokkas from '~/functions/quokka-fetch/quokkas';
import { Medium, Tall, Large, Small, Wide } from '~/components/gridItems';

const quokkaKeys = Object.keys(quokkas);
export const small = quokkaKeys.filter((key) => !quokkas[key].tall);
const noSelfies = quokkaKeys.filter((key) => !quokkas[key].selfie);
export const med = noSelfies.filter((key) => !quokkas[key].tall);
export const tall = noSelfies.filter((key) => quokkas[key].tall);
export const wide = noSelfies.filter((key) => quokkas[key].wide);

export const sizeMap = {
    small: { Component: Small, width: 290, height: 228, quokkaNames: small },
    medium: { Component: Medium, width: 622, height: 498, quokkaNames: med },
    large: { Component: Large, width: 1157, height: 930, quokkaNames: med },
    tall: { Component: Tall, width: 726, height: 1210, quokkaNames: tall },
    wide: { Component: Wide, width: 1016, height: 377, quokkaNames: wide },
};
