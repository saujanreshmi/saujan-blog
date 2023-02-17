import {styled, Typography, TypographyProps} from "@mui/material";
import {useEffect, useState} from "react";

const StyledTypography = styled(Typography)<TypographyProps>(({theme}) => ({
    fontFamily: ['Roboto Mono', 'monospace'].join(','),
    '&.MuiTypography-h2': {
        fontSize: 64,
        fontWeight: 600,
        lineHeight: 1.5
    },
}));

type Alphabet = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';

const alphabetArray : Alphabet[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

export default function AnimateAlphabet({alphabet, strong}: {alphabet: Alphabet, strong?:boolean}) {
    const [generateAgain, setGenerateAgain] = useState(false);
    const [generatedAlphabet, setGeneratedAlphabet] = useState<Alphabet>('A');

    useEffect(() => {
        setTimeout(() => {
            const alphabetIndex = Math.floor(Math.random() * (26 - 0) + 0);
            if (alphabetArray[alphabetIndex] != alphabet) {
                setGenerateAgain(!generateAgain);
                setGeneratedAlphabet(alphabetArray[alphabetIndex]);
            } else {
                setGeneratedAlphabet(alphabet);
            }
        }, 150)
    }, [generateAgain])
    return <StyledTypography color={strong && generatedAlphabet === alphabet ? 'primary': 'inherit'} variant={'h2'} display={'inline'}>{generatedAlphabet}</StyledTypography>
}