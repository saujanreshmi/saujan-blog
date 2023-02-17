import {Collapse, List, ListItem, ListItemButton, ListItemText, ListItemTextProps, styled} from "@mui/material";
import {Fragment, useEffect, useState} from "react";
import Link from "next/link";

const sections = [
    {
        value: '2022',
        children: [
            {
                value: 'january',
                children: ['01']
            },
        ]
    },
    {
        value: '2023',
        children: [
            {
                value: 'february',
                children: ['15']
            },
        ]
    },
]

const StyledListItemText = styled(ListItemText)<ListItemTextProps>(({theme}) => ({
    '& .MuiListItemText-primary': {
        color: theme.palette.secondary.main
    },
}));

export default function NavItems() {
    const [open, setOpen] = useState({
        '2022': true,
        '2022-january': true,
        '2023': true,
        '2023-february': true,
    });

    function handleListItemButtonClick(value: string) {
        setOpen((prevState) => ({
            ...prevState,
            //@ts-ignore
            [value]: !open[value]
        }));
    }
    return  <List disablePadding dense>
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
                                                    <Link href={'/'+year.value+'/'+month.value+'/'+day}>
                                                        <ListItemButton>
                                                            <StyledListItemText primary={day}/>
                                                        </ListItemButton>
                                                    </Link>
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
}