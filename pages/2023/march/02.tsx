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
            <title>2023 March 02</title>
            <meta name="description" content="Built by @saujanreshmi with ❤️"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
        </Head>
        <Layout>
            <Fragment>
                <Header day={'02'} month={'March'} year={'2023'}/>
                <StyledDivider/>
                <Topic primary={'Go'} secondary={'Software engineering'}/>
                <StyledDivider/>
                <Summary list={[
                    'Software engineering is what happens to programming when you add time and other programmers. - Russ Cox',
                    'Underlying requirement for programming language is software engineering then what does Go bring to table?',
                    'Clarity, Simplicity and Productivity',
                    'Intentionally didn\'t include performance and productivity because there are other languages that offer this and may have made these their top priority but they are not as simple as Go.',
                    'Clarity: Programs must be written for people to read, and only incidentally for machines to execute. - Hal Abelson and Gerald Sussman',
                    'Codes is read many more times than it is written. A single piece of code will, over its lifetime, be read hundreds, maybe thousands of times.',
                    'The most important skill for a programmer is the ability to effectively communicate ideas. - Gaston Jorquera',
                    'If you\'re writing a program for yourself, may be it has to run only once, write however you want to. But if this is a piece of software that more than one person will contribute to, or that will be used by many people over the long period of time, that requirements, features or the environment it runs in may change then your goal must be for your program to be maintainable.',
                    ''
                ]}/>
            </Fragment>
        </Layout>
    </>)
}