import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaEtsy, FaGithub, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import dateFormat from 'dateformat';
import { IconType } from 'react-icons';
import profileImage from '../public/profile.jpg';
import hero1 from '../public/hero1.jpg';
import hero2 from '../public/hero2.jpg';
import hero3 from '../public/hero3.jpg';
import hero4 from '../public/hero4.jpg';
import hero5 from '../public/hero5.jpg';
import { getAllPosts, Post } from '../blog/blog';

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

const Home: NextPage<Props> = ({
    posts
}) => {
    return (
        <div
            className="
                sm:px-8 lg:px-16
                min-h-screen
                overflow-hidden
                bg-black
                text-zinc-400
            "
        >
            <Head>
                {/* Generated with https://realfavicongenerator.net/ */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e1c1f"/>
                <meta name="msapplication-TileColor" content="#1e1c1f"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>Michael Nadeau - Software engineer, maker, and trail runner</title>
            </Head>
            <div
                className="
                    max-w-[76rem]
                    mx-auto
                    bg-[#1e1c1f]
                    border-x border-x-zinc-700/40

                    children:px-4 sm:children:px-8 lg:children:px-12

                    children:children:mx-auto
                    children:children:max-w-2xl lg:children:children:max-w-5xl
                "
            >
                <header
                    className="pt-6"
                >
                    <nav
                        className="flex justify-center"
                    >
                        <ul
                            className="
                                flex justify-center
                                px-3
                                bg-zinc-800/90
                                rounded-full
                                ring-1 ring-white/10
                                shadow-lg
                            "
                        >
                            <MenuLink
                                href="/about"
                            >
                                About
                            </MenuLink>
                            <MenuLink
                                href="/articles"
                            >
                                Articles
                            </MenuLink>
                        </ul>
                    </nav>
                    <div
                        className="mt-16"
                    >
                        <Link
                            href="/"
                            aria-label="home"
                        >
                            <a>
                                <img
                                    src={profileImage.src}
                                    className="
                                        inline-block
                                        w-16
                                        aspect-square
                                        rounded-full
                                    "
                                    alt="Picture of Michael Nadeau"
                                />
                            </a>
                        </Link>
                    </div>
                </header>
                <main>
                    <section
                        className="mt-6"
                    >
                        <div
                            className="max-w-2xl"
                        >
                            <h1
                                className="
                                    text-4xl sm:text-5xl
                                    tracking-tight
                                    font-bold
                                    text-zinc-100
                                "
                            >
                                Software engineer, maker, and trail runner.
                            </h1>
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
                                {heroImages.map(image =>
                                    <HeroImage
                                        key={image.src}
                                        src={image.src}
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
                            <article
                                className="
                                    group
                                    relative
                                "
                            >
                                <time
                                    className="
                                        relative
                                        block
                                        z-10
                                        pl-3.5
                                        mb-3
                                        text-sm
                                        text-zinc-500
                                        border-l-2 border-solid border-zinc-500
                                    "
                                    dateTime={post.publishedOn}
                                >
                                    {dateFormat(post.publishedOn, 'mmmm dS, yyyy')}
                                </time>
                                <h2
                                    className="
                                        text-zinc-100
                                        text-lg font-semibold
                                        tracking-tight
                                    "
                                >
                                    <span 
                                            className="
                                                absolute
                                                -inset-x-4 sm:-inset-x-6
                                                -inset-y-6
                                                sm:rounded-2xl
                                                transition
                                                group-hover:bg-zinc-800/50
                                            "
                                        />
                                    <a
                                        href="#"
                                    >
                                        
                                        <span 
                                            className="
                                                absolute
                                                z-20
                                                -inset-x-4 sm:-inset-x-6
                                                -inset-y-6
                                            "
                                        />
                                        <span
                                            className="relative"
                                        >
                                            {post.title}
                                        </span>
                                    </a>
                                </h2>
                                <p
                                    className="
                                        relative
                                        mt-2
                                        text-sm
                                    "
                                >
                                    Aute reprehenderit ea amet ut aliqua eiusmod laboris commodo mollit ad esse. Nostrud dolore mollit esse ea ea amet officia adipisicing ea.
                                </p>
                                <div
                                    className="
                                        relative
                                        flex items-center
                                        gap-x-1
                                        mt-4
                                        text-sm font-medium text-cyan-500
                                    "
                                >
                                    Read article
                                    <FaChevronRight
                                        className="w-2 h-2"
                                    />
                                </div>
                            </article>
                        )}
                    </section>
                </main>
                <footer
                    className="
                        mt-32
                        pt-10 pb-16
                        border-t border-zinc-700/40
                    "
                >
                    <div
                        className="
                            flex flex-col sm:flex-row items-center justify-between
                            gap-6
                        "
                    >
                        <div
                            className="
                                flex 
                                gap-6
                            "
                        >
                            <FooterLink
                                href="/about"
                            >
                                About
                            </FooterLink>
                            <FooterLink
                                href="/articles"
                            >
                                Articles
                            </FooterLink>
                        </div>
                        <p
                            className="
                                text-sm text-zinc-500
                            "
                        >
                            © {new Date().getFullYear()} Michael Nadeau. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Home;

const heroImages = new Array(...[
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
]);

function MenuLink({
    href,
    children
}: {
    href: string;
    children: ReactNode
}) {
    return (
        <li>
            <Link
                href={href}
            >
                <a
                    className="
                        block
                        px-3 py-2
                        text-sm font-medium text-zinc-200
                        transition
                        hover:text-cyan-500
                    "
                >
                    {children}
                </a>
            </Link>
        </li>
    );
}

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
    src
}: {
    src: string
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
                Math.random() < 0.5 ? '-rotate-2' : 'rotate-2'
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

function FooterLink({
    href,
    children
}: {
    href: string;
    children: ReactNode
}) {
    return (
        <Link
            href={href}
        >
            <a
                className="
                    text-sm font-medium text-zinc-200
                    transition
                    hover:text-cyan-500
                "
            >
                {children}
            </a>
        </Link>
    );
}