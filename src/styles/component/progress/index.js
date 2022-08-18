
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../theme';

export const ProcesingCircle = styled(CircularProgress)(({ theme }) => ({
   width: '175px !important',
    height: '175px !important',
    color: Colors.border,
    '& .MuiCircularProgress-circle': {
        fill: 'rgba(109, 109, 109, 0.2)'
    }
}));


