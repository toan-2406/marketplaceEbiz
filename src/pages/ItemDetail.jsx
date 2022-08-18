import {
  Avatar,
  Box,
  Grid,
  IconButton,
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
import { ListItem_Items } from "../styles/component/list";
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
const data = [
  {
    id: 1,
    status: "Sale",
    name: "CryptoPunks #1",
    price: "0.1 ETH",
    image:
      "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 1,
    from: "H12078",
    to: "Ton.Dev",
    timeTransaction: "2021-09-01T00:00:00.000Z",
  },
  {
    id: 2,
    status: "Transfer",
    name: "CryptoPunks #2",
    price: "0.1 ETH",
    image:
      "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 2,
    from: "H12078",
    to: "Ton.Dev",
    timeTransaction: "2021-09-01T00:00:00.000Z",
  },
  {
    id: 3,
    status: "List",
    name: "CryptoPunks #3",
    price: "0.1 ETH",
    image:
      "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 3,
    from: "H12078",
    to: "Ton.Dev saddsjads",
    timeTransaction: "2021-09-01T00:00:00.000Z",
  },
  {
    id: 4,
    status: "Offer",
    name: "CryptoPunks #4",
    price: "0.1 ETH",
    image:
      "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 4,
    from: "H12078",
    to: "Ton.Dev saddsjads",
    timeTransaction: "2021-09-01T00:00:00.000Z",
  },
  {
    id: 5,
    status: "Collection offers",
    name: "CryptoPunks #5",
    price: "0.1 ETH",
    image:
      "https://openseauserdata.com/files/d32ded460ea85238572ab657783273ed.gif",
    quality: 5,
    from: "H12078",
    to: "Ton.Dev saddsjads",
    timeTransaction: "2021-09-01T00:00:00.000Z",
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
const headCells = [
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Item",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
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
  },
];

export default function ItemDetail() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [selected, setSelected] = useState(false);
  const [progress, setProgress] = useState(0);
  const OpenModal = () => {
    setIsOpen(true);
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
      {isOpen && (
        <ModalMain width="40%" open={isOpen} setOpen={setIsOpen}>
          {progress >= 100 ? (
            <PurchaseSuccess />
          ) : (
         
           <PuchaseItem progress={progress}/>
          
          )}
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
                padding: " 0 12px ",
                marginRight: "12px",
                height: "138px",
                overflow: "auto",
              }}
              flexWrap="wrap"
              direction="row"
              justifyContent="flex-start"
              gap={2}
            >
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
              </ListItem>
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
              </ListItem>
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
              </ListItem>
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
              </ListItem>
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
              </ListItem>
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
              </ListItem>
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
              </ListItem>
              <ListItem
                sx={{
                  width: "calc(100% / 3 - 14px)",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: Colors.blackCard,
                }}
              >
                <ListItem_Items
                  primary="background"
                  secondary="New Punk Blue"
                />
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
        <Grid item xs={12} md={7} sx={{ "& > * ~ *": { marginTop: "20px" } }}>
          <BorderBox padding="52px 24px 20px 24px">
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
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={2}
              mt={2}
            >
              <ButtonOutline>
                <ButtonContent sx={{ padding: "15px 67px" }}>
                  Make offer
                </ButtonContent>
              </ButtonOutline>
              <ColorButton sx={{ padding: "18px 75px" }} onClick={OpenModal}>
                Buy now
              </ColorButton>
            </Stack>
          </BorderBox>
          <DropDown type="normal" title="Offers">
            <Box sx={{ maxHeight: "272px", overflow: "auto" }}>
              <TableMain headCells={headCells} data={data} />
            </Box>
          </DropDown>
          <DropDown type="normal" title="Offers">
            <Box sx={{ maxHeight: "400px", overflow: "auto" }}>
              <TableMain headCells={headCells} data={data} />
            </Box>
          </DropDown>
        </Grid>
      </Grid>
      <BorderBox padding="20px 0">
        <Stack
          padding="0 12px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TitleBold>NFTs related to this item</TitleBold>
          <ColorButton>View collection</ColorButton>
        </Stack>
        <Box mt={2} paddingLeft="12px">
          <SliderNoneProgessBar data={data1} mt={2} />
        </Box>
      </BorderBox>
    </WrapperContainer>
  );
}
