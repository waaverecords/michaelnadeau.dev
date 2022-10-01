import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { FaEtsy, FaGithub, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { IconType } from 'react-icons';
import hero1 from '../public/hero1.jpg';
import hero2 from '../public/hero2.jpg';
import hero3 from '../public/hero3.jpg';
import hero4 from '../public/hero4.jpg';
import hero5 from '../public/hero5.jpg';
import { getAllPosts, Post } from '../blog/blog';
import H1 from '../components/h1';
import BlogSummary from '../components/blogSummary';

interface Props {
    posts: Array<Post>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    return {
        props: {
            posts: getAllPosts().splice(0, 3)
        },
    }
}

const Home: NextPage<Props> = ({
    posts
}) => {
    return (
        <>
            <Head>
                <title>Michael Nadeau - Software engineer, maker, and trail runner</title>
            </Head>
            <section
                className="mt-6"
            >
                <div
                    className="max-w-2xl"
                >
                    <H1>
                        Software engineer, maker, and trail runner.
                    </H1>
                    <p
                        className="
                            text-base
                            mt-6
                        "
                    >
                        Commodo aliquip fugiat eu cupidatat ullamco magna occaecat officia veniam ut. Minim aliquip est aute tempor tempor amet. In voluptate Lorem cillum ad consectetur consequat voluptate duis irure sint.
                    </p>
                    <div
                        className="
                            flex flex-row
                            gap-6
                            mt-6
                        "
                    >
                        <SocialLink
                            href="https://twitter.com/waaverecords"
                            icon={FaTwitter}
                        />
                        <SocialLink
                            href="https://github.com/waaverecords"
                            icon={FaGithub}
                        />
                        <SocialLink
                            href="https://www.youtube.com/channel/UCi10yZa5xAxsJbGpqCZdlRw"
                            icon={FaYoutube}
                        />
                        <SocialLink
                            href="https://www.twitch.tv/waaverecords"
                            icon={FaTwitch}
                        />
                        <SocialLink
                            href="https://www.etsy.com/ca/shop/WaaveRecords"
                            icon={FaEtsy}
                        />
                    </div>
                </div>
                <div
                    className="mt-14 sm:mt-20"
                >
                    <div
                        className="
                            relative
                            inline-grid grid-flow-col
                            py-1
                            gap-5 sm:gap-8
                            left-1/2
                            -translate-x-1/2
                        "
                    >
                        {heroImages.map((image, i) =>
                            <HeroImage
                                key={image.src}
                                src={image.src}
                                className={heroImageRotations[i] ? 'rotate-2' : '-rotate-2'}
                            />
                        )}
                    </div>
                </div>
            </section>
            <section
                className="
                    flex flex-col
                    gap-16
                    mt-24
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

export default Home;

const heroImages = new Array(...[
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
]);

const heroImageRotations = new Array(...[
    true,
    false,
    true,
    true,
    false
]);

function SocialLink({
    href,
    icon
}: {
    href: string;
    icon: IconType;
}) {
    const Icon = icon;
    return (
        <Link
            href={href}
        >
            <a
                className="
                    p-1
                    transition
                    hover:text-zinc-300
                "
            >
                <Icon
                    className="w-5 h-5"
                />
            </a>
        </Link>
    );
}

function HeroImage({
    src,
    className
}: {
    src: string,
    className?: string
}) {
    return (
        <div
            className={twMerge(
                `
                    w-44 sm:w-72
                    aspect-[9/10]
                    overflow-hidden
                    rounded-xl sm:rounded-2xl
                `,
                className
            )}
        >
            <img
                className="
                    w-full h-full
                    object-cover
                "
                src={src}
            />
        </div>
    );
}