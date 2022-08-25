import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea} from "@mui/material";

export default function CardSpolight(props) {
  const [hover, setHover] = React.useState(false)
  return (
    <Card sx={{ maxWidth: 400,background:'transparent' }}>
      <CardActionArea sx={{
        "&:hover": {
          background:  'transparent',
          cursor: 'pointer',
        },
       
      }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <CardMedia
          component="img"
          image={props.image}
          height={380} 
          alt="spolight"
          sx={{
            transform:  hover ? 'scale(1.15)' : 'scale(1)' ,
            transition: "all 0.3s ",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            backgroundColor: "rgba(54, 52, 52, 0.5)",
            backdropFilter: hover ? 'blur(0.2px)' : 'blur(10px)',
            transition: "all 0.3s ",
            width: "100%",
          }}
        >
          <Typography gutterBottom variant="h5" component="p" fontSize={18} fontWeight={700} color="white">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
