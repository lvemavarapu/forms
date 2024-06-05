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
            <h4>
                Contact details
           </h4>
            <div id = "home-work">
                <div className="home-phone">
                    <label>Home Phone</label><br />
                    <input type="text" placeholder="HomePhone"
                        />
                    <br />
                   </div>
                <div className="workphone">
                    <label>Work Phone</label><br />
                    <input type="text" id="phone" placeholder="WorkPhone"/>
                </div>
            </div>


                <div className="mobile">
                    <label>Mobile Phone</label><br />
                    <input type="text" placeholder="Mobile Number" required/>
                </div>

                    <div id ="email-address">
                            <div id="email">
                                <label>Email</label><br />
                                <input type="email" id="email" placeholder="soneone@email.com"/>
                            </div>

                    <div id="alternamemail">
                        <label>Alternate Email</label><br />
                        <input type="email" placeholder="someone@email.com"/>
                    </div>
            </div>

        </>
    )
}
export default ContactDetails;