import React from 'react'
import MiniDrawer from "./Drawer";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


export const HOC = (props) =>{
    return(
        <>
        <MiniDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              {props.child}
            </Box>
        </>
    )
}
