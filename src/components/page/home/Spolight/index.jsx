import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { TitleSection, WrapperContainer } from "../../../../styles/home";
import CardSpolight from "../../../Card/CardSpolight";

const Item = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  color: theme.palette.text.secondary,
}));
export default function Spolight() {
  return (
    <>
      <TitleSection>Spotlight - Project you’ll love</TitleSection>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Item>
          <Link to="/item-detail" target="_blank" rel="noopener">
            <CardSpolight
              image="https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif"
              title="Project Name"
            />
          </Link>
        </Item>
        <Item>
          <CardSpolight
            image="https://openseauserdata.com/files/5b012e3282792a1ae297880ba4347b0c.gif"
            title="Project Name"
          />
        </Item>
        <Item>
          <CardSpolight
            image="https://shibatoken.com/images/art13.png"
            title="Project Name"
          />
        </Item>
      </Stack>
    </>
  );
}
