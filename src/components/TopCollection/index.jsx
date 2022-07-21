import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { TitleSection, WrapperContainer } from "../../styles/home";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TopCollection() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <WrapperContainer>
      <TitleSection sx={{
        marginBottom: '32px',
      }}>Top Collection</TitleSection>
      <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="Item One" />
        <Tab value="2" label="Item Two" />
        <Tab value="3" label="Item Three" />
      
      </Tabs>
      </Box>
      
      <TabPanel value={value} index="1">Item One</TabPanel>
      <TabPanel value={value} index="2">Item Two</TabPanel>
      <TabPanel value={value} index="3">Item Three</TabPanel>
    </WrapperContainer>
  );
}
