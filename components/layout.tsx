import {
    Container, Box, Avatar
} from "@mui/material";
import Image from "next/image";

export default function Layout({children}: { children: JSX.Element }) {
    return <Container key={'container'} maxWidth={'xl'} sx={{minWidth: 600}}>
        <Box sx={{marginLeft: {xl: 25}}}>
            {children}
        </Box>
    </Container>
}