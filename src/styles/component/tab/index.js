
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../theme';

export const TabsBig = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-scroller': {
        '& .MuiTabs-indicator': {
            display: 'none',
        },
    },
}));

export const TabBig = styled(Tab)(({ theme }) => ({
    height:84,
    width:150,
    borderRadius: '8px',
    transition: 'all 0.4s ease-in-out',
    color: Colors.white,
    border:'1px solid ' + Colors.disabled,
    marginLeft:20,
    '&.Mui-selected': {
        border:'2px solid ' + Colors.error,
        color: Colors.white,
    },
    [theme.breakpoints.up('sm')]: {
        width:164
    },
}));
