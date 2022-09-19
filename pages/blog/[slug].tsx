import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug, Post } from '../../blog/blog';

interface Query extends ParsedUrlQuery {
    slug: string
};

export const getStaticPaths: GetStaticPaths<Query> = async () => {
    const posts = getAllPosts();

    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<Post, Query> = async ({ 
    params
}) => {
    return {
        props: getPostBySlug(params!.slug),
    }
}

const BlogSlugPage: NextPage<Post> = ({
    title,
    publishedOn,
    tags,
    markdown
})=> {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {publishedOn}
            </div>
            <div>
                {tags.map(tag =>
                    <div
                        key={tag}
                    >
                        {tag}
                    </div>
                )}
            </div>
            <div>
                <ReactMarkdown
                    children={markdown}
                />
            </div>
        </div>
    )
};

export default BlogSlugPage;