import Link from 'next/link'
import Layout from '../components/layout'


export default function Home() {
    return <Layout>
        <div className="title">
            <h1>
                Hypnerotomachia Poliphili
            </h1>
        </div>

        <span>ou</span>

        <h2>
            Le songe de poliphile
        </h2>

        <p>
            <Link href="/about">à propos</Link>
        </p>

        <p>
            <Link href="/book/000">lire</Link>
        </p>
    </Layout>
}
