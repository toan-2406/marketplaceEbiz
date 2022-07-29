import {  Button ,Link} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../theme';

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
    whiteSpace: 'nowrap',
    textDecoration: 'none',
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