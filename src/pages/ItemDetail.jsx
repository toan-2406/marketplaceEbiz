import {
  Box,
  Grid,
  ListItem,
  ListItemText,
  Stack,
  ToggleButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  SubTitleBold,
  TitleBold,
  TitleNormal,
} from "../styles/component/typography";
import { BackGroundOverLayPage, WrapperContainer } from "../styles/home";
import {
  AvatarWrapper,
  BorderBox,
  BorderBox2,
  BorderLinearProgress,
} from "../styles/itemdetail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DropDown from "../components/DropDown/Dropdown";
import { Colors } from "../styles/theme";
import { ListItemItems } from "../styles/component/list";
import { Description } from "../styles/component/typography";
import {
  ButtonContent,
  ButtonOutline,
  ColorButton,
} from "../styles/component/button";
import TableMain from "../components/TableList/TableMain";
import SliderNoneProgessBar from "../components/Slider/SliderNoneProgessBar";
import ModalMain from "../components/Modal";
import PuchaseItem, { PurchaseSuccess } from "../components/Modal/PuchaseItem";
import MakeOffer from "../components/Modal/MakeOffer";
import AcceptOffer from "../components/Modal/AcceptOffer";
import CompleteCheckout from "../components/Modal/CompleteCheckout";
import Transfer from "../components/Modal/Transfer";
const data = [
  {
    id: 1,
    price: "85,69 ETH ($90.557,19)",
    expiration: "10 hours",
    from: "franklinisbored",
  },
  {
    id: 2,
    price: "85,69 ETH ($90.557,19)",
    expiration: "10 hours",
    from: "franklinisbored",
  },
  {
    id: 3,
    price: "85,69 ETH ($90.557,19)",
    expiration: "10 hours",
    from: "franklinisbored",
  },
  {
    id: 4,
    price: "85,69 ETH ($90.557,19)",
    expiration: "10 hours",
    from: "franklinisbored",
  },
];

const data1 = [
  {
    id: 1,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 2,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 3,
    collectionID: "0123",
    images:
      "https://lh3.googleusercontent.com/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U=h400",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 4,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",

    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 5,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 6,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
  {
    id: 7,
    collectionID: "0123",
    images:
      "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    name: "Collections name",
    itemName: "item name",
    price: 90.99,
    currency: "ETH",
    lastPrice: 9,
  },
];
const headCellsOffers = [
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "expriration",
    numeric: true,
    disablePadding: false,
    label: "Expiration",
  },
  {
    id: "from",
    numeric: true,
    disablePadding: false,
    label: "From",
  },
];
const data2 = [
  {
    id: 1,
    event: "Offer",
    price: "85,69 ETH ($90.557,19)",
    to: 'H122132',
    from: "franklinisbored",
    timeTransaction: '2 minutes ago'
  },
  {
    id: 2,
    event: "Offer",
    price: "85,69 ETH ($90.557,19)",
    to: 'H122132',
    from: "franklinisbored",
    timeTransaction: '2 minutes ago'
  },
  {
    id: 3,
    event: "Transfer",
    price: "85,69 ETH ($90.557,19)",
    to: 'H122132',
    from: "franklinisbored",
    timeTransaction: '2 minutes ago'
  },
  {
    id: 4,
    event: "Offer",
    price: "85,69 ETH ($90.557,19)",
    to: 'H122132',
    from: "franklinisbored",
    timeTransaction: '2 minutes ago'
  },
];
const headCellsActivity = [
  {
    id: "event",
    numeric: true,
    disablePadding: false,
    label: "Event",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "from",
    numeric: true,
    disablePadding: false,
    label: "From",
  },
  {
    id: "to",
    numeric: true,
    disablePadding: false,
    label: "To",
  },
  {
    id: "time",
    numeric: true,
    disablePadding: false,
    label: "Time",
  }
];

