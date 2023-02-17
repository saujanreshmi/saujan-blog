import {Fragment} from "react";
import {Typography, List, ListItem, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

export default function Summary({list}: { list: string[] }) {
    return <Fragment>
        <Typography variant={'h5'} sx={{marginTop: 5}}>Summary</Typography>
        <List>
            {list.map((summary, index) => <Fragment key={index}>
                <ListItem disableGutters disablePadding>
                    <ListItemIcon sx={{minWidth: 24}}>
                        <CircleIcon sx={{height: 6, width: 6}} color={'primary'} />
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant={'body2'}>{summary}</Typography>} />
                </ListItem>
            </Fragment>)}
        </List>
    </Fragment>
}