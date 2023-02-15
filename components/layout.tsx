import {
    Container,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    useTheme, styled, ListItemTextProps, Collapse, ListProps, ListItem
} from "@mui/material";
import {Fragment, useState} from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const sections = [
    {
        value: '2022',
        children: [
            {
                value: 'January',
                children: ['01', '02', '03', '04', '05']
            },
            {
                value: 'February',
                children: ['01', '02', '03', '04', '05']
            },
            {
                value: 'March',
                children: ['01', '02', '03', '04', '05']
            }
        ]
    },
    {
        value: '2023',
        children: [
            {
                value: 'January',
                children: ['01', '02', '03', '04', '05']
            },
            {
                value: 'February',
                children: ['01', '02', '03', '04', '05']
            },
            {
                value: 'March',
                children: ['01', '02', '03', '04', '05']
            }
        ]
    },
]

const StyledList = styled(List)<ListProps>(({theme}) => ({
    '&.MuiList-root': {}
}))

const StyledListItemText = styled(ListItemText)<ListItemTextProps>(({theme}) => ({
    '& .MuiListItemText-primary': {
        color: theme.palette.secondary.main
    },
}));

export default function Layout({children}: { children: JSX.Element }) {
    const theme = useTheme();
    const [open, setOpen] = useState({
        '2022': false,
        '2022-January': false,
        '2022-February': false,
        '2022-March': false,
        '2023': true,
        '2023-January': false,
        '2023-February': false,
        '2023-March': true,
    });

    function handleListItemButtonClick(value: string) {
        setOpen((prevState) => ({
            ...prevState,
            //@ts-ignore
            [value]: !open[value]
        }));
    }

    return <Container key={'container'} maxWidth={'lg'} disableGutters>
        <Drawer
            variant={'permanent'}
            anchor={'left'}
            PaperProps={{sx: {paddingTop: 1.5, width: 200, backgroundColor: theme.palette.primary.main}}}
        >
            <List disablePadding dense>
                {
                    sections.map((year, yearIndex) => (<Fragment key={`year-`+yearIndex}>
                        <ListItem>
                            <ListItemButton onClick={() => handleListItemButtonClick(year.value)}>
                                <StyledListItemText primary={year.value}/>
                            </ListItemButton>
                        </ListItem>
                        <Collapse in={
                            //@ts-ignore
                            open[year.value]}>
                            <List disablePadding dense sx={{marginLeft: 1}}>
                                {
                                    year.children.map((month, monthIndex) => (<Fragment key={`year-`+yearIndex+`-month-`+monthIndex}>
                                        <ListItem>
                                            <ListItemButton onClick={() => handleListItemButtonClick(year.value + '-' + month.value)}>
                                                <StyledListItemText primary={month.value}/>
                                            </ListItemButton>
                                        </ListItem>
                                        <Collapse in={
                                                      //@ts-ignore
                                                      open[year.value + '-' + month.value]
                                                  }>
                                            <List disablePadding dense sx={{marginLeft: 1}}>
                                                {
                                                    month.children.map((day, dayIndex) => (<Fragment key={`year-`+yearIndex+`-month-`+monthIndex+`-day-`+dayIndex}>
                                                        <ListItem>
                                                            <ListItemButton>
                                                                <StyledListItemText primary={day}/>
                                                            </ListItemButton>
                                                        </ListItem>
                                                    </Fragment>))
                                                }
                                            </List>
                                        </Collapse>
                                    </Fragment>))
                                }
                            </List>
                        </Collapse>
                    </Fragment>))
                }
            </List>
        </Drawer>
        {children}
    </Container>
}