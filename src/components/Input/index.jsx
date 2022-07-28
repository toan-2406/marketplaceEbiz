import { Box, Typography } from "@mui/material";
import React from "react";
import {
  InputContainer,
  InputOutline,
  InputTextArea,
} from "../../styles/component/input";
import { TitleInput } from "../../styles/create";

export default function Input({ name, type, required, placeholder }) {
  return (
    <Box>
      <TitleInput>
        {name}{" "}
        <Typography
          component="span"
          sx={{
            color: "red",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {required ? "*" : ""}
        </Typography>
      </TitleInput>
      <InputContainer>
        {type === "text" ? (
          <InputOutline placeholder={placeholder} />
        ) : (
          <InputTextArea minRows={3}/>
        )}
      </InputContainer>
    </Box>
  );
}
