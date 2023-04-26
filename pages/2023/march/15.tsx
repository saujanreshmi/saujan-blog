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
            <title>2023 March 01</title>
            <meta name="description" content="Built by @saujanreshmi with ❤️" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
        </Head>
        <Layout>
            <Fragment>
                <Header day={'15'} month={'March'} year={'2023'} />
                <StyledDivider/>
                <Topic primary={'ideas'} secondary={'general notes'} />
                <StyledDivider/>
                <Summary list={[
                    'Event driven should only be used where services needs to take action based on what happened in other system.',
                    'Meaning if there is a danger where service that consume these events may not be able to take action due to some validation failure then perhaps gRPC is better option.',
                    'Furthermore, if business logic needs to duplicated in another service just to check the validity of payload, so that the published events gets processed. This should be a sign for exploring alternatives such as gRPC.']} />
            </Fragment>
        </Layout>
    </>)
}