import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getAllPosts, Post } from '../blog/blog';
import BlogSummary from '../components/blogSummary';
import H1 from '../components/h1';

interface Props {
    posts: Array<Post>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    return {
        props: {
            posts: getAllPosts()
        },
    }
}

const Articles: NextPage<Props> = ({
    posts
}) => {
    return (
        <>    
            <section
                className="mt-6"
            >
                <Head>
                    <title>Articles - Michael Nadeau</title>
                    <meta name="description" content="Writing on software design, world exploration and solo endeavours or anything that might spark my interest."/>
                </Head>
                <div
                    className="max-w-2xl"
                >
                    <H1>
                        Writing on software design, world exploration and solo endeavours.
                    </H1>
                    <p
                        className="
                            mt-6
                            text-base
                        "
                    >
                        Or anything that might spark my interest.
                    </p>
                </div>
            </section>
            <section
                className="
                    flex flex-col
                    gap-16
                    mt-16 sm:mt-20
                "
            >
                {posts.map(post =>
                    <BlogSummary
                        key={post.slug}
                        post={post}
                    />
                )}
            </section>
        </>
    );
}

export default Articles;