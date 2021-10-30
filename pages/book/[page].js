import Layout from '../../components/layout'

import { useRouter } from 'next/router'

import { getAllPagesIds, getPageData } from '../../lib/bookPages'


export const getStaticPaths = async () => {
    const ids = await getAllPagesIds()

    return {
        paths: ids,
        fallback: false,
    };
}
export const getStaticProps = async ({ params }) => {
    const pageData = await getPageData(params.page)

    const content = pageData.contents.paragraph.text[0].plain_text

    return {
        props: {
            id: params.page,
            content
        },
    }
}

export default function Page({ id, content }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div className="loading">Loading…</div>
    }

    return <>
        <Layout
            isBook
            currentPage={id}
        >
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    </>
}