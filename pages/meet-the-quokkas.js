import quokkas from '~/functions/quokka-fetch/quokkas';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8888/' : 'https://quok.in/';

console.log({ quokkas });
export default () => (
    <>
        <h1>Meet the quokkas</h1>
        <p>All shapes and sizes</p>
        {Object.keys(quokkas).map(key => (
            <div>
                <img src={`${BASE_URL}${200}?id=${key}`} />
                <p>{key}</p>
            </div>
        ))}
    </>
);
