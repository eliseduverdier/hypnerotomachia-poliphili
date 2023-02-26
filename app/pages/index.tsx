import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hypnerotomachia Poliphili</title>
        <meta name="description" content="Hypnerotomachia Poliphili ⸽ the first incunable ⸽ online" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className="main">
        <h1>
            Hypnerotomachia Poliphili
        </h1>
        <span>❨ou❩</span>
        <h2>
            «&nbsp;le songe de poliphile&nbsp;»
        </h2>

        <p>
            <Link href={`/about`}>à propos ➫</Link>
        </p>

        <p>
            <Link href={`/table-of-contents`}>table des matières ❡</Link>
        </p>
      </main>


    </div>
  )
}

export default Home
