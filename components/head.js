import Head from "next/head"

export const siteTitle = 'Hypnerotomachia Poliphili'

const CustomHead = ({isBook}) => {
    return <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/images/favicon.png"/>
    </Head>
}

export default CustomHead;
