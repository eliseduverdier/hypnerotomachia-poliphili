export default interface PageParams {
  pageId: string,
  pageContent: string,
  pageSummary: string,
  allPageIds: Array<{
    params: {
      id: string
    }
  }>,
}
