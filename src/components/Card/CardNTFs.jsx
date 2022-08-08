import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea} from "@mui/material";
import { StyledBadge } from "../../styles/home/topcollection";

import { Link } from "react-router-dom";
export default function CardNTFs(props) {
  const { item } = props;

  return (
    <Link to='/collection-detail'>
    <Card
      sx={{
        maxWidth: 400,
        width: "100%",
        height: "100%",
        maxHeight: "386px",
        background: "transparent",
        borderRadius: "20px",
        color: "unset",
        boxShadow: "none",
        
      }}
    >
      <CardActionArea
        sx={{
          background: "transparent",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <CardMedia
          component="img"
          height={246}
          sx={{
            maxHeight: "246px",
            width: "100%",
            overflow: "hidden",
            objectFit: "cover",
          }}
          image={item.images.cover}
          alt="spolight"
        />
        <CardContent
          sx={{
            height: "40%",
            backgroundColor: "rgb(231 231 231 / 11%)",
            backdropFilter: "blur(70px) !important",
            transition: "all 0.3s ",
            width: "100%",
            borderRadius: "20px",
            transform: "translateY(-20px)",
            position: "relative",
            textAlign: "center",
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
          <Typography
            sx={{ mt: "40px", textTransform: "uppercase", mb: "16px" }}
            gutterBottom
            variant="h5"
            component="p"
            fontSize={18}
            fontWeight={700}
            color="white"
          >
            {item.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            fontSize={18}
            fontWeight={500}
            color="#B6BDCB"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              LineClamp: 2,
              BoxOrient: "vertical",
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
