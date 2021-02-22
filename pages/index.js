import Head from 'next/head'
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
            <Link href="/about">?</Link>
        </p>

        <p>
            <Link href="/book/000">read</Link>
        </p>
    </Layout>
}
