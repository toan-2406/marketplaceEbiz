import { Box, Grid, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { setBoards } from "../redux/features/boardSlice";
import { useNavigate } from "react-router-dom";
import boardApi from "../api/boardApi";
import { useState } from "react";
import nftsell from "../assets/images/home/nft_sell.png";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#fafafa",
      }}
    >
      {/* hero section */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box>
            <img src={nftsell} alt="nft sell" />
          </Box>
        </Grid>
        <Grid item xs={6} sx={
          {
            alignSelf: "center",
          }
        }>
          <Typography variant="h4">
            Discover, create, and sell unique <span> NFTs</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
