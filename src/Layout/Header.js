import React from 'react'
import './header.css'
import  useSearch from './Hooks/useSearch';
import Grid from '@mui/material/Grid';
import Navigation from "./Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

export default function Header() {
    const isSearch = useSearch();
    return (
        <Grid container justifyContent="flex-end">
            <div className="header">
                <Grid item xs={6} md={8}>
                    <p>Blog App</p>
                </Grid>
               <Navigation />



                <Grid item xs={12}>
                    {isSearch}
                </Grid>
                {/*<Grid item md={12}>*/}
                {/*    <p><MdOutlineShoppingCart/>*/}
                {/*    $00.00</p>*/}
                {/*</Grid>*/}
                </div>
        </Grid>

    )
}