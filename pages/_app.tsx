import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
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
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#1e1c1f"/>
                <meta name="msapplication-TileColor" content="#1e1c1f"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Script 
                src="https://datafa.st/js/script.js"
                strategy="afterInteractive"
                data-website-id="67995d645e57424b227c7d96"
                data-domain="michaelnadeau.dev"
            />
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
                        className="
                            fixed left-1/2 -translate-x-1/2
                            flex justify-center
                            z-10
                        "
                    >
                        <ul
                            className="
                                flex justify-center
                                px-3
                                rounded-full
                                ring-1 ring-white/10
                                shadow-lg
                            "
                        >
                            <div
                                className="
                                    absolute
                                    w-full h-full
                                    rounded-full
                                    bg-zinc-800/90
                                    backdrop-blur
                                "
                            />
                            <MenuLink
                                href="/"
                            >
                                Home
                            </MenuLink>
                            <MenuLink
                                href="/articles"
                            >
                                Articles
                            </MenuLink>
                            <MenuLink
                                href="/apps"
                            >
                                Apps
                            </MenuLink>
                        </ul>
                    </nav>
                    <div
                        className="mt-26"
                    >
                        <Link
                            href="/"
                        >
                            <a>
                                <img
                                    src="/images/profile.webp"
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
                <main
                    className="relative"
                >
                    <Component {...pageProps} />
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
                                href="/"
                            >
                                Home
                            </FooterLink>
                            <FooterLink
                                href="/articles"
                            >
                                Articles
                            </FooterLink>
                            <FooterLink
                                href="/apps"
                            >
                                Apps
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
    );
}

export default MyApp;

function MenuLink({
    href,
    children
}: {
    href: string;
    children: ReactNode
}) {
    const router = useRouter();
    const current = href == router.pathname;

    return (
        <li>
            <Link
                href={href}
            >
                <a
                    className={twMerge(
                        `
                            relative
                            block
                            px-3 py-2
                            text-sm font-medium text-zinc-200
                            transition
                            hover:text-cyan-500
                        `,
                        current && 'text-cyan-500'
                    )}
                >
                    {children}
                    {current &&
                        <span
                            className="
                                absolute
                                inset-x-1
                                -bottom-px
                                h-px
                                bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0
                            "
                        />
                    }
                </a>
            </Link>
        </li>
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