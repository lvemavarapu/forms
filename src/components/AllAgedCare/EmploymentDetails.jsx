import react, {useState} from 'react';
import '../styles/contactdetails.css';
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


 function EmploymentDetails() {
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
                <div className="form-body">
                    {/*<h5>Employment Details</h5>*/}
                    <div id="title-name">
                        <div className="contact-name">
                            <label className="form__label" htmlFor="contact-name">*Contact Name </label><br/>
                            <input className="form__input" type="text" id="contact-name" placeholder="Contact Name"/>
                        </div>
                        <div className="company-name">
                            <label className="form__label" htmlFor="company-name">Company Name </label><br/>
                            <input type="text" id="CompanyyName" className="form__input" placeholder="Company Name"/>
                        </div>
                    </div>
                    <div id="address">
                        <div className="address">
                            <label>Address</label><br/>
                            <input type="text" id="address" placeholder="Address"/>
                        </div>
                        <div className="suburb">
                            <label>Suburb</label><br/>
                            <input type="text" id="suburb" placeholder="Suburb"/>
                        </div>
                    </div>

                    <div id="state">
                        <div className="state">
                            <label>State</label><br/>
                            <select>
                                <option value="QLD">QLD</option>
                                <option value="NSW">NSW</option>
                                <option value="VIC">VIC</option>
                                <option value="ACT">ACT</option>
                                <option value="SA">SA</option>
                                <option value="WA">WA</option>
                                <option value="NT">NT</option>
                                <option value="Tas">TAS</option>
                            </select>
                        </div>
                        <div className="postcode">
                            <label>PostCode</label><br/>
                            <input type="text" id="suburb" placeholder="Postcode"/>
                        </div>
                    </div>
                    <p className ="subheading"> Contact details</p>
                    <div id = "work">
                        <div className="workphone">
                            <label>Work Phone</label><br />
                            <input type="text" id="phone" placeholder="WorkPhone"/>
                        </div>
                        <div className="mobile">
                            <label>*Mobile Phone</label><br />
                            <input type="text" placeholder="Mobile Number"/>
                        </div>
                    </div>
                    <div id = "email">
                        <div className="email">
                            <label>*Email</label><br />
                            <input
                                type="email" placeholder="someone@email.com"  /><br/>
                        </div>
                    </div>
                </div>
                    <p className="subheading">Employment Status</p>
                    <Box sx={{ width: '40%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Full time employee
                                </label>{' '}
                                <br/>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Self-employed – not employing others
                                </label>{' '}
                                <br/>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Employed – unpaid worker in a family business
                                </label>{' '}
                                <br/>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Unemployed – seeking part-time work
                                </label>{' '}

                            </Grid>
                            <Grid item xs={6}>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Part-time employee (includes School Based)
                                </label>
                                <br/>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Self-employed – employing others
                                </label>
                                <br/>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Unemployed – seeking full-time work
                                </label>
                              <br/>
                                <label>
                                    <input type="checkbox" onChange={onChange}/>{' '}
                                    Not employed – not seeking employment
                                </label>
                                <br/>
                            </Grid>
                        </Grid>
                    </Box>

            </form>
        </>
    );
}
export default EmploymentDetails;