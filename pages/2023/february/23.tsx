import Head from "next/head";
import Layout from "@/components/layout";
import {Fragment} from "react";
import Header from "@/components/header";
import StyledDivider from "@/components/divider";
import Topic from "@/components/topic";
import Summary from "@/components/summary";

export default function Home() {
    return <Fragment>
        <Head>
            <title>2023 February 23</title>
            <meta name="description" content="Built by @saujanreshmi with ❤️" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
        </Head>
        <Layout>
            <Fragment>
                <Header day={'23'} month={'February'} year={'2023'} />
                <StyledDivider/>
                <Topic primary={'ideas'} secondary={'general notes'} />
                <StyledDivider/>
                <Summary list={[
                    'storing reference id in an aggregate should be encouraged instead of a copy of aggregate just for the sake for ease of use. Use agg view instead and this view should be stored in a db store and should be queryable to other services directly.',
                    'All the events designed for a domain, must be the outcome of a change in the domain itself. This makes it easier to consume other services events and publish domain specific commands to make adjustments. However, sometimes services that sit above this service may need extra info from downstream services, we could try reading view however given the nature of eventual consistency the read might be outdated so solution could be put the doownstream event info in the metadata field of the upstream service events.',
                    'Since upstream services considers downstream service the source of truth, what happens if downstream service plays the old events and this causes upstream service to take action, making it inconsistent with down stream services.',
                '',
                ]} />
            </Fragment>
        </Layout>
    </Fragment>
}