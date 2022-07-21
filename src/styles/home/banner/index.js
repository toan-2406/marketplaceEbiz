import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import{Colors} from '../../theme'

export const BoxContainer = styled(Box)(({ theme }) => ({
        display:'flex',
    justifyContent:'space-between',
    width:'100%',
    height:'100%',
    padding:'0px 0px',
    background: 'transparent',
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
        alignItems:'center'
    }
  }));
  export const BoxContent = styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    maxwidth:610,
    padding:'30px',
}));