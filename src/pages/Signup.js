import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import Gender from "../components/Gender";
import moment from "moment";


export default function Signup() {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender:""
    });
    const handleInputChange = (event) => {
     event.preventDefault();

        const { name, value } = event.target;
        setValues((values) => ({
            ...values,
            [name]: value
        }));
    };
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName && values.email && values.gender) {
            setValid(true);
        }
        setSubmitted(true);

    };
            return (
                <>
                <Grid container
                      justifyContent="center"
                      alignItems="center"
                >
                    <form className="register-form" onSubmit={handleSubmit}>
                        {submitted && valid && (
                            <div className="success-message">
                                <h3>
                                    {" "}
                                    Welcome {values.firstName} {values.lastName}{" "}
                                </h3>
                                <div> Your registration was successful! on {moment().toString()}</div>
                            </div>
                        )}
                        {!valid && (
                            <>
                            <label className="form__label"
                                   htmlFor="given-name">Given Name </label><br/>
                            <input
                                label="FirtsName"
                                className="form-field"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleInputChange}
                            />
                            <br />
                            </>

                        )}

                        {submitted && !values.firstName && (
                            <span id="first-name-error">Please enter a first name</span>
                        )}

                        {!valid && (
                            <>
                            <label className="form__label"
                                   htmlFor="last-name">Last Name </label><br/>
                            <input
                                className="form-field"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleInputChange}
                            />
                                <br />
                            </>
                        )}

                        {submitted && !values.lastName && (
                            <span id="last-name-error">Please enter a last name</span>
                        )}

                        {!valid && (
                            <>
                                <label className="form__label"
                                       htmlFor="email">Email </label><br/>
                                <input
                                    className="form-field"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleInputChange}
                                />
                                <br/>
                            </>
                        )}

                        {submitted && !values.email && (
                            <span id="email-error">Please enter an email address</span>
                        )}

                        {!valid && (
                            <Gender />
                        )}
                        {/*{submitted && !values.gender && (*/}
                        {/*    <span id="email-error">Please select a valid gender</span>*/}
                        {/*)}*/}

                        {!valid && (
                            <Grid item xs={12} spacing={12}>
                                <button className="form-field" type="submit">
                                    Register
                                </button>
                                <button className="form-field" type="submit">
                                   Cancel
                                </button>
                            </Grid>
                        )}
                    </form>
                 </Grid>
                </>
            )
}