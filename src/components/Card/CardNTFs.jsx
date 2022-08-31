import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea, Skeleton } from "@mui/material";

import { Link } from "react-router-dom";
import { StyledBadge } from "../../styles/home/topcollection";
import { SubTitleBold, TitleBold } from "../../styles/component/typography";
export default function CardNTFs(props) {
  const { item } = props;

  return (
    <Card sx={{
      minWidth:{xs:'100%',sm:'200px'},
      width: "100%",
      height: "100%",
      background: "transparent",
      borderRadius: "20px",
      color: "unset",
      boxShadow: "none",
    }}>
      <CardActionArea>
        <CardMedia component="img" sx={{height: "230px",width:'100%', borderTopLeftRadius:'20px',borderTopRightRadius:'20px' ,objectFit:'cover'}} src={item.images.cover} />
        <CardContent sx={{
          background: 'rgba(76, 33, 83, 0.25)',
          mixBlendMode: 'normal',
          backdropFilter: 'blur(70px)',
          position: 'relative',
        }}>
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
              <TitleBold mt={4} textAlign={'center'}>
              {item.name}
              </TitleBold>
             {item.description ? ( <SubTitleBold textAlign={'center'}>
              {item.description}
              </SubTitleBold>):null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
