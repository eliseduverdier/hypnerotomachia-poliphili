import Link from "next/link"

// TODO get current page and calculate pagination

export default function Footer({isBook}) {
    return (
      <footer>
        {/*  {isBook ?( */}
        <>
          <Link href="/book/000">
            <a className="link"> &larr; </a>
          </Link>
          &nbsp;[
          <Link href="/book">
            <a className="link"> &equiv; </a>
          </Link>
          ]&nbsp;
          <Link href="/book/001">
            <a className="link"> &rarr; </a>
          </Link>
        </>
        {/* ):(
            <Link href="/book/000"><a className="link">read</a></Link>
        )} */}
      </footer>
    );
}