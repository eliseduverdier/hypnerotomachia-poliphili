import Nav from "./Nav"
import Footer from "./Footer"
import CustomHead from "./CustomHead"
import ForkMeOnGithub from "./ForkMeOnGithub"

interface PageProps {
  children: any, // TODO what ?
  currentPageId: string|null,
  allPageIds: Array<{
    params: {id: string}
  }>
}

export default function Layout({ children, currentPageId, allPageIds }: PageProps) {
    return <>
        <div className="container">
            <ForkMeOnGithub />
            <CustomHead />
            <Nav />
            <main>
                {children}
            </main>
            <Footer currentPageId={currentPageId} allPageIds={allPageIds} />
        </div>
    </>
}
