import { quokkaUrl } from '~/utils/urlHelpers';
import { sizeMap } from '~/data/sizes';
import quokkaPreviewsMap from '~/data/quokkaBase64Map';
import ProgressiveImage from './progressiveImage';
import Image from './styledImage';

export default ({ variant, name, display }) => {
    const { Component, width, height, g, quokkaNames } = sizeMap[variant] || {};
    const quokkaName = name || quokkaNames[Math.floor(Math.random() * quokkaNames.length)];
    const alt = `a quokkaName named ${quokkaName}`;
    const preview = quokkaPreviewsMap[quokkaName];
    const ImageComponent = !!preview ? ProgressiveImage : Image;
    const src = quokkaUrl({ width, height, g, name: quokkaName });
    return (
        <Component sx={{ display }}>
            <ImageComponent src={src} alt={alt} preview={preview || null} />
        </Component>
    );
};
