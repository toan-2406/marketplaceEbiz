import { Avatar, CardMedia, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  Description,
  SubTitleBold,
  TitleBold,
} from "../styles/component/typography";
import SettingsIcon from '@mui/icons-material/Settings';
import {
  BackGroundOverLayPage,
  ContainerFull
} from "../styles/home";
import { ActionTab, ActionTabs } from "../styles/home/topcollection";
import ExploreDetailItem from "../components/page/explore/ExploreDetailItem";
import ExploreDetailActivity from "../components/page/explore/ExploreDetailActivity";
import tokenEth from '../assets/images/icon/eth.svg';
import { Link } from "react-router-dom";
import ExploreCreate from "../components/page/explore/ExploreCreate";
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
export default function Profile() {
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
      <ContainerFull mt={{xs:1,md:1}}>
          <Box>
            <Stack direction={"row"} justifyContent={{xs:'space-between',md:'flex-end'}} alignItems='center' spacing={4}>
             <Box sx={{display: "flex", alignItems: "center"}}>
              <CardMedia component='img' src={tokenEth} sx={{ marginRight:'10px',height:"26px", width:"15px"}}  />
              <SubTitleBold >0xc139...604</SubTitleBold>
             </Box>
              <Link to="/profile-detail">
              <SettingsIcon
                sx={{
                  fill: "#E5E9F0",
                  fontSize: "28px",
                }}
              />
              </Link>
            </Stack>
          </Box>
    

        <Box padding={"30px 0px"}>
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
          <ActionTab value="1" label="Collection" />
          <ActionTab value="2" label="Create" />
          <ActionTab value="3" label="Favorite" />
          <ActionTab value="4" label="Activity" />
        </ActionTabs>
      </Box>
      <TabPanel value={value} index="1">
       <ExploreDetailItem/>
      </TabPanel>
      <TabPanel value={value} index="2">
        <ExploreCreate/>
      </TabPanel>
      <TabPanel value={value} index="3">
      <ExploreDetailActivity/>
      </TabPanel>
      <TabPanel value={value} index="4">
        <ExploreDetailActivity/>
      </TabPanel>
      </ContainerFull> 
    </>
  );
}
