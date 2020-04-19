import React, { useState, useEffect, useCallback, useRef } from 'react';
import StyledImage from './styledImage';

const ProgressiveImage = ({ preview, src, alt, style }) => {
    const [isLoading, setIsLoading] = useState(true);
    const loadingImage = useRef();

    const callback = useCallback(() => {
        setIsLoading(false);
        loadingImage.current = null;
    }, []);
    useEffect(() => {
        const newImage = new Image();
        newImage.onload = callback;
        newImage.src = src;
        loadingImage.current = newImage;
    }, []);

    return (
        <StyledImage
            style={{
                ...style,
                transition: '0.5s filter linear',
                filter: isLoading ? 'blur(21px)' : '',
                display: 'block',
            }}
            src={isLoading ? preview : src}
            alt={`${alt} | ${isLoading}`}
        />
    );
};

export default ProgressiveImage;
