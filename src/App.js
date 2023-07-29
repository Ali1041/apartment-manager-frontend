import React from "react"
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./navigation/RouterConfig";

const App = () => {  
  return (
    <BrowserRouter>
        <CssBaseline>
          <AppRouter />
        </CssBaseline>
    </BrowserRouter>
  );
}


export default (App);
