import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { FaEtsy, FaGithub, FaSuitcase, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { IconType } from 'react-icons';
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
                        I'm Michael, a software engineer and outdoor enthusiast based in Saint-Georges. I take on projects which blend art, software, and electronics. I make it a priority to learn something new every day.
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
                        {heroImagePaths.map((path, i) =>
                            <HeroImage
                                key={path}
                                src={path}
                                className={heroImageRotations[i] ? 'rotate-2' : '-rotate-2'}
                            />
                        )}
                    </div>
                </div>
            </section>
            <section
                className="
                    grid 
                    grid-cols-1 lg:grid-cols-2
                    gap-y-20
                    mt-24
                "
            >
                <div
                    className="
                        flex flex-col
                        gap-16
                    "
                >
                    {posts.map(post =>
                        <BlogSummary
                            key={post.slug}
                            post={post}
                        />
                    )}
                </div>
                <div
                    className="lg:pl-16 xl:pl-24"
                >
                    <div
                        className="
                            p-6
                            border border-zinc-700/40
                            rounded-2xl
                        "
                    >
                        <h2
                            className="
                                flex
                                text-sm font-semibold
                            "
                        >
                            <FaSuitcase
                                className="
                                    w-5 h-5
                                    text-zinc-600
                                "
                            />
                            <span
                                className="
                                    ml-3
                                    text-zinc-100
                                "
                            >
                                Work
                            </span>
                        </h2>
                        <ol
                            className="
                                space-y-4
                                mt-6
                            "
                        >
                            <CVItem
                                companyName="CDID"
                                companyImage="/images/cv-cdid.png"
                                role="Research and Dev."
                                fromYear={2019}
                            />
                            <CVItem
                                companyName="École de technologie supérieure"
                                companyImage="/images/cv-ets.png"
                                role="C# Software Engineer"
                                fromYear={2014}
                                toYear={2014}
                            />
                            <CVItem
                                companyName="N'ware Technologies Inc."
                                companyImage="/images/cv-nware.png"
                                role="Analyst Programmer"
                                fromYear={2012}
                                toYear={2013}
                            />
                        </ol>
                    </div>
                </div>
            </section>
            </>
    );
}

export default Home;

const heroImagePaths = new Array(...[
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
    '/images/hero5.jpg',
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

function CVItem({
    companyName,
    companyImage,
    role,
    fromYear,
    toYear
}: {
    companyName: string;
    companyImage: string;
    role: string;
    fromYear: number;
    toYear?: number;
}) {
    return (
        <li
            className="flex gap-4"
        >
            <div
                className="
                    flex flex-none items-center justify-center
                    mt-1
                    w-10 h-10
                    border border-zinc-700/50
                    rounded-full
                    shadow-md shadow-zinc-800/5
                    bg-zinc-800
                "
            >
                <img
                    className="w-7 h-7"
                    src={companyImage}
                />
            </div>
            <dl
                className="flex flex-auto flex-wrap"
            >
                <dd
                    className="
                        w-full
                        text-sm font-medium text-zinc-100
                    "
                >
                    {companyName}
                </dd>
                <dd
                    className="text-xs text-zinc-400"
                >
                    {role}
                </dd>
                <dd
                    className="
                        ml-auto
                        text-xs text-zinc-500
                    "
                >
                    <time
                        dateTime={fromYear.toString()}
                    >
                        {fromYear}
                    </time>
                    <span>
                        &nbsp;—&nbsp;
                    </span>
                    <time
                        dateTime={toYear ? toYear.toString() : new Date().getFullYear().toString()}
                    >
                        {toYear || 'Present'}
                    </time>
                </dd>
            </dl>
        </li>
    );
};