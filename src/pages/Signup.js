import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Signup() {
    return (
        <Grid container
              justifyContent="center"
              alignItems="center">
            <Grid item md={8}>
                <Typography gutterBottom variant="h5" component="div">
                    Signup here!
                </Typography>
                <label className="form__label" htmlFor="given-name">*Given Name </label><br/>
                <input className="form__input" type="text" id="givenname" placeholder="Given Name"/><br/>
            </Grid>
            <Grid item md={8}>
                <label className="form__label" htmlFor="familyname">Family Name </label><br/>
                <input type="text" id="FamilyName" className="form__input" placeholder="Family Name"/><br/><br/>
            </Grid>
            <Grid item md={8}>
                <label className="form__label" htmlFor="familyname">Family Name </label><br/>
                <input type="text" id="FamilyName" className="form__input" placeholder="Family Name"/>
            </Grid>
            <Grid item md={8}>
                <Button> Submit</Button>
                <Button> cancel</Button>
            </Grid>
        </Grid>
    )
}