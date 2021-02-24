import Head from 'next/head';

export default function HeadComponent() {
    return (
        <Head>
            <title>Asante2gether</title>
            <link rel="icon" type="image/png" href="/images/logos/favicon.png" />
            <meta name="description" content="Asante2gether assists local communities to generate income, to find their purpose, and to enable self-sufficiency." />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://www.asante2gether.co.za/`} />


            <meta name="author" content="Webdacity" />
            <meta name="copyright" content={`Asante2gether @ 2021`} />
            <meta name="theme-color" content="#ffffff" />

            {/* Open Graph */}
            <meta property="og:site_name" content="Asante2gether" />
            <meta property="og:title" content="Asante2gether" />
            <meta property="og:description" content="Asante2gether assists local communities to generate income, to find their purpose, and to enable self-sufficiency." />
            <meta property="og:type" content="Website" />
            <meta property="og:url" content={`https://www.asante2gether.co.za/`} />
            <meta property="og:image" name="image" content="https://www.asante2gether.co.za/images/logos/social.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:image:alt" content="Asante2gether Logo" />
        </Head>
    )
}
