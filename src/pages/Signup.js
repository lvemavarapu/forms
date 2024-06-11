import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Gender from "../components/Gender";


export default function Signup() {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
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
        if (values.firstName && values.lastName && values.email) {
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
                                <div> Your registration was successful!</div>
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
                        <Gender />

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