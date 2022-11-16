import type { NextPage } from 'next';
import Head from 'next/head';

interface Props {
}

const Articles: NextPage<Props> = ({
}) => {
    return (
        <section
            className="mt-6"
        >
            <Head>
                <title>About - Michael Nadeau</title>
            </Head>
            Coming soon.
        </section>
    );
}

export default Articles;