import Link from "next/link"
import Nav from "./nav.js"
import Footer from "./footer.js"
import Head from "./head.js"

export default function Layout({children, isBook}) {
    return <div className="container">

        <Head/>

        <Nav/>

        <main className={isBook ? "book" : ""}>
            {children}
        </main>

        <Footer {...isBook}/>
    </div>
}
