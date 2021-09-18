import Head from 'next/head';

export default ({ title, desc, image }) => (
    <Head>
        <title>{title ? `${title} | quokka.to` : 'Quokka Placeholder Images | All shapes and sizes | quokka.to'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={desc || 'For those extra smiley placeholder needs'} />
        <meta name="author" content="Trev Wolf (https://trev.io)" />
        <meta name="robots" content="all" />
        <meta property="og:site_name" content="quokka.to" />
        <meta
            property="og:title"
            content={title ? `${title} | quokka.to` : 'Quokka Placeholder Images | All shapes and sizes | quokka.to'}
        />
        <meta property="og:description" content={desc || 'For those extra smiley placeholder needs'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quokka.to" />
        <meta property="og:image" content={image || 'https://quokka.to/250/250/suzy'} />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="mask-icon" href="icon.svg" color="#EAAE76" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    </Head>
);
