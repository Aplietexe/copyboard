import { type NextPage } from "next";
import Head from "next/head";
import { Card, CardContent, } from "~/components/ui/card";
import { Input } from "~/components/ui/input"


const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Copyboard gives you a clipboard that you can access from any browser, from any device." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <Card>
                    <CardContent>
                        <Input />
                    </CardContent>
                </Card>
            </main>
        </>
    );
};

export default Home;
