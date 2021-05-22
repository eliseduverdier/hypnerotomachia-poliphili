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

export default function book({bookPagesData}) {
  //bookPagesData.sort()
  return <Layout>
    <ul>
      {bookPagesData.map( (page) => (
        <li key={page.id}>
          <a href={`/book/${page.id}`}>
            [{page.id}]
          </a> 
        </li> 
      ))}
    </ul>
  </Layout>
}
