import { Box } from "@mui/material";
import React from "react";
import {
  ButtonContent,
  ButtonOutline,
} from "../../../../styles/component/button";
import { TitleSection, WrapperContainer } from "../../../../styles/home";
import { ActionTabs, ActionTab } from "../../../../styles/home/topcollection";
import CardTopCollection from "./CardTopCollection";

const data = [
  {
    id: 1,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 2,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },

  {
    id: 3,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "30day",
  },
  {
    id: 4,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "1day",
  },
  {
    id: 5,
    avatar: {
      src: "https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png",
      alt: "avatar",
      check: true,
    },
    name: "Toan Dev 2k",
    floorprice: "69.29",
    price: "1.567,75",
    percent: "10%",
    time: "7day",
  },
];

const datainaday = data.filter((item) => item.time === "1day");
const datain7day = data.filter((item) => item.time === "7day");
const datain30day = data.filter((item) => item.time === "30day");

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

export default function TopCollection() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#1E1E1E"}}>
      <WrapperContainer>
        <TitleSection
          sx={{
            marginBottom: "32px",
          }}
        >
          Top Collection
        </TitleSection>
        <Box>
          <ActionTabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <ActionTab value="1" label="1 day" />
            <ActionTab value="2" label="7 days" />
            <ActionTab value="3" label="30 days" />
          </ActionTabs>
        </Box>

        <TabPanel value={value} index="1">
          <CardTopCollection data={datainaday} />
        </TabPanel>
        <TabPanel value={value} index="2">
          <CardTopCollection data={datain7day} />
        </TabPanel>
        <TabPanel value={value} index="3">
          <CardTopCollection data={datain30day} />
        </TabPanel>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "44px",
          }}
        >
          <ButtonOutline>
            <ButtonContent>Go to Rankings</ButtonContent>
          </ButtonOutline>
        </Box>
      </WrapperContainer>
    </Box>
  );
}
