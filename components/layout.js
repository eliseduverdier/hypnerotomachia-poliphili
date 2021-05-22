import Link from "next/link"
import Nav from "./nav.js"
import Footer from "./footer.js"
import CustomHead from "./head.js"

export default function Layout({children, isBook, currentPage}) {
    return <div className="container">

        <CustomHead/>

        <Nav/>

        <main>
            {children}
        </main>

        <Footer isBook = {isBook} currentPage = {currentPage}/>
    </div>
}
