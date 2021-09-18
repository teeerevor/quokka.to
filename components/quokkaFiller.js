import Image from '~/components/image';

const QuokkaFiller = () => (
    <>
        {[...new Array(60)].map((quok, index) => {
            let size = Math.random() >= 0.4 ? 'medium' : 'small';
            if (index !== 0 && index % 13 === 0) size = ['tall', 'wide', 'large'][Math.floor(Math.random() * 3)];
            return <Image key={Math.random() * 1000} variant={size} />;
        })}
    </>
);

export default QuokkaFiller;
