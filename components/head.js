import Head from "next/head"

export const siteTitle = 'Hypnerotomachia Poliphili'

export default function Footer({isBook}) {
    return <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/images/favicon.png"/>
    </Head>
}