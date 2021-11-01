import Layout from '../../components/layout'

import { useRouter } from 'next/router'

import { getAllPages, getPageData } from '../../lib/bookPages'

// type pageData = {
//     paragraph: {
//         text: Array<{
//             plain_text: string
//         }>
//     }
// };

export const getStaticPaths = async () => {
    const ids = await getAllPages()

    return {
        paths: ids,
        fallback: false,
    };
}
export const getStaticProps = async ({ params }) => {
    const pageData = await getPageData(params.id)
    const allPageIds = await getAllPages(params.id)

    const pageContent = pageData.contents
    const pageSummary = pageData.summary

    return {
        props: {
            pageId: params.id,
            pageContent,
            pageSummary,
            allPageIds,
        },
    }
}

export default function Page({ pageId, pageContent, pageSummary, allPageIds }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div className="loading">〰〰〰loading〰〰〰〰</div>
    }

    return <>
        <Layout
            isBook
            currentPageId={pageId}
            allPageIds={allPageIds}
        >
            <p className="summary">{pageSummary}</p>
            ⁂
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            ፨
        </Layout>
    </>
}