import {Fragment} from "react";
import AnimateAlphabet from "@/components/animate-alphabet";
import {Paper, PaperProps, styled} from "@mui/material";

const StyledPaper = styled(Paper)<PaperProps>(({theme}) => ({
    '&.MuiPaper-root': {
        textAlign: 'right',
        letterSpacing: 38,
        color: '#ddd'
    }
}))

export default function Cube() {
    return <Fragment>
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
    </Fragment>
}