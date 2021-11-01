import Link from "next/link"

export default function Footer({ isBook, currentPageId, allPageIds }) {
    if (isBook) {
        const pageIds = allPageIds.map(id => id.params.id)
        const index = pageIds.indexOf(currentPageId)
        const prevPage = index == 0 ? -1 : pageIds[index - 1]
        const nextPage = index == pageIds.length - 1 ? -1 : pageIds[index + 1]
        // const firstPage = pageIds[0] // todo access from !isBook pages

        return (
            <footer>
                <div className="footer-top">
                    {prevPage === -1 ? <>&nbsp;</> : <Link href={`/book/${prevPage}`}>
                        <a className="link"> &larr; </a>
                    </Link>}
                    &nbsp;
                    <Link href="/toc"><a className="link">∀</a></Link>
                    &nbsp;
                    {nextPage === -1 ? <>&nbsp;</> : <Link href={`/book/${nextPage}`}>
                        <a className="link"> &rarr; </a>
                    </Link>}
                </div>
            </footer>
        );
    } else {
        return (
            <footer>
                <div className="footer-top">
                    <Link href={`/toc`}><a className="link">read</a></Link>
                </div>
            </footer>
        );
    }
}