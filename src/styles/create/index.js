
import { Button, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import border from "../../assets/images/create/borderupload.png";
import { Colors } from "../theme";

export const UploadComponent = styled(Button)(({ theme }) => ({
    background: 'url(' + border + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '273px',
    height: '199px',
    marginLeft: '15px',
    marginBottom: '15px',
}));

export const TitleInput = styled(Typography)(({ theme }) => ({
    color: Colors.textWhite,
    fontSize: '18px',
    fontWeight: '700',
    padding: '16px 0',
    lineHeight: '28px',
}));
export const Subtitle = styled(Typography)(({theme}) => ({
  color: Colors.body,
  fontWeight: "500",
  lineheight: "22px",
  fontSize: "12px",
  marginBottom:'16px'
}));

export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        background: theme.palette.mode === 'dark' ? 'linear-gradient(249.26deg, #D0004B 0%, #88069D 100%);' : 'linear-gradient(249.26deg, #88069D 0%,  #D0004B 100%);',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));