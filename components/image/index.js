import { quokkaUrl } from '~/utils/urlHelpers';
import { sizeMap } from '~/data/sizes';
import quokkaPreviewsMap from '~/data/quokkaPreviews';
import ProgressiveImage from './progressiveImage';
import StyledImage from './styledImage';
import { Medium, Tall, Large, Small, Wide } from '~/components/gridItems';

export const componentMap = {
    small: Small,
    medium: Medium,
    large: Large,
    tall: Tall,
    wide: Wide,
};

const Image = ({ variant, name, display }) => {
    const { width, height, g, quokkaNames } = sizeMap[variant] || {};
    const GridWrapper = componentMap[variant];
    const quokkaName = name || quokkaNames[Math.floor(Math.random() * quokkaNames.length)];
    const alt = `a quokkaName named ${quokkaName}`;
    const preview = quokkaPreviewsMap[`${quokkaName}${variant.match(/small|medium|large/) ? '' : `-${variant}`}`];
    const ImageComponent = preview ? ProgressiveImage : StyledImage;
    const src = quokkaUrl({ width, height, g, name: quokkaName });
    return (
        <GridWrapper sx={{ display }}>
            <ImageComponent src={src} alt={alt} preview={preview || null} />
        </GridWrapper>
    );
};

export default Image;
