import quokkas from '~/functions/quokka-fetch/quokkas';
import { quokkaUrl } from '~/utils/urlHelpers';

export default () => (
    <>
        <h1>Meet the quokkas</h1>
        <p>All shapes and sizes</p>
        {Object.keys(quokkas).map(key => (
            <div>
                <img
                    src={quokkaUrl({ width: 200, name: key })}
                    alt={['duo', 'trio'].includes(key) ? `a ${key} of quokkas` : `${key} the quokka`}
                />
                <p>{key}</p>
            </div>
        ))}
    </>
);
