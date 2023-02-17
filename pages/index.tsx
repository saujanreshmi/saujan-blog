import Head from 'next/head'
import Layout from "@/components/layout";
import {
    Box,
    Grid,
    Paper,
    Typography,
    styled,
    TypographyProps,
    PaperProps,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import AnimateAlphabet from "@/components/animate-alphabet";

const StyledTypography = styled(Typography)<TypographyProps>(({theme}) => ({
    fontFamily: ['Roboto Mono', 'monospace'].join(','),
    '&.MuiTypography-h2': {
        fontSize: 64,
        fontWeight: 600,
        lineHeight: 1.5
    },
}));

const StyledPaper = styled(Paper)<PaperProps>(({theme}) => ({
    '&.MuiPaper-root': {
        textAlign: 'right',
        letterSpacing: 38,
        color: '#ddd'
    }
}))

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
                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{height: '100vh'}}
                >
                    <Grid item xs={6}>
                        <StyledPaper elevation={0}>
                            <AnimateAlphabet alphabet={'B'}/>
                            <AnimateAlphabet alphabet={'Z'}/>
                            <AnimateAlphabet alphabet={'X'}/>
                            <AnimateAlphabet alphabet={'P'}/>
                            <AnimateAlphabet alphabet={'T'}/>
                            <AnimateAlphabet alphabet={'Q'}/>
                        </StyledPaper>
                        <StyledPaper elevation={0}>
                            <AnimateAlphabet alphabet={'R'}/>
                            <AnimateAlphabet alphabet={'C'}/>
                            <AnimateAlphabet alphabet={'W'}/>
                            <AnimateAlphabet alphabet={'Y'}/>
                            <AnimateAlphabet alphabet={'H'}/>
                            <AnimateAlphabet alphabet={'V'}/>
                        </StyledPaper>
                        <StyledPaper elevation={0}>
                            <AnimateAlphabet alphabet={'N'}/>
                            <AnimateAlphabet alphabet={'R'}/>
                            <AnimateAlphabet alphabet={'Q'}/>
                            <AnimateAlphabet alphabet={'T'}/>
                            <AnimateAlphabet alphabet={'J'}/>
                            <AnimateAlphabet alphabet={'B'}/>
                        </StyledPaper>
                        <StyledPaper elevation={0}>
                            <AnimateAlphabet alphabet={'S'}/>
                            <AnimateAlphabet strong alphabet={'N'}/>
                            <AnimateAlphabet strong alphabet={'O'}/>
                            <AnimateAlphabet strong alphabet={'T'}/>
                            <AnimateAlphabet strong alphabet={'E'}/>
                            <AnimateAlphabet strong alphabet={'S'}/>
                        </StyledPaper>
                        <StyledPaper elevation={0}>
                            <AnimateAlphabet alphabet={'C'}/>
                            <AnimateAlphabet alphabet={'N'}/>
                            <AnimateAlphabet alphabet={'K'}/>
                            <AnimateAlphabet alphabet={'V'}/>
                            <AnimateAlphabet alphabet={'D'}/>
                            <AnimateAlphabet alphabet={'L'}/>
                        </StyledPaper>
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
            </Layout>
        </>
    )
}
