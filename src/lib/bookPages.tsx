const { Client } = require("@notionhq/client")
import QueryDatabaseResponse from "../interfaces/QueryDatabaseResponse"
import ApiPage from "../interfaces/ApiPage"
import ApiPageData from "../interfaces/ApiPageData"

export async function getAllPages() : Promise<Array<ApiPage>>
{
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })
    const allPages = await notion.databases.query({
        database_id: process.env.NOTION_DB
    });

    const pages = allPages.results.map((page: QueryDatabaseResponse) => ({
        params: {
            id: page.id,
            number: page.properties.Name.title[0].plain_text,
            summary: page.properties.summary.rich_text[0].text.content
        }
    }))

    pages.sort((a: ApiPage, b: ApiPage) => {
        if (+a.params.number > +b.params.number) { return 1 }
        else { return -1 }
    })

    return pages
}

export async function getPageData(uuid: string): Promise<ApiPageData>
{
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })
    const page = await notion.pages.retrieve({
        page_id: uuid,
    })
    const blocks = await notion.blocks.children.list({
        block_id: uuid,
    })

    const contents = blocks.results[0].code.text[0].plain_text
    const summary = page.properties.summary.rich_text[0].text.content

    // Combine the data with the id
    return {
      uuid,
      summary,
      contents,
    }
}
