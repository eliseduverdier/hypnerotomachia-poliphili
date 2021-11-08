import GetStaticProps from "next"
import Link from "next/link"
import Layout from '../components/Layout'

import { getAllPages } from '../lib/bookPages'

interface PageProps { // TODO nope
    props: Array<{
        pages: {
            params: PageType
        }
    }>
}

interface PageType {
    id: number,
    number: string,
    summary: string,
}

export const getStaticProps = async () => { // TODO add type : GetStaticProps
    const pages = await getAllPages()

    return {
        props: {
            pages: pages.map(param => param.params)
        }
    }
}

export default function TableOfContents({ pages }: any) : JSX.Element { // TODO PagesProps
    return <>
        <Layout currentPageId={null} allPageIds={[]}>
            <ul>
                {pages.map((page: PageType) => (
                    <li key={page.id}>
                        <Link href={`/book/${page.id}`}>
                            <a>{page.number} ↯ <div className="summary">{page.summary}</div> ↝ </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    </>
}
