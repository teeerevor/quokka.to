import styled from 'styled-components';

const StyledPicture = styled.picture`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Picture = (src, alt) => (
    <StyledPicture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img src={`${src}.jpg`} alt={alt} />
    </StyledPicture>
);

export default Picture;
