import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonContent, ButtonOutline } from "../../../styles/component/button";
import Input from "../../Input";
const type = [
  {
    id: 1,
    name: "Ethereum",
  },
  {
    id: 2,
    name: "Bitcoin",
  },
  {
    id: 3,
    name: "Ethereum Classic",
  },
];
export default function ExploreDetailItem() {
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between">
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Stack direction={'row'} spacing={3} alignItems='center' >
        <ButtonOutline>
              <ButtonContent>Make collection offer</ButtonContent>
            </ButtonOutline>
            <Input
            required={false}
            label="Select blockchain"
            select={type}
          />
        </Stack>
      </Stack>
    </>
  );
}
