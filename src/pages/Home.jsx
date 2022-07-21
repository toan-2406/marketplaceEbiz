import { Box, Typography, Container, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { setBoards } from "../redux/features/boardSlice";
import { useNavigate } from "react-router-dom";
import boardApi from "../api/boardApi";
import { useState } from "react";
import nftsell from "../assets/images/home/nft_sell.png";
import  Banner  from "../components/Banner";
import Spolight from "../components/Spolight";
import TopCollection from "../components/TopCollection";
import NFTs from "../components/NFTs";
import PopularCategories from "../components/PopularCategories";



const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box>
      <Banner/> 
      <Spolight/>
      <TopCollection/>
      <NFTs/>
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
