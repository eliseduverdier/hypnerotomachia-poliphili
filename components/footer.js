import Link from "next/link"

export default function Footer({isBook, currentPage}) {

    // TODO compute pagination elsewhere?
    let prevPage = parseInt(currentPage) - 1
    let nextPage = parseInt(currentPage) + 1
    if (prevPage < 0) { prevPage = 0 }
    else if (nextPage > 10) { nextPage = 10 }

    return (
      <footer>
         {isBook ? (
        <>
          <Link href={`/book/${prevPage}`}>
            <a className="link"> &larr; </a>
          </Link>
          &nbsp;
          <Link href="/book">
            <a className="link"> &equiv; </a>
          </Link>
          &nbsp;
          <Link href={`/book/${nextPage}`}>
            <a className="link"> &rarr; </a>
          </Link>
        </>
        ):(
            <Link href="/book/000"><a className="link">read</a></Link>
        )}
      </footer>
    );
}