import {
    Drawer,
    useTheme, AppBar, Toolbar, IconButton, alpha, Box, Typography, Avatar
} from "@mui/material";
import {Fragment, useState} from "react";

import MenuIcon from '@mui/icons-material/Menu';
import NavItems from "@/components/nav-items";
import HideOnScroll from "@/components/hide-on-scroll";
import Image from "next/image";

export default function Nav() {
    const theme = useTheme();
    const [showDrawer, setShowDrawer] = useState(false);

    return <Fragment>
        <HideOnScroll>
        <AppBar color={'secondary'} position="fixed" sx={{boxShadow: 'none'}}>
            <Toolbar variant="dense">
                <IconButton onClick={() => setShowDrawer(true)} edge="start" color="inherit" aria-label="menu"
                            sx={{mr: 2}}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </HideOnScroll>
        <Drawer
            variant={'temporary'}
            open={showDrawer}
            onClose={() => setShowDrawer(false)}
            anchor={'left'}
            ModalProps={{BackdropProps: {sx: {backgroundColor: alpha(theme.palette.primary.main, 0.05)}}}}
            PaperProps={{elevation: 8, sx: {paddingTop: 1.5, width: 200, backgroundColor: theme.palette.primary.main}}}
            sx={{display: {xl: 'none'}}}
        >
            <NavItems />
        </Drawer>
        <Drawer variant={'permanent'}
                anchor={'left'}
                PaperProps={{sx: {paddingTop: 1.5, width: 200, backgroundColor: theme.palette.primary.main}}}
                sx={{display: {xs:'none',xl: 'block'}}}
                >
            <NavItems />
        </Drawer>
    </Fragment>
}