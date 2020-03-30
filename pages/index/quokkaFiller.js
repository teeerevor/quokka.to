import { sizeMap } from './sizes';
import Item from './item';

export default () => (
    <>
        {[...new Array(60)].map((quok, index) => {
            const size =
                index !== 0 && index % 13 === 0
                    ? ['tall', 'wide', 'large'][Math.floor(Math.random() * 3)]
                    : Math.random() >= 0.4
                    ? 'medium'
                    : 'small';
            return <Item key={Math.random() * 1000} {...sizeMap[size]} />;
        })}
    </>
);
