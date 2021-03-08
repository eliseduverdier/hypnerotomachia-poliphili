import Image from 'next/image'
import Link from "next/link"
import Layout from '../components/layout'

import { getBookPagesData } from '../lib/bookPages'

export async function getStaticProps() {
  const bookPagesData = getBookPagesData()
  return {
    props: {
      bookPagesData
    }
  }
}

export default function tableOfContents({bookPagesData}) {
  return <Layout isBook>
    <ul>
        {bookPagesData.map(({ id, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
            </li>
          ))}
        </ul>
  </Layout>
}
