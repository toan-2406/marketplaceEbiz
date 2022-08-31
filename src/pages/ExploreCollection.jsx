import { Box, Grid } from "@mui/material";
import React from "react";
import CardNTFs from "../components/Card/CardNTFs";
import { BackGroundOverLayFull, BackGroundOverLayPage, TitleSection, WrapperContainer } from "../styles/home";
import { ActionTab, ActionTabs } from "../styles/home/topcollection";

const data = [
  {
    id: 1,
    images: {
      avatar:
        "https://openseauserdata.com/files/6eb79c8b88dceea15c98300e4175fdb1.jpg",
      cover:
        "https://openseauserdata.com/files/e488a88498206481dc37e32581204b9b.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, c    onsect adipiscing elit",
    category: ["trending", "art"],
  },
  {
    id: 2,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
    category: ["trending", "collectibles"],
  },
  {
    id: 3,
    images: {
      avatar:
        "https://lh3.googleusercontent.com/_MVhJrWm9083NzoHa6QvCbUw-Pbyg3REyYZbhty8s9DwRi8UvnoOiY_j-5NhBJwxVMnRqfqy3v91NwYuw2X_SB-vjJg5lOrxX3Xh5Ec=h128-w128",
      cover:
        "https://lh3.googleusercontent.com/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U=h400",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
    category: ["trending", "music"],
  },
  {
    id: 4,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
    category: ["trending", "photography"],
  },
  {
    id: 5,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
    category: ["trending", "domains"],
  },
  {
    id: 6,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
    category: ["trending", "sports"],
  },
  {
    id: 7,
    images: {
      avatar:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
      cover:
        "https://openseauserdata.com/files/b87867ca79249e972ff261f140cd6b5c.gif",
    },
    name: "Toàn Dev 2k",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit",
    category: ["art"],
  },
];
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

const ExploreCollection = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //filter data by category = trending and art
  const trending = data.filter((item) => item.category.includes("trending"));
  const art = data.filter((item) => item.category.includes("art"));
  const collectibles = data.filter((item) =>
    item.category.includes("collectibles")
  );
  const music = data.filter((item) => item.category.includes("music"));
  const photography = data.filter((item) =>
    item.category.includes("photography")
  );
  const domains = data.filter((item) => item.category.includes("domains"));
  const sports = data.filter((item) => item.category.includes("sports"));
  return (
    <WrapperContainer sx={{paddingBottom:'90px'}}>
        <BackGroundOverLayPage/>
      <TitleSection>Explore Collections</TitleSection>
      <Box  sx={{overflowX:'auto',width:'100%'}}>
        <ActionTabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <ActionTab value="1" label="Trending" />
          <ActionTab value="2" label="Art" />
          <ActionTab value="3" label="Collectibles" />
          <ActionTab value="4" label="Music" />
          <ActionTab value="5" label="Photography" />
          <ActionTab value="6" label="Domains" />
          <ActionTab value="7" label="Sports" />
        </ActionTabs>
      </Box>

      <TabPanel value={value} index="1">
        <Grid container spacing={2}>
          {trending.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardNTFs item={item}  />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index="2">
      <Grid container spacing={2}>
          {art.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id} >
              <CardNTFs item={item}  />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index="3">
      <Grid container spacing={2}>
          {collectibles.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardNTFs item={item}  />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index="4">
      <Grid container spacing={2}>
          {music.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardNTFs item={item}  />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index="5">
      <Grid container spacing={2}>
          {photography.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardNTFs item={item}  />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index="6">
      <Grid container spacing={2}>
          {domains.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardNTFs item={item}  />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index="7">
      <Grid container spacing={2}>
          {sports.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardNTFs item={item}  />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </WrapperContainer>
  );
};

export default ExploreCollection;
