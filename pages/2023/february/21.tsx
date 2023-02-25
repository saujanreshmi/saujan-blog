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
            <title>2023 February 21</title>
            <meta name="description" content="Built by @saujanreshmi with ❤️" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
        </Head>
        <Layout>
            <Fragment>
                <Header day={'21'} month={'February'} year={'2023'} />
                <StyledDivider/>
                <Topic primary={'ideas'} secondary={'general notes'} />
                <StyledDivider/>
                <Summary list={[
                    'payto-srv-cuscal doesn\'t have atomicity when publishing events and storing its own events. How can we fix this?',
                    'aggregate view can change overtime, how can we accommodate this? Perhaps versioning of the view? Perhaps even the idea of deprecating the field and making it backward compatible.',
                    'aggregate in event sourcing must be flexible for change, this helps with progressive software development and handling of events is easier. For instance, try not storing the aggregate state, rather always build it by playing events when there is an incoming command. if we rely on an aggregate state that is stored, and should we need to make changes in the aggregate, we will need to think about deprecation, backward compatibility and this can slow down the development speed. Additionally, we might also need to introduce complex logic to handle the change in an aggregate field(s).',
                ]} />
            </Fragment>
        </Layout>
    </Fragment>
}