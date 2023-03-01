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
                <Header day={'01'} month={'March'} year={'2023'} />
                <StyledDivider/>
                <Topic primary={'ideas'} secondary={'general notes'} />
                <StyledDivider/>
                <Summary list={[
                    'Depending on the outcome, Redirecting the microservice traffic into monolith and CDCing the changes into microservices can have some benefits.',
                    'For instance, we don\'t have to build the validation early on, since we may not have the requirements all laid out so this approach can be beneficial.',
                    'Along with during the migration process, the chances for GUID collision is also minimised, because we don\`t have to stop the redirection traffic. we can wait until we are happy with business logic implementation on microservice and all monolith data are migrated to microservice.']} />
            </Fragment>
        </Layout>
    </>)
}