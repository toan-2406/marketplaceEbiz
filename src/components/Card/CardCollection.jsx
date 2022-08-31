import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {  CardActionArea} from "@mui/material";


import { Link } from "react-router-dom";
import { Subtitle } from "../../styles/create";
import { TitleBold } from "../../styles/component/typography";
export default function CardCollection(props) {
  const { item } = props;

  return (
    <Link to='/collection-detail'>
    <Card
      sx={{
        width: "100%",
        height: "100%",
        background: 'rgba(165, 80, 179, 0.25)',
backdropFilter: 'blur(70px)',
        borderRadius: "8px",
        color: "unset",
        boxShadow: "none",
        border:'none',
        outline:'none'
        
      }}
    >
      <CardActionArea
        sx={{
          background: "transparent",
          boxShadow: "none",
          border:'none',
          outline:'none',
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <CardMedia
          component="img"
          height={212}
          sx={{
            maxHeight: "212px",
            width: "100%",
            overflow: "hidden",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          image={item.images}
          alt="collection avatar"
        />
        <CardContent
          sx={{
            transition: "all 0.3s ",
            width: "100%",
            textAlign: "start",
          }}
        >
         <Subtitle component='p' sx={{margin:'unset'}}>
            {item.itemName} #{item.collectionID}
         </Subtitle >
          <TitleBold component='h4' sx={{margin:'unset'}}>
            {item.name}
          </TitleBold>
          <Subtitle component='p' sx={{margin:'unset'}}>
          {item.price && 'Price'} 
         </Subtitle >
         <TitleBold component='h3' sx={{margin:'unset'}}>
            {item.price} {item.currency}
          </TitleBold>
          <Subtitle component='p' sx={{margin:'unset'}}>
            { item.lastPrice && 'Last '} {item.lastPrice} {item.currency}
         </Subtitle >
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
