import quokkas from '~/functions/quokka-fetch/quokkas';

const quokkaKeys = Object.keys(quokkas);
export const small = quokkaKeys.filter((key) => quokkas[key].small);
const noSelfies = quokkaKeys.filter((key) => !quokkas[key].selfie);
export const med = noSelfies.filter((key) => !quokkas[key].tallOnly);
export const tall = noSelfies.filter((key) => quokkas[key].tall || quokkas[key].tallOnly);
export const wide = noSelfies.filter((key) => quokkas[key].wide);

export const sizeMap = {
    small: { width: 290, height: 228, quokkaNames: small },
    medium: { width: 622, height: 498, quokkaNames: med },
    large: { width: 1157, height: 930, quokkaNames: med },
    tall: { width: 726, height: 1210, quokkaNames: tall },
    wide: { width: 1016, height: 377, quokkaNames: wide },
};
