import React from "react";

import {BrowserRouter,  Link, Route, Routes} from "react-router-dom";
import Grid from "@mui/material/Grid";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

const Navigation = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={1}
            >
                <Link to="/about" activeStyle >About</Link>&nbsp;&nbsp;
                <Link to="/gallery">Gallery</Link>&nbsp;&nbsp;
                <Link to="/signup">Signup</Link>&nbsp;&nbsp;
            </Grid>
        </>
    );
};

export default Navigation;