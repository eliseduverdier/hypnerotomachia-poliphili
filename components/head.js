import Head from "next/head"

export const siteTitle = 'Hypnerotomachia Poliphili'

const CustomHead = () => {
    return <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href={`${process.env.BACKEND_URL}/images/favicon.png`} />
    </Head>
}

export default CustomHead;
