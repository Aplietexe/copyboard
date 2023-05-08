import { type NextPage } from "next";
import Head from "next/head";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Copyboard gives you a clipboard that you can access from any browser, from any device." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row">
                    <div className="">
                        <Card className="">
                            <CardHeader>
                                <h2 className="text-xl font-bold">Paste new copy</h2>
                            </CardHeader>
                            <CardContent className="flex gap-4">
                                <Input type="text" placeholder="But that all changed when the Fire Nation attacked..." />
                                <Button type="submit">Add</Button>
                            </CardContent>
                        </Card>
                        <Separator className="my-4" />
                    </div>
                    <div className="h-10 bg-red-500">1</div>
                    <div className="h-10 bg-red-500">2</div>
                    <div className="h-10 bg-red-500">3</div>
                    <div className="h-10 bg-red-500">4</div>
                    <div className="h-10 bg-red-500">5</div>
                </div>
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold">Your code</h2>
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                </Card>
            </main>
        </>
    );
};

export default Home;
