import { quokkaUrl } from '~/utils/urlHelpers';
import { sizeMap } from '~/data/sizes';
import quokkaPreviewsMap from '~/data/quokkaPreviews';
import ProgressiveImage from './progressiveImage';
import Image from './styledImage';
import { Medium, Tall, Large, Small, Wide } from '~/components/gridItems';

export const componentMap = {
    small: Small,
    medium: Medium,
    large: Large,
    tall: Tall,
    wide: Wide,
};

export default ({ variant, name, display }) => {
    const { width, height, g, quokkaNames } = sizeMap[variant] || {};
    const Component = componentMap[variant];
    const quokkaName = name || quokkaNames[Math.floor(Math.random() * quokkaNames.length)];
    const alt = `a quokkaName named ${quokkaName}`;
    const preview = quokkaPreviewsMap[`${quokkaName}-${variant}`];
    const ImageComponent = preview ? ProgressiveImage : Image;
    const src = quokkaUrl({ width, height, g, name: quokkaName });
    return (
        <Component sx={{ display }}>
            <ImageComponent src={src} alt={alt} preview={preview || null} />
        </Component>
    );
};
