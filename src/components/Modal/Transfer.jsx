import { Box } from "@mui/material";
import React from "react";
import { ColorButton } from "../../styles/component/button";

import { InputContainer, InputOutline } from "../../styles/component/input";
import { TitleInput } from "../../styles/create";
import { Line2 } from "../../styles/home";

export default function Transfer(props) {
  return (
    <Box>
      <TitleInput sx={{ fontSize: 24, textAlign: "center" }}>
        Transfer
      </TitleInput>
      <Line2 />
      <Box
        sx={{
          padding: "31px 78px",
        }}
      >
        <TitleInput>Address</TitleInput>
        <InputContainer>
          <InputOutline placeholder="e.g.0x1ed3..." />
        </InputContainer>
        <Box mt={5}>
        <ColorButton sx={{ width: "100%", borderRadius: "10px" }}>
          Transfer
        </ColorButton>
      </Box>
      </Box>
    </Box>
  );
}
