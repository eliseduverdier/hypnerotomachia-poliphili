import Link from 'next/link'
import Layout from '../components/layout'


export default function Home() {
    return <Layout>
        <h1>
            Hypnerotomachia Poliphili
        </h1>
        <span>ou</span>
        <h2>
            Le songe de poliphile
        </h2>

        <p>
            <Link href="/about">à propos</Link>
        </p>

        <p>
            <Link href="/book">lire</Link>
        </p>
    </Layout>
}
