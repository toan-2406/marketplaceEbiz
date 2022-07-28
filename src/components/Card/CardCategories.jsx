import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import  highlight  from '../../assets/images/home/category/hightlight.png'

const BackgroundHighlight = styled("div")({
  background: 'url(' + highlight + ')',
  backgroundPosition:'top center',
  backgroundRepeat:'no-repeat', 
  height: '100%',
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 0,
});

export default function CardCategories(props) {
  const { item } = props;
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        background: "#1C1D21",
        borderRadius: "20px",
        color: "unset",
        boxShadow: "none",
        marginBottom: "64px",
      }}
    >
      <CardActionArea
        sx={{
            padding: "28px 36px",
          background: "transparent",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        
        <CardMedia
          component="img"
          height={244}
          image={item.images}
          alt="popular categories"
        />
        <BackgroundHighlight/>
        <CardContent sx={{paddingBottom: 'unset'}}>
          <Typography
            sx={{ mt: "40px", textTransform: "uppercase" }}
            gutterBottom
            variant="h5"
            component="p"
            fontSize={18}
            fontWeight={700}
            color="white"
            textAlign="left"
            letterSpacing="0.4px"
          >
            {item.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
