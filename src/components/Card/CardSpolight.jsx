import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CardSpolight(props) {
  return (
    <Card sx={{ maxWidth: 400,backgroundColor:'transparent' }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="356"
          image={props.image}
          alt="spolight"
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            backgroundColor: "rgba(54, 52, 52, 0.5)",
            backgroundBlendMode: "soft-light",
            mixBlendMode: "normal",
            backdropFilter: "blur(30px)",
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
