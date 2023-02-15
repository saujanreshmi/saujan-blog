import {Typography} from "@mui/material";

export default function Topic({primary, secondary}:{primary: string, secondary: string}) {
    return (<>
        <Typography variant={'h2'} sx={{marginTop: 3}}>{primary.toUpperCase()}</Typography>
        <Typography variant={'h2'} sx={{marginBottom: 7}}>{secondary.toUpperCase()}</Typography>
    </>)
}