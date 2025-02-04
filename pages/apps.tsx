import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import H1 from '../components/h1';
import { GitHubShowcase, WebsiteShowcase } from '../components/appShowcase';

interface Props {
    apps: Array<App>;
}

type App = {} & (
    {
        type: 'website';
        // TODO: declare appropriate properties
    } | (
        {
            type: 'github';
            name: string;
            description: string;
            html_url: string;
            watchers: number;
            forks: number;
            language: string;
        }
    )
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {

    const apps = new Array();

    const gitHubOwner = 'waaverecords';

    apps.push(...await Promise.all([
        { 
            type: 'github',
            ...await getGitHubStats(gitHubOwner, 'powertoys-run-spotify')
        }
    ]));

    return {
        props: {
            apps
        }
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
                    flex flex-col
                    gap-16
                    mt-16 sm:mt-20
                "
            >
                {apps.map((app, i) => {

                    if (app.type === 'website')
                        return (
                            <WebsiteShowcase
                                key={i}
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