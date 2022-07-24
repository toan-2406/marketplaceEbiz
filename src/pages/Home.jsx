import { Box} from "@mui/material";
import  Banner  from "../components/page/home/Banner";
import Spolight from "../components/page/home/Spolight";
import TopCollection from "../components/page/home/TopCollection";
import NFTs from "../components/page/home/NFTs";
import PopularCategories from "../components/page/home/PopularCategories";
import { BackGroundSection } from "../styles/home";



const Home = () => {
  return (
    <Box>
      <Banner/> 
      <Spolight/>
      <TopCollection/>
      <BackGroundSection>

      <NFTs/>
      </BackGroundSection>
      <PopularCategories/>  
      {
        //Banner
        //Spolight
        //Top Collection
        //NFTs
        //Popular Categories
      }
    </Box>
  );
};

export default Home;
