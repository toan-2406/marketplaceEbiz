import { Box, MenuItem, Typography } from "@mui/material";
import React from "react";
import {
  InputContainer,
  InputOutline,
  InputSelect,
  InputTextArea,
} from "../../styles/component/input";
import { Subtitle, TitleInput } from "../../styles/create";

export default function Input({ name, type, required, placeholder, label,select,subname }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <TitleInput sx={{paddingBottom: subname && 'unset'}}>
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
      {subname && <Subtitle sx={{marginBottom: '10px'}}>{subname}</Subtitle>}
      <InputContainer>
        {type === "text" ? (
          <InputOutline placeholder={placeholder} />
        ) : type === "textarea" ? (
          <InputTextArea
            placeholder={placeholder}
            multiline
            rows={4}
          />
        ) : (
          <InputSelect  value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }} >
          <MenuItem value="">
            <em>{label}</em>
          </MenuItem>
             {select.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </InputSelect>
        )}
      </InputContainer>
    </Box>
  );
}
