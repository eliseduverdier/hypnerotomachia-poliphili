// import fs from 'next/fs'
// import path from 'next/path'

// const pagesFolder = path.join(process.cwd(), '/public/pages')

export function getSortedBookPagesData() {
//     const fileNames = fs.readdirSync(pagesFolder);

// console.log('::::::::pagesFolder:::::::'+pagesFolder);
// console.log(fileNames);

//     const allPages = fileNames.map(fileName => {
//         const id = fileName.replace(/\.html$/, '');

//         const fullPath = path.join(postsDirectory, fileName);
//         const fileContents = fs.readFileSync(fullPath, 'utf8');

//         return {
//             id:id, content:fileContents,
//         };
//     })
    
    return [
        {id: 1, content: 'coucou 111'},
        {id: 2, content: 'coucou 222'},
        {id: 3, content: 'coucou 333'},
    ]//allPages
}