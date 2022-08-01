import { Box, Input, Select, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../theme';

export const InputOutline = styled(Input)(({ theme }) => ({
    background: Colors.body,
    borderRadius: '8px',
    backdropFilter: 'blur(70px)',
    backgroundBlendMode: 'soft-light',
    width: '100%',
    height: 44,
    paddingLeft:16,
    '&::after': {
        display: 'none'
    },
    '&::before': {
        display: 'none'
    },
    '& .MuiInput-input' : {
        color: '#808089',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
    }

}));
export const InputContainer = styled(Box)(({theme}) => ({
    height:'auto',
    borderRadius: '8px',
    background: Colors.gradientColor,
    padding: 2,
    position: 'relative',
}));
export const InputTextArea = styled(TextField)(({ theme }) => ({
background: Colors.body,
    borderRadius: '8px',
    backdropFilter: 'blur(70px)',
    backgroundBlendMode: 'soft-light',
    width: '100%',
    height: 'auto',
}));
export const InputSelect = styled(Select)(({ theme }) => ({
    background: Colors.body,
    borderRadius: '8px',
    backdropFilter: 'blur(70px)',
    backgroundBlendMode: 'soft-light',
    width: '100%',
    height: 'auto',
}));