import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Returns all posts (id, title, date), newest first. Used on the home page.
export function getSortedPostsData() {
  // 1. Get the file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 2. Use the file name (without .md) as the post id
    const id = fileName.replace(/\.md$/, '');

    // 3. Read the file as a string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 4. Parse the front matter (title, date) with gray-matter
    const matterResult = matter(fileContents);

    return { id, ...matterResult.data };
  });

  // 5. Sort by date, newest first
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Returns the list of ids for getStaticPaths in pages/posts/[id].js
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

// Returns one post, with the Markdown body converted to HTML
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Convert Markdown to HTML with remark
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
