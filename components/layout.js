import Head from "next/head"
import Link from "next/link"
import Nav from "./nav.js"
import Footer from "./footer.js"

export const siteTitle = 'Hypnerotomachia Poliphili'

export default function Layout({children, isBook}) {
    return <body>

        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon-hypnero.png"/>
        </Head>

        <Nav/>

        <main>
        {children}
        </main>

        {/* <Footer {...isBook}/> */}

        <footer>
        &nbsp;~&nbsp;
        {isBook ?(
            <>
            <Link href="/book/001"><a className="link"> &larr; </a></Link>
                &nbsp;~&nbsp;
            <Link href="/book/001"><a className="link"> &rarr; </a></Link>
            </>
        ):(
            <Link href="/book/001"><a className="link">read</a></Link>
        )}
        &nbsp;~&nbsp;
    </footer>
        
    </body>

}
