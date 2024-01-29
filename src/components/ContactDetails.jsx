import './styles/contactdetails.css'
import React from "react";
import { useForm } from "react-hook-form";
import {AiFillAlert} from 'react-icons/ai';
import phone from '../assets/phone.png';
import {TextField} from "@mui/material";
function ContactDetails(){
    const {
        handleSubmit,
        register,
        formState: { errors } } = useForm();
    return (
        <>
            <p class ="subheading">
                Contact details
            </p>
            <div id = "home-work">
                <div className="home-phone">
                    <label>Home Phone</label><br />
                    <input type="text" placeholder="HomePhone"
                        />
                    <br />
                    <TextField id="filled-basic" label="Filled" variant="filled"/>
                    <TextField id="standard-basic" label="Standard" variant="standard"/>
                    <TextField id="standard-basic" label="Standard" variant="standard"/>
                </div>
                <div className="workphone">
                    <label>Work Phone</label><br />
                    <input type="text" id="phone" placeholder="WorkPhone"/>
                </div>
            </div>


                <div className="mobile">
                    <label>*Mobile Phone</label><br />
                    <input type="text" placeholder="Mobile Number"/>
                </div>


        <div id = "email">
            <div className="email">
                <label>*Email</label><br />
                <input
                    type="email" placeholder="someone@email.com"  />
            </div>
            <div className="email">
                <label>Alternate Email</label><br />
                <input type="email" placeholder="someone@email.com"  />
            </div>
        </div>
        </>
    )
}
export default ContactDetails;