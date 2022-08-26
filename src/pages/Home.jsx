import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { BackGroundOverLay1, BackGroundSection } from "../styles/home";
const Banner = React.lazy(() => import("../components/page/home/Banner"));
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
      <Box py={4}>
      <Suspense fallback={<div style={{display:'none'}}>Loading...</div>}>
        <Banner />
      </Suspense>
      </Box>
        <TopCollection />
          <NFTs />
        <PopularCategories /> 
    </Box>
  );
};

export default Home;
