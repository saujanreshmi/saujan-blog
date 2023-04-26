import {Grid, Paper, Typography} from "@mui/material";

export default function Header({day, month, year}:{day: '01'|'02'|'15'|'21'|'23', month: 'January'|'February'|'March', year: '2022'|'2023'}) {
    return <Grid container sx={{marginTop: 5}}>
        <Grid item>
            <Typography variant={'h1'}>{day}</Typography>
        </Grid>
        <Grid item>
            <Paper elevation={0} sx={{marginTop: 5.5}}>
                <Typography variant={'h6'}>{year}</Typography>
                <Typography variant={'h6'}>{month}</Typography>
            </Paper>
        </Grid>
    </Grid>
}