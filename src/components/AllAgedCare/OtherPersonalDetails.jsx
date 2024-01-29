import react, {useState} from 'react';
import '../styles/basicinfo.css';
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../styles/basicinfo.css';


function OtherPersonalDetails()  {
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

                    <div id="yesorno">
                        <label> Were you born in Australia?</label>
                        <span>Required by government authority</span><br/>
                        <label>
                            <input type="checkbox" onChange={onChange}/>{' '}
                            Yes
                        </label>{' '}
                        <label>
                            <input type="checkbox" onChange={onChange}/>{' '}
                            No
                        </label>
                        <div className="country">
                            <label className="form__label" htmlFor="contact-name">If No,please specify the country you were born </label><br/>
                            <input className="form__input" type="text" id="country" placeholder="country"/>
                        </div>
                        <label> Do you speak a language other than English at home? </label>
                        <br />
                        <label>
                            <input type="checkbox" onChange={onChange}/>{' '}
                            Yes
                        </label>{' '}
                        <label>
                            <input type="checkbox" onChange={onChange}/>{' '}
                            No
                        </label>
                        <div className="Language">
                            <label className="form__label" htmlFor="Language">If Yes,please specify the language that you speak often</label><br/>
                            <input className="form__input" type="text" id="Language" placeholder="Language"/>
                        </div>
                        <label> Are you of Aboriginal or Torres Strait Islander Origin? </label>
                        <br />
                        <label>
                            <input type="checkbox" onChange={onChange}/>{' '}
                            Yes
                        </label>{' '}
                        <label>
                            <input type="checkbox" onChange={onChange}/>{' '}
                            No
                        </label>
                        <div className="ATS">
                            <label className="form__label" htmlFor="ATS">If Yes,please specify </label><br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Aboriginal
                            </label>{' '}
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Torres strait Islander
                            </label>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Both aboriginal and  Torres Strait Islander
                            </label>
                        </div>
                        <div className="Disability">
                            <label className="form__label" htmlFor="disability">Do you consider you have a disability, impairment or long-term condition? </label><br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                             Yes
                            </label>{' '}
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                NO
                            </label>

                        </div>
                    </div>

                <p className="subheading"> If yes, please tick any appropriate boxes:</p>
                <Box sx={{ width: '80%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2}>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Hearing/Deaf
                            </label>{' '}
                            <br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Intellectual
                            </label>{' '}
                            <br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Mental illness
                            </label>{' '}
                            <br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Vision
                            </label>{' '}
                            <br/>
                        </Grid>
                        <Grid item xs={6}>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Physical
                            </label>{' '}
                            <br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Learning
                            </label>{' '}
                            <br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Acquired brain impairment
                            </label>{' '}
                            <br/>
                            <label>
                                <input type="checkbox" onChange={onChange}/>{' '}
                                Medical condition
                            </label>{' '}
                        </Grid>

                    </Grid>
                </Box>
                    <div className="otherdisability">
                        <label className="form__label" htmlFor="disability">Other, please specify</label><br/>
                        <input className="form__input" type="text" id="other" placeholder="other"/>
                    </div>
                </div>
            </form>
        </>
    );
}
export default OtherPersonalDetails;