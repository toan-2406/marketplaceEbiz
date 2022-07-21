import { Box, Stack, Typography, styled, Paper } from "@mui/material";
import React from "react";
import { TitleSection, WrapperContainer } from "../../styles/home";
import CardSpolight from "../Card/CardSpolight";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  color: theme.palette.text.secondary,
 
}));
export default function Spolight() {
  return (
    <WrapperContainer>
      <TitleSection>Spotlight - Project you’ll love</TitleSection>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Item><CardSpolight image='https://img.seadn.io/files/8a9de5c3e69c0bdf4dd183e0ea8a3581.png' title="Project Name"/></Item>
        <Item><CardSpolight image='https://img.seadn.io/files/8a9de5c3e69c0bdf4dd183e0ea8a3581.png' title="Project Name"/></Item>
        <Item><CardSpolight image='https://img.seadn.io/files/8a9de5c3e69c0bdf4dd183e0ea8a3581.png' title="Project Name"/></Item>
      </Stack>
    </WrapperContainer>
  );
}
