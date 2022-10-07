import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { FaArrowLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { CodeBlock, nord } from 'react-code-blocks';
import { getAllPosts, getPostBySlug, Post } from '../../blog/blog';
import H1 from '../../components/h1';
import Time from '../../components/time';

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
    const router = useRouter();

    return (
        <section
            className="
                mt-6
                xl:relative
            "
        >
            <Head>
                <title>{title} - Michael Nadeau</title>
            </Head>
            <div
                className="
                    max-w-2xl
                    mx-auto
                "
            >
                <button
                    className="
                        flex
                        items-center justify-center
                        w-10 h-10
                        mb-8
                        bg-zinc-800
                        rounded-full
                        border border-zinc-700/50 hover:border-zinc-700
                        shadow-md shadow-zinc-800/5
                        ring-0 ring-white/10 hover:ring-white/20
                        transition
                        group

                        lg:absolute
                        lg:-left-5
                        lg:mb-0
                        lg:-mt-2
                        xl:-top-1.5
                        xl:left-0
                        xl:mt-0
                    "
                    onClick={() => router.push('/articles')}
                >
                    <FaArrowLeft
                        className="
                            w-3 h-3
                            text-zinc-500
                            group-hover:text-zinc-400
                            transition
                        "
                    />
                </button>
                <article>
                    <Time
                        className="text-base"
                    >
                        {publishedOn}
                    </Time>
                    <H1
                        className="mt-6"
                    >
                        {title}
                    </H1>
                    <div
                        className="
                            mt-8
                            prose prose-invert
                        "
                    >
                        <ReactMarkdown
                            children={markdown}
                            remarkPlugins={[remarkGfm]}
                            transformImageUri={src => src.replace(/^\/public/, '')}
                            components={{
                                code: ({ children, className }) => {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return <CodeBlock
                                        text={children}
                                        showLineNumbers={false}
                                        theme={customTheme}
                                        language={match ? match[1] : undefined}
                                    />
                                }
                            }}
                        />
                    </div>
                </article>
            </div>
        </section>
    )
};

export default BlogSlugPage;

const customTheme = { ...nord };
Object.getOwnPropertyNames(customTheme)
    .forEach(name => customTheme[name as keyof typeof customTheme] = 'inherit');
customTheme.backgroundColor = 'unset';
customTheme.textColor = '#f4f4f5';
customTheme.functionColor = '#f472b6';