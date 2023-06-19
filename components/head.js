import Head from 'next/head';

export const QuokkaHead = ({ title, desc, image }) => (
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
        <link rel="mask-icon" href="icon.svg" color="#EAAE76" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
);
