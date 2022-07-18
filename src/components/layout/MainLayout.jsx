import { Box } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './component/header'
import Footer from './component/footer'


const MainLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
      <Box sx={{
        width: '100%',
      }}>
        <Header />
          <Outlet />
        <Footer/>
      </Box>
    )
}

export default MainLayout