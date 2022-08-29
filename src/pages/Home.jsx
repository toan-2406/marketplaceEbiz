import React, { Suspense } from "react";
import { Box } from "@mui/material";
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
      <Suspense fallback={<div style={{display:'none'}}>Loading...</div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div style={{display:'none'}}>Loading...</div>}>
      <TopCollection />
          <NFTs />
        <PopularCategories /> 
      </Suspense>
      
    </Box>
  );
};

export default Home;
