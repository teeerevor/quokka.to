import ImageItem from './imageItem';

export default () => (
    <>
        {[...new Array(60)].map((quok, index) => {
            let size = Math.random() >= 0.4 ? 'medium' : 'small';
            if (index !== 0 && index % 13 === 0) size = ['tall', 'wide', 'large'][Math.floor(Math.random() * 3)];
            return <ImageItem key={Math.random() * 1000} variant={size} />;
        })}
    </>
);
