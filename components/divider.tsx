import {Divider, DividerProps, styled} from "@mui/material";

const StyledDivider = styled(Divider)<DividerProps>(({theme}) => ({
    '&.MuiDivider-root': {
        backgroundColor: theme.palette.primary.main
    }
}));

export default StyledDivider;