import Head from 'next/head';

export default function HomePage(){
    console.log('[HomePage] render');
    return (
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </main>
        </>
    );
}