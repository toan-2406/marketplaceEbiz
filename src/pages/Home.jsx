import { Box } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton'
import { useDispatch } from "react-redux"
import { setBoards } from "../redux/features/boardSlice"
import { useNavigate } from "react-router-dom"
import boardApi from "../api/boardApi"
import { useState } from "react"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Home nef cu
    </Box>
  )
}

export default Home