import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import {
  LinkFooter,
  TitleFooter,
  WrapperContainer,
} from "../../../../styles/home";
//IMG
import twitter from "../../../../assets/images/footer/Twitter.png";
import facebook from "../../../../assets/images/footer/facebook.png";
import instagram from "../../../../assets/images/footer/instagram.png";
import youtube from "../../../../assets/images/footer/youtube.png";
import gmail from "../../../../assets/images/footer/gmail.png";

const data = [
  {
    id: 1,
    title: "All NFTs",
    link: "/nfts",
  },
  {
    id: 2,
    title: "Art",
    link: "/art",
  },
  {
    id: 3,
    title: "Collectibles",
    link: "/collectibles",
  },
  {
    id: 4,
    title: "Music",
    link: "/music",
  },
  {
    id: 5,
    title: "Photography",
    link: "/photography",
  },
  {
    id: 6,
    title: "Domains",
    link: "/domains",
  },
  {
    id: 7,
    title: "Sports",
    link: "/sports",
  },
];
const dataCompany = [
  {
    id: 1,
    title: "About",
    link: "/about",
  },
];
const dataComunity = [
  {
    id: 1,
    src: twitter,
    alt: "twitter",
    link: "https://twitter.com/NFT_NEO",
  },
  {
    id: 2,
    src: instagram,
    alt: "instagram",
    link: "https://www.instagram.com/nft_neo/",
  },
  {
    id: 3,
    src: facebook,
    alt: "facebook",
    link: "https://www.facebook.com/NFT_NEO/",
  },
  {
    id: 4,
    src: youtube,
    alt: "youtube",
    link: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
  },
  {
    id: 5,
    src: gmail,
    alt: "gmail",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
];
const Footer = () => {
  return (
    <WrapperContainer>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={4}>
          <img src='https://ebizworldsolutions.com/website-development/img/main/ebizw.png' alt="logo" />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TitleFooter>Marketplace</TitleFooter>
          <List dense={true}>
            {data.map((item) => {
              return (
                <LinkFooter href={item.link} key={item.id}>
                  <ListItem sx={{ paddingLeft: "unset" }}>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </LinkFooter>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TitleFooter>Rackings</TitleFooter>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TitleFooter>Company</TitleFooter>
          <List dense={true}>
            {dataCompany.map((item) => {
              return (
                <LinkFooter href={item.link} key={item.id}>
                  <ListItem sx={{ paddingLeft: "unset" }}>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </LinkFooter>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TitleFooter>Join the community</TitleFooter>
          <Stack sx={{marginTop: "8px"}} direction='row' flexWrap="wrap" justifyContent="flex-start" spacing={1.5} alignItems="center">
            {dataComunity.map((item) => {
              return (
                <Link href={item.link} key={item.id}>
                  <img  sx={{ width:30, height: 30 }} alt={item.alt} src={item.src} />
                </Link>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default Footer;
