import { Box, Stack, TablePagination } from '@mui/material';
import React from 'react'
import TableMain from '../components/TableList/TableMain';
import { BackGroundOverLayPage, TitleSection, WrapperContainer } from '../styles/home'
import { ActionTab, ActionTabs } from '../styles/home/topcollection';
import Input from "../components/Input";
const type = [
  {
    id: 1,
    name: "Ethereum",
  },
  {
    id: 2,
    name: "Bitcoin",
  },
  {
    id: 3,
    name: "Ethereum Classic",
  },
];
const data = [
  {
    id: 1,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },
  {
    id: 2,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',
  },

  {
    id: 3,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '30day',
  },
  {
    id: 4,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '1day',

  },
  {
    id: 5,
    avatar:{
      src:'https://openseauserdata.com/files/8bb5a3faa8de2761782f03b9ecc8e785.png',
      alt:'avatar',
      check:true,
    },
    name: 'Toan Dev 2k',
    floorprice: '69.29',
    price: '1.567,75',
    percent: '10%',
    time: '7day',

  }
  
]
const headCells = [
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Item",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "from",
    numeric: true,
    disablePadding: false,
    label: "From",
  },
  {
    id: "to",
    numeric: true,
    disablePadding: false,
    label: "To",
  },
  {
    id: "time",
    numeric: true,
    disablePadding: false,
    label: "Time",
  },
];
const datainaday = data.filter(item => item.time === '1day');
const datain7day = data.filter(item => item.time === '7day');
const datain30day = data.filter(item => item.time === '30day');

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
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
const Rankings = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <WrapperContainer>
    <BackGroundOverLayPage/>
    <TitleSection>
    Top Collections
    </TitleSection>
    <Stack direction='row' justifyContent="space-between">
        <ActionTabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <ActionTab
            value="1"
            label="1 day"
          />
          <ActionTab value="2" label="7 days" />
          <ActionTab value="3" label="30 days" />
        </ActionTabs>
        <Box sx={{ width: 256 }}>
            <Input required={false} label="All Chains" select={type} />
          </Box>
      </Stack>

      <TabPanel value={value} index="1">
        <TableMain headCells={headCells} data={datainaday} />
      </TabPanel>
      <TabPanel value={value} index="2">
      <TableMain headCells={headCells} data={datainaday} />
      </TabPanel>
      <TabPanel value={value} index="3">
      <TableMain headCells={headCells} data={datainaday} />
      </TabPanel>
      <TablePagination
      component="div"
      count={100}
      page={100}
      // onPageChange={handleChangePage}
      // rowsPerPage={rowsPerPage}
      // onRowsPerPageChange={handleChangeRowsPerPage}
    />
</WrapperContainer>
  )
}

export default Rankings