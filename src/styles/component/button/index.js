import {  Button ,Chip,Link} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../theme';

export const TagButton = styled(Chip)(({ theme }) => ({
    backgroundColor: '#3a1d2c',
    color: theme.palette.primary.contrastText,
    margin: theme.spacing.unit,
    borderColor: Colors.border,
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24px',
    padding: '12px 24px',
    height: 'unset',
    '& .MuiSvgIcon-root': {
        color: '#fff !important',
        fontSize: '24px',
    },
}));
export const ButtonOutline = styled(Button)(({ theme }) => ({
    background: Colors.gradientColor,
    borderRadius: '100px',
    width: 'auto',
    padding: '2px',
}));
export const ButtonContent = styled(Link)(({ theme }) => ({
    background: Colors.backgroundDark,
    padding: '12px 24px',
    borderRadius: '100px',
    color: Colors.textWhite,
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'none',
    
    textDecoration: 'none',
    whiteSpace: 'nowrap',
}));

export const ButtonAdd = styled(Button)(({ theme }) => ({
    background: Colors.error,
    borderRadius: '100px',
    width: 'auto',
    padding: '3px 15px',
    color: Colors.textWhite,
    fontSize: '16px',
    fontWeight: '600',
    textTransform: 'capitalize',
}));
export const ColorButton = styled(Button)(({ theme }) => ({

    color: "#fff",
    background: "linear-gradient(266.64deg, #D7003A -0.29%, #88069D 99.71%)",
    borderRadius: "100px",
    fontSize: "1rem",
    textTransform: "capitalize",
    transition: "0.3s ease",
    whiteSpace: "nowrap",
    "&:hover": {
      background: "linear-gradient(266.64deg, #88069D -0.29% , #D7003A 99.71%)",
    },
  }));