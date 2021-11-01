const { Client } = require("@notionhq/client")

export async function getAllPages() {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })
    const allPages = await notion.databases.query({
        database_id: process.env.NOTION_DB
    });

    const pages = allPages.results.map(page => ({
        params: {
            id: page.id,
            number: page.properties.Name.title[0].plain_text,
            summary: page.properties.summary.rich_text[0].text.content
        }
    }))

    pages.sort((a, b) => {
        if (+a.params.number > +b.params.number) { return 1 }
        else { return -1 }
    })

    return pages
}

export async function getPageData(id) {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })
    const page = await notion.pages.retrieve({
        page_id: id,
    })
    const blocks = await notion.blocks.children.list({
        block_id: id,
    })

    const contents = blocks.results[0].code.text[0].plain_text
    const summary = page.properties.summary.rich_text[0].text.content

    // Combine the data with the id
    return {
        id,
        contents,
        summary
    }
}