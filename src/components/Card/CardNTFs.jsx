import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActionArea} from "@mui/material";
import { StyledBadge } from "../../styles/home/topcollection";

export default function CardNTFs(props) {
    const { item } = props;
  return (
    <Card sx={{ maxWidth: 400,background:'transparent',borderRadius:'20px' }}>
      <CardActionArea sx={{
        "&:hover": {
          background:'transparent',
          cursor: 'pointer',
        },
       
      }} >
        <CardMedia
          component="img"
          height={246}
          image={item.images.cover}
          alt="spolight"
        />
        <CardContent
          sx={{
            height: "50%",
            backgroundColor: "rgba(54, 52, 52, 0.2)",
            backdropFilter: 'blur(70px) !important',
            transition: "all 0.3s ",
            width: "100%",
            borderRadius: "20px",
            transform: 'translateY(-50px)',
            position: 'relative',
          }}
        >
            <StyledBadge
                // overlap="circular"
                // anchorOrigin={{ vertical: "top", horizontal: "right" }}
                // variant="dot"
                // title="New"
                sx={{
                  background:
                    "linear-gradient(45deg, #88069D 0.01%, #D0004B 97.2%)",
                  borderRadius: "50%",
                  padding: "3px",
                    position: "absolute",
                    top: "-40px",
                    right: "50%",
                    transform: "translateX(50%)",
                }}
              >
                <Avatar
                  sx={{
                    height: "77px",
                    width: "77px",
                  }}
                  alt={item.name}
                  src={item.images.avatar}
                />
              </StyledBadge>
          <Typography sx={{mt:'40px'}} gutterBottom variant="h5" component="p" fontSize={18} fontWeight={700} color="white">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h5"  component="p" fontSize={18} fontWeight={500} color="#B6BDCB" sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            LineClamp: 2,
            BoxOrient: 'vertical',
          }}>
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
