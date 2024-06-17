import React from 'react'
import './header.css'
import  useSearch from './Hooks/useSearch';
import Grid from '@mui/material/Grid';
import Navigation from "./Navigation";
import moment from 'moment';

export default function Header() {
    const isSearch = useSearch();
    return (
        <Grid container justifyContent="flex-end">
            <div className="header">
                <Grid item xs={6} md={8}>
                    <p>Blog App </p>
                </Grid>
                <p className="local-time">{moment().toString()}</p>
                <Navigation/>
                <Grid item lg={12}>
                    {isSearch}
                    {' '}

                </Grid>
                {/*<Grid item md={12}>*/}
                {/*    <p><MdOutlineShoppingCart/>*/}
                {/*    $00.00</p>*/}
                {/*</Grid>*/}
            </div>
        </Grid>

    )
}