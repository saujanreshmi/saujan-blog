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
            <title>2023 February 15</title>
            <meta name="description" content="Built by @saujanreshmi with ❤️" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
        </Head>
        <Layout>
            <Fragment>
                <Header day={'15'} month={'February'} year={'2023'} />
                <StyledDivider/>
                <Topic primary={'1:1 dank'} secondary={'growth plan'} />
                <StyledDivider/>
                <Summary list={[
                    'Start with basic of design principles by Dave Cheney. https://dave.cheney.net/2016/08/20/solid-go-design',
                    'Learn about design patterns. Some important patterns: {Structural: [Adapter, Composite, Decorator], Creational: [Builder, Factory], Behavioral: [Chain of Responsibility, Strategy]}. https://refactoring.guru/design-patterns/go',
                    'Understanding how sauce works. Existing service that use sauce are: Transaction and Secure pay. However, they may not necessarily use the sauce as it was intended. Perhaps consult @dank if required.',
                    'Redo payto-srv-core using sauce. Start with TDD of business logic instead of jumping to main. Here is dank`s PR https://github.com/paypaplane/paypa-stack/pull/5629/files',
                    'There was something mentioned regarding Dependency inversion. Check it further.'
                ]} />
            </Fragment>
        </Layout>
    </>)
}