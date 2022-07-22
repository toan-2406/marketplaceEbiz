import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import {
  TabPanelItem,
  TabPanelLayout,
  StyledBadge,
} from "../../styles/home/topcollection";

export default function CardTopCollection(props) {
  return (
    <TabPanelLayout>
      {props.data &&
        props.data.map((item, index) => {
          return (
            <TabPanelItem key={index}>
              <Typography variant="h5"  fontWeight={600}>
                {index + 1}
              </Typography>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
                title="New"
                sx={{
                  background:
                    "linear-gradient(45deg, #88069D 0.01%, #D0004B 97.2%)",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              >
                <Avatar
                  sx={{
                    height: "44px",
                    width: "44px",
                  }}
                  alt={item.name}
                  src={item.avatar.src}
                />
              </StyledBadge>
              <Box>
                <Typography variant="h6" fontWeight={600} fontSize={16}>
                  {item.name}
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "inline",
                      fontSize: "14px",
                      color: "#B6BDCB",
                      marginRight: "5px",
                      whiteSpace: "nowrap",
                    }}
                    component="p"
                    fontWeight={400}
                  >
                    Floor price
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#B6BDCB",
                      whiteSpace: "nowrap",
                    }}
                    variant="h6"
                    component="span"
                    fontWeight={400}
                  >
                    {item.floorprice} <b> ETH</b>
                  </Typography>
                </Box>
              </Box>
              <Box >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#B6BDCB",
                    whiteSpace: "nowrap",
                    
                  }}
                  variant="h6"
                  component="p"
                  fontWeight={400}
                >
                  {item.price}  ETH
                </Typography>
                <Typography textAlign='end' variant="h6" fontWeight={600} fontSize={16}>
                  {item.percent}
                </Typography>
              </Box>
            </TabPanelItem>
          );
        })}
    </TabPanelLayout>
  );
}
