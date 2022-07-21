import * as React from "react";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import  {HeaderDesktop}  from "./HeaderDesktop";
export default function Header() {
  const theme = useTheme();
  const matchs = useMediaQuery(theme.breakpoints.up("md"));
  return (
      <>
        {matchs ? <HeaderDesktop/> : "Mobile"}
      </>
  );
}
