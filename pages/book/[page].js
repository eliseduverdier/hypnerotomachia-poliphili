import Layout from '../../components/layout'

import { useRouter } from 'next/router'

import { getAllPagesIds, getPageData } from '../../lib/bookPages'

export async function getStaticProps({ params }) {
  const pageData = getPageData(params.page)
  return {
    props: {
      pageData
    },
  } 
}

export async function getStaticPaths() {
  const paths = getAllPagesIds()

  return {
    paths,
    fallback: false,
  }
}

export default function Page({ pageData }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div className="loading">Loading…</div>
  }

  return <Layout 
            isBook 
            currentPage = {pageData.id}
         >
    <div dangerouslySetInnerHTML={{ __html: pageData.contents }} />
  </Layout>
}
