import react, {useState} from 'react';
import '../styles/basicinfo.css';
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../styles/basicinfo.css';
import {FormLabel} from "@mui/material";
import Button from "@material-ui/core/Button";
import Checkbox from "@mui/material/Checkbox";


function StudyUSIFee()  {
    const [formData, setFormData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };
    const onChange = (event) => {
        console.log('change', event.target.value);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <input type="checkbox" id="reason" name="reason"
                               value="To get skills for Community/voluntary work" />{' '}
                        To get skills for Community/voluntary work
                        {' '}
                        <input type="checkbox" id="reason" name="reason"
                               value="To get skills for Community/voluntary work" />{' '}
                        To get into another course of study
                        <input type="checkbox" id="reason" name="reason"
                               value="To get skills for Community/voluntary work" />{' '}
                        To get into another course of study
                    </Grid>

                </Grid>


            </form>
        </>
    );
}
export default StudyUSIFee;