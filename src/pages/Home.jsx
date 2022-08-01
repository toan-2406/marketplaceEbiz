import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { BackGroundSection } from "../styles/home";
const Banner = React.lazy(() => import("../components/page/home/Banner"));
const Spolight = React.lazy(() => import("../components/page/home/Spolight"));
const TopCollection = React.lazy(() =>
  import("../components/page/home/TopCollection")
);
const NFTs = React.lazy(() => import("../components/page/home/NFTs"));
const PopularCategories = React.lazy(() =>
  import("../components/page/home/PopularCategories")
);

const Home = () => {
  return (
    <Box>
      <Suspense fallback={<div style={{display:'none'}}>Loading...</div>}>
        <Banner />
        <Spolight />
      </Suspense>
        <TopCollection />
        <BackGroundSection>
          <NFTs />
        </BackGroundSection>
        <PopularCategories /> 
    </Box>
  );
};

export default Home;
