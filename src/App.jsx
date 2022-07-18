import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './css/custom-scrollbar.css'
import CssBaseLine from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  const theme = createTheme({
    palette: { mode: 'dark' }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
