import Link from "next/link"
import Layout from '../components/layout'

import { getAllPagesIds } from '../lib/bookPages'

export async function getStaticProps() {
    const ids = await getAllPagesIds()

    return {
        props: {
            ids: ids.map(param => param.params)
        }
    }
}

export default function book({ ids }) {
    return <Layout>
        <ul>
            {ids.map((id) => (
                <li key={id.page}>
                    <Link href={`/book/${id.page}`}>
                        <a>↝ {id.page} ↯</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
}