export default interface QueryDatabaseResponse {
  id: string,
  properties: {
    Name: {
      title: Array<{
        plain_text: string
      }>
    },
    summary: {
      rich_text: Array<{
        text: {content: string}
      }>
    }
  }
}
