import {  Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ColorButton } from "../../styles/component/button";
import { Subtitle, TitleInput } from "../../styles/create";
import { Line2 } from "../../styles/home";

export default function CompleteCheckout(props) {
  return (
    <Box>
      <TitleInput sx={{ fontSize: 24, textAlign: "center" }}>
      Complete checkout
      </TitleInput>
      <Line2 />
      <Box
        sx={{
          padding: "31px 78px",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "23px" }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif"
                alt="avatar"
              />
            </Box>
            <Box>
              <TitleInput
                sx={{
                  fontSize: 16,
                  marginBottom: "7px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  padding: "unset",
                }}
              >
                #1898
              </TitleInput>
              <Subtitle
                sx={{
                  margin: "unset",
                  color: "#B6BDCB",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                Bored Ape Yacht Club
              </Subtitle>
            </Box>
          </Box>
          <Box>
            <Stack direction="column" alignItems="end">
              <Typography
                component="p"
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "#808089",
                }}
              >
                Price
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#E5E9F0",
                }}
              >
                0,003 ETH
              </Typography>
              <Subtitle
                sx={{
                  margin: "unset",
                  color: "#B6BDCB",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                ($9.45)
              </Subtitle>
            </Stack>
          </Box>
        </Stack>
        <Line2 sx={{ marginTop: "20px" }} />
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          paddingY={2}
        >
          <TitleInput
            sx={{
              fontSize: 18,
              marginBottom: "7px",
              fontWeight: 700,
              lineHeight: "24px",
              padding: "unset",
            }}
          >
            Total
          </TitleInput>

          <Box>
            <TitleInput
              sx={{
                fontSize: 20,
                marginBottom: "7px",
                fontWeight: 600,
                lineHeight: "24px",
                padding: "unset",
              }}
            >
              0.0875 ETH
            </TitleInput>
            <Subtitle
              sx={{
                margin: "unset",
                color: "#B6BDCB",
                fontSize: 14,
                fontWeight: 400,
                textAlign: "right",
              }}
            >
              ($ 224.84)
            </Subtitle>
          </Box>
        </Stack>
        <Box mt={2}>
          <ColorButton sx={{ width: "100%", borderRadius: "10px" }}>
           Checkout
          </ColorButton>
        </Box>
      </Box>
    </Box>
  );
}
