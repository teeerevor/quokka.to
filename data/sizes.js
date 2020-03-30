import quokkas from '~/functions/quokka-fetch/quokkas';
import { Medium, Tall, Large, Small, Wide } from '~/components/gridItems';

export const tall = Object.keys(quokkas).filter(key => quokkas[key].tall);
export const wide = Object.keys(quokkas).filter(key => quokkas[key].wide);
export const reg = Object.keys(quokkas).filter(key => !quokkas[key].tall);

export const sizeMap = {
    small: { Component: Small, width: 290, height: 222, quokkas: reg },
    medium: { Component: Medium, width: 622, height: 490, quokkas: reg },
    large: { Component: Large, width: 1157, height: 930, quokkas: reg },
    tall: { Component: Tall, width: 622, height: 1032, quokkas: tall },
    wide: { Component: Wide, width: 1016, height: 377, quokkas: wide },
};