export default function ItemDetail() {
  const [isOpen, setIsOpen] = React.useState({
    isOpen: false,
    type: "",
  });
  const [selected, setSelected] = useState(false);
  const [progress, setProgress] = useState(0);
  const OpenModal = (type) => {
    setIsOpen({
      isOpen: true,
      type: type,
    });
  };
  //useEffect to update progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 50);
      console.log(progress);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);
  return (
    <WrapperContainer>
      {isOpen.isOpen && (
        <ModalMain width="40%" open={isOpen} setOpen={setIsOpen}>
          {/* {progress >= 100 && isOpen.type === "buy" ? (
            <PurchaseSuccess /> 
          ) : (
           <PuchaseItem progress={progress}/>
          )} */}
          <PuchaseItem progress={progress}/>
          {isOpen.type === "makeoffer" && <Transfer />}
        </ModalMain>
      )}
      <BackGroundOverLayPage />
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{ "& > * ~ *": { marginTop: "20px" } }}>
          <AvatarWrapper>
            <Box sx={{ height: "90%", borderRadius: "12px" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                src="https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif"
                alt="avatar"
              />
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ height: "10%", padding: "0px 12px" }}
            >
              <TitleNormal variant="h5" component="h5">
                Owned by{" "}
                <TitleNormal component="span" sx={{ color: "#0085FF" }}>
                  ToanDev2k
                </TitleNormal>
              </TitleNormal>
              <Box>
                <ToggleButton
                  value="check"
                  selected={selected}
                  onChange={() => {
                    setSelected(!selected);
                  }}
                  sx={{
                    border: "none",
                    "&.Mui-selected": { backgroundColor: "transparent" },
                  }}
                >
                  {selected ? (
                    <FavoriteIcon sx={{ color: "#D0004B" }} />
                  ) : (
                    <FavoriteBorderOutlinedIcon sx={{ fill: "#fff" }} />
                  )}
                </ToggleButton>
                <TitleNormal variant="h5" component="span">
                  26 favorites
                </TitleNormal>
              </Box>
            </Stack>
          </AvatarWrapper>
          <DropDown type="normal" title="Description">
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  maxHeight: "100px",
                  color: Colors.body,
                  overflow: "auto",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "19px",
                },
              }}
              secondary="Unfortunately experiments have resulted in a major side effect, becoming Possessed! As a result, each Subject has become animated, constantly switching between Unfortunately experiments have resulted in a major side effect, becoming Possessed! As a result, each Subject has become animated, constantly switching between Unfortunately experiments have"
            />
          </DropDown>
          <DropDown type="checkbox" title="Properties">
            <Stack
              sx={{
                padding: " 10px 12px ",
                marginRight: {xs:'0px',md:'12px'},
                height: "145px",
                overflow: "auto",
              }}
              flexWrap="wrap"
              direction="row"
              justifyContent="flex-start"
              gap={2}
            >
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
              <ListItem
                sx={{
                  width: {xs:'calc(100% / 3.4)',md:'calc(100% / 3 - 14px)'},
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.backgroundSecondary,
                }}
              >
                <ListItemItems primary="background" secondary="New Punk Blue" />
              </ListItem>
            </Stack>
          </DropDown>
          <DropDown type="checkbox" title="Levels">
            <ListItem>
              <ListItemText primary="Count" sx={{ color: Colors.body }} />
              <Box width="122px">
                <BorderLinearProgress variant="determinate" value={50} />
              </Box>
              <ListItemText
                sx={{ textAlign: "right", color: Colors.body }}
                primary="9 out of 13"
              />
            </ListItem>
          </DropDown>
          <DropDown type="checkbox" title="Stats">
            <ListItem>
              <ListItemText primary="Length" sx={{ color: Colors.body }} />

              <ListItemText
                sx={{ textAlign: "right", color: Colors.body }}
                primary="9 out of 13"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Segment length"
                sx={{ color: Colors.body }}
              />

              <ListItemText
                sx={{ textAlign: "right", color: Colors.body }}
                primary="9 out of 13"
              />
            </ListItem>
          </DropDown>
          <DropDown type="checkbox" title="Details">
            <ListItem>
              <ListItemText
                primary="Contract Address"
                sx={{ color: Colors.body }}
              />

              <ListItemText
                sx={{ textAlign: "right", color: Colors.body }}
                primary="0xbc4c...fl3d"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Token ID" sx={{ color: Colors.body }} />

              <ListItemText
                sx={{ textAlign: "right", color: Colors.body }}
                primary="2775"
              />
            </ListItem>
          </DropDown>
        </Grid>
        <Grid item xs={12} md={7} sx={{ "& > * ~ *": { marginTop: "20px" } }} display="flex" flexDirection={{xs:"column-reverse",md:'column'}}>
          <BorderBox padding="20px 24px 20px 24px">
            <TitleNormal sx={{ color: "#0085FF" }}>
              Bored Ape Yacht Club
            </TitleNormal>
            <TitleBold fontSize="28px !important" lineHeight="40px !important">
              #1898
            </TitleBold>
            <BorderBox2>
              <SubTitleBold>Current price</SubTitleBold>
              <TitleBold
                variant="h5"
                component="h4"
                fontSize="28px !important"
                lineHeight="40px !important"
              >
                90,5{" "}
                <TitleNormal fontSize={16} component="sup">
                  ETH
                </TitleNormal>
              </TitleBold>
              <Description lineHeight="24px !important">
                ($99.753,63)
              </Description>
            </BorderBox2>
            <Stack
              direction={{xs:'column',sm:'row'}}
              justifyContent="flex-start"
              alignItems="center"
              gap={2}
              mt={2}
            >
              <ButtonOutline>
                <ButtonContent
                  sx={{ padding: "15px 67px",backgroundColor:'#271225' }}
                  onClick={() => OpenModal("makeoffer")}
                >
                  Make offer
                </ButtonContent>
              </ButtonOutline>
              <ColorButton
                sx={{ padding: "18px 75px" }}
                onClick={() => OpenModal("buy")}
              >
                Buy now
              </ColorButton>
            </Stack>
          </BorderBox>
          <DropDown type="normal" title="Offers">
            <Box sx={{ maxHeight: "272px", overflow: "auto" }}>
              <TableMain headCells={headCellsOffers} data={data} />
            </Box>
          </DropDown>
          <DropDown type="normal" title="Item Activity">
            <Box sx={{ maxHeight: "400px", overflow: "auto" }}>
              <TableMain headCells={headCellsActivity} data={data2} />
            </Box>
          </DropDown>
        </Grid>
      </Grid>
      <BorderBox padding="20px 0" mt={2}>
        <Stack
          padding="0 12px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TitleBold maxWidth={'50%'}>NFTs related to this item</TitleBold>
          <ColorButton>View collection</ColorButton>
        </Stack>
        <Box mt={2} sx={{width:'100%'}} position={"relative"}>
          <SliderNoneProgessBar data={data1} mt={2} />
        </Box>
      </BorderBox>
    </WrapperContainer>
  );
}
