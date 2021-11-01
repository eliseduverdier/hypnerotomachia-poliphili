import Link from "next/link"
import Layout from '../components/layout'

import { getAllPages } from '../lib/bookPages'

export async function getStaticProps() {
    const pages = await getAllPages()

    return {
        props: {
            pages: pages.map(param => param.params)
        }
    }
}

export default function book({ pages }) {
    return <Layout>
        <ul>
            {pages.map((page) => (
                <li key={page.id}>
                    <Link href={`/book/${page.id}`}>
                        <a>{page.number} ↯ <div className="summary">{page.summary}</div> ↝ </a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
}