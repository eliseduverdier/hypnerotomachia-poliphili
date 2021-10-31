import Nav from "./nav.js"
import Footer from "./footer.js"
import CustomHead from "./head.js"

export default function Layout({ children, isBook, currentPageId, allPageIds }) {
    return <>
        <div className="container">
            <CustomHead />
            <Nav />
            <main>
                {children}
            </main>
            <Footer isBook={isBook} currentPageId={currentPageId} allPageIds={allPageIds} />
        </div>
    </>
}
