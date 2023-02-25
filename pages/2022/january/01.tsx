import Head from "next/head";
import Layout from "@/components/layout";
import {Fragment} from "react";
import StyledDivider from "@/components/divider";
import Header from "@/components/header";
import Topic from "@/components/topic";
import Summary from "@/components/summary";

export default function Home() {
    return (<>
        <Head>
            <title>2022 January 01</title>
            <meta name="description" content="Built by @saujanreshmi with ❤️" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
        </Head>
        <Layout>
            <Fragment>
                <Header day={'01'} month={'January'} year={'2022'} />
                <StyledDivider/>
                <Topic primary={'saga'} secondary={'event choreography'} />
                <StyledDivider/>
                <Summary list={[
                    'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
                    'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.']} />
            </Fragment>
        </Layout>
    </>)
}