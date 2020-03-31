import { sizeMap } from '~/data/sizes';
import ImageItem from './imageItem';

export default () => (
    <>
        {[...new Array(60)].map((quok, index) => {
            const size =
                index !== 0 && index % 13 === 0
                    ? ['tall', 'wide', 'large'][Math.floor(Math.random() * 3)]
                    : Math.random() >= 0.4
                    ? 'medium'
                    : 'small';
            return <ImageItem key={Math.random() * 1000} {...sizeMap[size]} />;
        })}
    </>
);
