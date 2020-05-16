import Head from 'next/head';

export default ({ title, desc, image }) => (
    <Head>
        <title>{title ? `${title} | quok.in` : 'Quokka Placeholder Images | All shapes and sizes | quok.in'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content={desc || 'For those extra smiley placeholder needs'} />
        <meta name="author" content="Trev Wolf (https://trev.io)" />
        <meta name="robots" content="all" />
        <meta property="og:site_name" content="quok.in" />
        <meta
            property="og:title"
            content={title ? `${title} | quok.in` : 'Quokka Placeholder Images | All shapes and sizes | quok.in'}
        />
        <meta property="og:description" content={desc || 'For those extra smiley placeholder needs'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quok.in" />
        <meta property="og:image" content={image || 'https://quok.in/250/250/suzy'} />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="mask-icon" href="icon.svg" color="#EAAE76" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    </Head>
);
