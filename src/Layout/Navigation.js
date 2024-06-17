import React from "react";

import {BrowserRouter,  Link, Route, Routes} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navigation = () => {
    return (
        <>
            {/*<Grid*/}
            {/*    container*/}
            {/*    direction="row"*/}
            {/*    justifyContent="center"*/}
            {/*    alignItems="center"*/}
            {/*    rowSpacing={1}*/}
            {/*>*/}
            {/*    <Link to="/about" activeStyle >About</Link>&nbsp;&nbsp;*/}
            {/*    <Link to="/gallery">Gallery</Link>&nbsp;&nbsp;*/}
            {/*    <Link to="/signup">Signup</Link>&nbsp;&nbsp;*/}
            {/*    <Link to="/team">Team</Link>&nbsp;&nbsp;*/}
            {/*</Grid>*/}
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/gallery" activeStyle>
                       Gallery
                    </NavLink>
                    <NavLink to="/signup" activeStyle>
                        Signup
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Team
                    </NavLink>
                                                            {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to="/signin">*/}
                {/*        Sign In*/}
                {/*    </NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navigation;