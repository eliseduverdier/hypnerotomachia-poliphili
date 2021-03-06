import Image from 'next/image'
import Link from "next/link"
import Layout from '../../components/layout'

import { getSortedBookPagesData } from '../../lib/getBookPages'

export async function getStaticProps() {
  const bookPages = getSortedBookPagesData()
  return {
    props: {
      bookPages
    }
  }
}

export default function tableOfContents({bookPages}) {
  return <Layout isBook>
    <ul>
      {bookPages.map(page => (
            <li key={page.id}>
              <Link href="/book/{page.id}">
                {page.content}
              </Link>
            </li>
          ))}
    </ul>
  </Layout>
}
