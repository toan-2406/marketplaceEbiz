import { Box, LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../theme';
export const AvatarWrapper= styled(Box)(({ theme }) => ({
    width:'100%',
    height:'453px',
    borderRadius: '12px',
    WebkitBackdropFilter: 'blur(70px)',
    backgroundColor: Colors.backgroundCard, 
    overflow: 'hidden',
  }));
export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: Colors.backgroundInput,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: "linear-gradient(89.45deg, #88069D 0%, #D0004B 100%)",
    },
  }));
  export const BorderBox = styled(Box)(({ theme }) => ({
    width:'100%',
    height:'auto',
    borderRadius: '12px',
    border: '1px solid ' + Colors.border
    }));
export const BorderBox2 = styled(Box)(({ theme }) => ({
    width:'100%',
    height:'auto',
    padding: '8px 16px',
    backgroundColor: Colors.backgroundInput,
    borderRadius: 'inherit',
    }));