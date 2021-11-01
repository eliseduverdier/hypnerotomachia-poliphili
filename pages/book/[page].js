import Layout from '../../components/layout'

import { useRouter } from 'next/router'

import { getAllPagesIds, getPageData } from '../../lib/bookPages'

// type pageData = {
//     paragraph: {
//         text: Array<{
//             plain_text: string
//         }>
//     }
// };

export const getStaticPaths = async () => {
    const ids = await getAllPagesIds()

    return {
        paths: ids,
        fallback: false,
    };
}
export const getStaticProps = async ({ params }) => {
    const pageData = await getPageData(params.page)
    const allPageIds = await getAllPagesIds(params.page)

    const pageContent = pageData.contents.paragraph.text[0].plain_text

    return {
        props: {
            pageId: params.page,
            pageContent,
            allPageIds,
        },
    }
}

export default function Page({ pageId, pageContent, allPageIds }) {
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
            ⁂
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            ፨
        </Layout>
    </>
}