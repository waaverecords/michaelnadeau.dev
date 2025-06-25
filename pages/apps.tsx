import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import H1 from '../components/h1';
import { GitHubShowcase, WebsiteShowcase } from '../components/appShowcase';

interface Props {
    apps: Array<App>;
}

type App = {
    name: string;
    description: string;
} & (
    {
        type: 'website';
        url: string;
    } | (
        {
            type: 'github';
            html_url: string;
            watchers: number;
            forks: number;
            language: string;
        }
    )
);

export const getStaticProps: GetStaticProps<Props> = async () => {

    const apps = new Array<App>();

    const gitHubOwner = 'waaverecords';

    apps.push(...await Promise.all([
        { 
            type: 'github' as const,
            ...await getGitHubStats(gitHubOwner, 'PowerToys-Run-Spotify'),
        },
        { 
            type: 'website' as const,
            name: 'Streamer Emails',
            description: 'Get Twitch streamer emails tailored to your marketing, filtered by game, followers, and more.',
            url:'https://streameremails.com',
        },
        { 
            type: 'github' as const,
            ...await getGitHubStats(gitHubOwner, 'CmdPal.Ext.Spotify'),
        },
        {
            type: 'website' as const,
            name: 'Stream Nuggets',
            description:'Bi-weekly newsletter featuring updates, tips, and tools for streamers and content creators.',
            url: 'https://streamnuggets.com'
        }
    ]));

    return {
        props: {
            apps,
        },
        revalidate: 60 * 60
    };
};

const getGitHubStats = async (
    owner: string,
    repoName: string
) => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}`)
    return await response.json();
}

const Apps: NextPage<Props> = (
    {
        apps
    },
    ...props
) => {
    return (
        <>    
            <section
                className="mt-6"
            >
                <Head>
                    <title>Apps - Michael Nadeau</title>
                    <meta name="description" content="Building for Othersm making useful tools and projects."/>
                </Head>
                <div
                    className="max-w-2xl"
                >
                    <H1>
                    Building for others, making useful tools and projects.
                    </H1>
                    <p
                        className="
                            mt-6
                            text-base
                        "
                    >
                        From small utilities to full-fledged applications, these are the projects I've built to make an impact.
                    </p>
                </div>
            </section>
            <section
                className="
                    grid grid-cols-1 lg:grid-cols-2
                    gap-16
                    mt-16 sm:mt-20
                "
            >
                {apps.map((app, i) => {

                    if (app.type === 'website')
                        return (
                            <WebsiteShowcase
                                key={i}
                                name={app.name}
                                description={app.description}
                                url={app.url}
                            />
                        );

                    if (app.type === 'github')
                        return (
                            <GitHubShowcase
                                key={i}
                                name={app.name}
                                description={app.description}
                                url={app.html_url}
                                stars={app.watchers}
                                forks={app.forks}
                                language={app.language}
                            />
                        );
                })}
                
            </section>
        </>
    );
}

export default Apps;