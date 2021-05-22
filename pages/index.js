import Link from 'next/link'
import Layout from '../components/layout'


export default function Home() {
    return <Layout>
        <h1>
            &nbsp;
        </h1>
        <span>ou</span>
        <h2>
            «&nbsp;le songe de poliphile&nbsp;»
        </h2>

        <p>
            <Link href="/about">à propos</Link>
        </p>

        <p>
            <Link href="/toc">table des matières</Link>
        </p>
    </Layout>
}
