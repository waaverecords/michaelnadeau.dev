import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export type Post = {
    slug: string;
    title: string;
    publishedOn: string;
    preview: string;
    markdown: string;
};

export function getAllPosts() {
    const folderPath = path.join(root, 'blog', 'posts');

    if (!fs.existsSync(folderPath))
        return new Array();

    const files = fs.readdirSync(folderPath);

    const posts = files.reduce((posts, fileName) => {
        const post = getPostBySlug(fileName.replace('.md', ''));
        
        return [
            post,
            ...posts,
        ];
    }, new Array<Post>());
    return posts.sort((a, b) => a.publishedOn < b.publishedOn ? 1 : a.publishedOn == b.publishedOn ? 0 : -1);
};

export function getPostBySlug(slug: string) {
    const content = fs.readFileSync(path.join(root, 'blog', 'posts', `${slug}.md`), 'utf8');

    const { data: metadata, content: markdown } = matter(content)

    return {
        ...metadata,
        preview: `${markdown.split(' ').slice(0, 24).join(' ')}...`,
        slug: slug,
        markdown,
    } as Post;
}