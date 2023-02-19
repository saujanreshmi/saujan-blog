import Head from 'next/head'
import Layout from "@/components/layout";
import {Grid, Paper, Typography,} from "@mui/material";
import {Fragment} from "react";
import Cube from "@/components/cube";

export default function Home() {
    return (
        <>
            <Head>
                <title>Saujan - Personal Blog</title>
                <meta name="description" content="Built by @saujanreshmi with ❤️"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
            </Head>
            <Layout>
                <Fragment>
                    <Typography variant={'h6'} sx={{
                        marginTop: 8,
                        textDecoration: 'underline',
                        textUnderlineOffset: 12,
                        textDecorationThickness: 2
                    }} color={'primary'}>Software engineering journey</Typography>
                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{height: '80vh'}}
                    >
                        <Grid item xs={6}>
                            <Cube />
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={0} sx={{padding: 4}}>
                                <Typography variant={'h4'}>Saujan Thapa</Typography>
                                <Typography color={'#999'} variant={'subtitle2'}>Software Engineer at Paypa
                                    plane</Typography>
                                <Paper elevation={0} sx={{marginTop: 2}}>
                                    <Typography color={'#999'}
                                                variant={'subtitle2'}>https://github.com/saujanreshmi</Typography>
                                    <Typography color={'#999'} variant={'subtitle2'}>Microservices, Event
                                        sourcing, Event driven systems, CQRS, Go</Typography>
                                </Paper>
                            </Paper>
                        </Grid>
                    </Grid>
                </Fragment>
            </Layout>
        </>
    )
}
