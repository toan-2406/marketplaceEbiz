import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Avatar } from "@mui/material";
import { SubTitleBold, TitleBold } from "../../styles/component/typography";


function EnhancedTableHead(props) {
  const { rowCount, headCell } = props;

  return (
    <TableHead>
      <TableRow>
        {headCell.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            <TitleBold>{headCell.label}</TitleBold>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function TableMain(props) {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { data , headCells } = props;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2,backgroundColor:'transparent' }}>
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
  
          >
            <EnhancedTableHead headCell={headCells} rowCount={data.length} />
            <TableBody>
              {data.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    <TableCell
                      align="center"
                    >
                     <TitleBold> {row.status}</TitleBold>
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{display:'flex', alignItems:'center'}}>
                        <Avatar
                          sx={{
                            height: "44px",
                            width: "44px",
                            marginRight: "10px",
                          }}
                          alt={row.name}
                          src={row.image}
                        />
                        <TitleBold component="span">{row.name}</TitleBold>
                      </Box>
                    </TableCell>
                    <TableCell align="center"><TitleBold>{row.status === 'Transfer' ? '---' : row.price}</TitleBold></TableCell>
                    <TableCell align="center"><TitleBold>{row.status === 'Collection offers' ? '---' : row.quality}</TitleBold></TableCell>
                    <TableCell align="center"><SubTitleBold sx={{color: '#0085FF'}}>{row.from}</SubTitleBold></TableCell>
                    <TableCell align="center"><SubTitleBold >{row.status === 'Collection offers' || row.status === 'Offer' || row.status === 'List' ? '---' : <SubTitleBold sx={{color: '#0085FF',overflow: 'hidden', display: '-webkit-box', WebkitLineClamp:1,maxWidth:160,whiteSpace:'nowrap',textOverflow: 'ellipsis', WebkiBoxOrient: 'vertical'}}>{row.to}</SubTitleBold> }</SubTitleBold></TableCell>
                    <TableCell align="center"><SubTitleBold>{row.timeTransaction}</SubTitleBold></TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
