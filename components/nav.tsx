import {Button, Dialog, DialogContent, Drawer, Grid, IconButton, useTheme} from "@mui/material";
import React, {Fragment, useEffect, useState} from "react";

import MenuIcon from '@mui/icons-material/Menu';
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import Scrollable from "@/components/scrollable";
import {Close as CloseIcon} from '@mui/icons-material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {useRouter} from "next/router";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction={'right'} ref={ref} {...props} />;
});

const navItems = [
    {
        value: '2022',
        children: [
            {
                value: 'January',
                children: ['01']
            }
        ]
    },
    {
        value: '2023',
        children: [
            {
                value: 'February',
                children: ['15','21','23']
            },
            {
                value: 'March',
                children: ['01']
            }
        ]
    }
]

export default function Nav() {
    const theme = useTheme();
    const [showDrawer, setShowDrawer] = useState(false);
    const [selectedYear, setSelectedYear] = useState(navItems[0].value);
    const [selectedMonth, setSelectedMonth] = useState(navItems[0].children[0].value);
    const [selectedDay, setSelectedDay] = useState(navItems[0].children[0].children[0]);
    const [months, setMonths] = useState(navItems[0].children.map(child => child.value));
    const [days, setDays] = useState(navItems[0].children[0].children.map(child => child));
    const router = useRouter();

    const [cursorState, setCursorState] = useState<'entering'|'leaving'|null>(null);

    useEffect(() => {
        setMonths(navItems.filter(navItem => navItem.value === selectedYear)[0].children.map(child => child.value));
    }, [selectedYear])

    useEffect(() => {
        setDays(navItems.filter(navItem => navItem.value === selectedYear)[0].children.filter(month => month.value === selectedMonth)[0].children.map(child => child))
    }, [selectedMonth])

    function navigate() {
        setShowDrawer(false);
        router.push('/'+selectedYear+'/'+selectedMonth.toLowerCase()+'/'+selectedDay);
    }

    return <Fragment>
        <Drawer variant={'permanent'}
                anchor={'left'}
                PaperProps={{sx: {padding: 1.5, backgroundColor: theme.palette.primary.main}}}
        >
            <IconButton size={'small'} onClick={() => setShowDrawer(true)} color="inherit" aria-label="menu">
                <MenuIcon fontSize={'large'} color={'secondary'}/>
            </IconButton>
        </Drawer>
        <Dialog open={showDrawer} onClose={() => setShowDrawer(false)} fullScreen TransitionComponent={Transition}
                PaperProps={{sx: {padding: 1.5, backgroundColor: theme.palette.primary.main}}}>
            <Grid container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center">
                <IconButton color={'secondary'} size={'small'} onClick={()=>setShowDrawer(false)} onMouseEnter={()=>setCursorState('entering')} onMouseLeave={()=>setCursorState('leaving')}>
                    <CloseIcon sx={{
                        fontSize: 40,
                        animation: cursorState ? ( cursorState === 'entering' ? 'clockwise 0.75s' : 'anticlockwise 0.75s') : 'none',
                        '@keyframes clockwise': {
                            '0%': {
                                transform:'rotate(0deg)'
                            },
                            '100%': {
                                transform: 'rotate(180deg)'
                            },
                        },
                        '@keyframes anticlockwise': {
                            '0%': {
                                transform: 'rotate(180deg)',
                            },
                            '100%': {
                                transform: 'rotate(0deg)'
                            },
                        },
                    }} />
                </IconButton>
            </Grid>
            <DialogContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Grid container direction="row"
                      justifyContent="center"
                      alignItems="center" maxWidth={'md'} sx={{minWidth: 600}} spacing={0}>
                    <Grid item xs={3}>
                        <Scrollable label={'Year'} options={navItems.map(navItem => navItem.value)} optionChanged={(newYear) => setSelectedYear(newYear)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Scrollable label={'Month'}
                            options={months}
                            optionChanged={(newMonth) => setSelectedMonth(newMonth)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Scrollable label={'Day'}
                            options={days}
                            optionChanged={(newDay) => setSelectedDay(newDay)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={navigate} variant={'outlined'} color={'secondary'} size={'large'} endIcon={<DoubleArrowIcon />} sx={{borderRadius: 0, height: 60, marginLeft: 4 }}>
                            Go
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    </Fragment>
}