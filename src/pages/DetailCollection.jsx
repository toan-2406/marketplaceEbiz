import { Avatar, CardMedia, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  Description,
  SubTitleBold,
  TitleBold,
} from "../styles/component/typography";

import {
  BackGroundOverLayPage,
  ContainerFull
} from "../styles/home";
import LanguageIcon from "@mui/icons-material/Language";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ActionTab, ActionTabs } from "../styles/home/topcollection";
import ExploreDetailItem from "../components/page/explore/ExploreDetailItem";
import ExploreDetailActivity from "../components/page/explore/ExploreDetailActivity";
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
        {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
      </div>
    );
  }
export default function DetailCollection() {
    const [value, setValue] = React.useState("1");
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BackGroundOverLayPage />
      <Box
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        <CardMedia
        component="img"
      
         sx={{objectFit: "fit !important",height:{xs:140,md:200,lg:312}}}
          src="https://openseauserdata.com/files/d2c44a48e7f10ff474b4912a9c955ec7.png"
          alt="cover"
        />
        <Avatar
          sx={{
            position: "absolute",
            bottom: {xs:'-60%',md:'-100%',lg:'-60%'},
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {xs:'90px',md:"200px"},
            height: {xs:'90px',md:"200px"},
            borderRadius: "50%",
            border: "3px solid #fff",
          }}
          src="https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif"
          alt="avatar"
        />
      </Box>
      <ContainerFull mt={{xs:5,md:1}}>
        <Stack
          direction={{xs:'row',md:'row'}}
          justifyContent="space-between"
          alignItems={{xs:'start',md:'center'}}
          spacing={1}
        >
          <Box>
            <Stack direction={"row"} flexWrap="wrap" columnGap={3} spacing={{xs:0,md:8}}>
              <Box>
                <TitleBold>100.0K</TitleBold>
                <SubTitleBold>items</SubTitleBold>
              </Box>
              <Box>
                <TitleBold> 34.3K</TitleBold>
                <SubTitleBold>owners</SubTitleBold>
              </Box>
              <Box>
                <TitleBold>3.02 ETH</TitleBold>
                <SubTitleBold>floor price</SubTitleBold>
              </Box>
              <Box>
                <TitleBold>309.7 ETH</TitleBold>
                <SubTitleBold>total volume</SubTitleBold>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction={"row"} spacing={6}>
              <LanguageIcon
                sx={{
                  fill: "#E5E9F0", 
                  fontSize: "28px",
                }}
              />
              <StarBorderIcon
                sx={{
                  fill: "#E5E9F0",
                  fontSize: "28px",
                }}
              />
            </Stack>
          </Box>
        </Stack>

        <Box padding={"51px 0px"}>
          <TitleBold
            textAlign={"center"}
            sx={{ marginBottom: "14px", fontSize: {
              xs: "24px",md:"30px"
            } }}
          >
            Otherdeed for Otherside
          </TitleBold>
          <Description maxWidth={800} marginX="auto">
            Unfortunately experiments have resulted in a major side effect,
            becoming Possessed! As a result, each Subject has become animated,
            constantly switching between Unfortunately experiments have resulted
            in a major side effect.
          </Description>
        </Box>
        <Box>
        <ActionTabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <ActionTab value="1" label="Item" />
          <ActionTab value="2" label="Activity" />
        
        </ActionTabs>
      </Box>
      <TabPanel value={value} index="1">
       <ExploreDetailItem/>
      </TabPanel>
      <TabPanel value={value} index="2">
        <ExploreDetailActivity/>
      </TabPanel>
      </ContainerFull> 
    </>
  );
}
