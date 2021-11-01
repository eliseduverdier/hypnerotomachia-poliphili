import Layout from '../components/layout'

import { getAllPagesIds, getBookPagesData } from '../lib/bookPages'

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
                    <a href={`${process.env.BACKEND_URL}/book/${id.page}`}>
                        ↝ {id.page} ↯
                    </a>
                </li>
            ))}
        </ul>
    </Layout>
}
