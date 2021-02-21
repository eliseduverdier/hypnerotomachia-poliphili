import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
    return <Layout>
        <div className="title">
            <h1>
                <em>Hypnerotomachia Poliphili</em>
            </h1>
        </div>

        <span>ou</span>

        <p>
            Le songe de poliphile
        </p>

        <p>
            <Link href="/about">?</Link>
        </p>

        <p>
            <Link href="/book/001">read</Link>
        </p>
    </Layout>
}
