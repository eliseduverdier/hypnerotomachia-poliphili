const { Client } = require("@notionhq/client")

export async function getAllPagesIds() {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })
    const allPages = await notion.databases.query({
        database_id: process.env.NOTION_DB
    });

    const allPagesIds = allPages.results.map(page => page.id)

    const ids = allPagesIds.map(id => ({
        params: { page: id }
    }))

    return ids.sort();
}

export async function getPageData(id) {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })
    const page = await notion.blocks.children.list({
        block_id: id,
    });

    const contents = page.results[0].code.text[0].plain_text

    // Combine the data with the id
    return {
        id,
        contents,
    }
}