import { quokkaUrl } from '~/utils/urlHelpers';

export default ({ Component, width, height, g, name, quokkas }) => {
    const quokka = quokkas && quokkas[Math.floor(Math.random() * quokkas.length)];
    const qName = name || quokka;
    const alt = qName ? `a quokka named ${qName}` : 'quokka doing quoking things';
    return (
        <Component>
            <img src={quokkaUrl({ width, height, g, name: name || quokka })} alt={alt} />
        </Component>
    );
};
