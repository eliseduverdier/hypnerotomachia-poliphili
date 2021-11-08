import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { getAllPages, getPageData } from '../../lib/bookPages'
import PageParams from "../../interfaces/PageParams"
import PropsParams from "../../interfaces/PropsParams"


export const getStaticPaths = async () => {
    const ids = await getAllPages()

    return {
        paths: ids,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }: PropsParams) => {
    const pageData = await getPageData(params.id)
    const allPageIds = await getAllPages()

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

export default function Page({ pageId, pageContent, pageSummary, allPageIds }: PageParams) {
    const router = useRouter()

    if (router.isFallback) {
        return <div className="loading">〰〰〰loading〰〰〰〰</div>
    }

    return <>
        <Layout
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
