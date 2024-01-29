import react, {useState} from 'react';
import '../styles/basicinfo.css';
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../styles/basicinfo.css';
import {TextField, Typography} from "@mui/material";
import Button from "@material-ui/core/Button";


function EducationDetails()  {
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
                <Typography
                    variant="body2"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semi-bold',
                    }}
                >
                    What is your highest COMPLETED school level?
                </Typography>
                <div id="school">
                    <label>
                        <input
                            name="school"
                            type="checkbox"
                            value="12"
                            onChange={onChange}
                        />{'    '}
                        12
                    </label>{' '}
                    <label>
                        <input
                            name="school"
                            type="checkbox"
                            value="12"
                            onChange={onChange}
                        />{' '}
                        11
                    </label><label>
                    <input
                        name="school"
                        type="checkbox"
                        value="10"
                        onChange={onChange}
                    />{' '}
                    10
                </label><label>
                    <input
                        name="school"
                        type="checkbox"
                        value="9"
                        onChange={onChange}
                    />{' '}
                    9
                </label><label>
                    <input
                        name="school"
                        type="checkbox"
                        value="8"
                        onChange={onChange}
                    />{' '}
                    8
                </label>
                    <label>
                        <input
                            name="school"
                            type="checkbox"
                            value="never"
                            onChange={onChange}
                        />{' '}
                        Never attended School
                    </label><br />
                </div>
                <br/>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semi-bold',
                    }}
                >
                    Are you still enrolled in secondary or senior secondary education?
                </Typography>
               <input type="text" placeholder="enter the name of the school" onChange={onChange} />
                <br/>
                <br/>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semi-bold',
                    }}
                >
                    Have you successfully completed any tertiary qualifications?
                </Typography>
                <br/>
                <label> If yes, please tick the appropriate boxes and attach relevant Statement of Attainment/s:</label>
                <br />
                <label>
                    <input
                        name="internet"
                        type="checkbox"
                        value="yes"
                        onChange={onChange}
                    />{' '}
                    Yes
                </label>{' '}
                <label>
                    <input
                        name="internet"
                        type="checkbox"
                        value="no"
                        onChange={onChange}
                    />{' '}
                    No
                </label>
                <br />
                <br />
                            <input type="checkbox" id="topping" name="topping"
                                   value="Cert I"
                                   onChange={onChange}/>{' '}
                                    Certificate I

                            <input type="checkbox" id="topping" name="status"
                                   value="cert II"
                                   onChange={onChange}/> {' '}
                                    Certificate II

                            <input type="checkbox" id="topping" name="Employed – unpaid"
                                   value="Cert III"
                                   onChange={onChange}/>
                                    Certificate III (or trade certificate)
                            <br/>
                            <br/>
                            <input type="checkbox" id="topping" name="umemployed"
                                   value="Cert IV"
                                   onChange={onChange}/>
                                    Certificate IV (or advanced certificate/technician)
                            <br/>
                            <br/>
                            <input type="checkbox" id="topping" name="status"
                                   value="Diploma"
                                   onChange={onChange}/>
                                    Diploma(or associate diploma)
                            <br/>
                            <br/>
                            <input type="checkbox" id="topping" name="status"
                                   value="Higher Degree"
                                   onChange={onChange}/>
                                    Bachelor Degree or Higher Degree
                            <br/>
                            <br/>

                <input type="button" value= "Attach Statement of Attainments" />
                <br />
                <br />
                <Typography
                    variant="body2"
                    sx={{
                        color: '#000000',
                        fontWeight: 'semi-bold',
                    }}
                >
                    Are you currently enrolled in any courses?
                </Typography>
                <label>
                    <input
                        name="internet"
                        type="checkbox"
                        value="yes"
                        onChange={onChange}
                    />{' '}
                    Yes
                </label>{' '}
                <label>
                    <input
                        name="internet"
                        type="checkbox"
                        value="no"
                        onChange={onChange}
                    />{' '}
                    No
                </label><br/><br/>

                <label> If yes, please list  the name of the course and the registered training organisation:</label><br/>
                <div id="course">
                <input type="text" placeholder="name of the course" onChange={onChange} />
                <input type="text" placeholder="name of the RTO" onChange={onChange} />
                </div>
                <div id ="credit-transfer-note">
                    <Typography
                        variant="body2" sx={{color: '#000000', fontWeight: 'bold'}}
                        >
                    Credit Transfer
                    </Typography>
                    <Typography
                        variant="body2" sx={{color: '#000000', fontWeight: 'regular'}}
                    >
                        If you wish to seek recognition for units of competency issued by another RTO,
                        you must present the original Certificate/Statement of Attainment for sighting or
                        a certified copy at enrolment.
                    </Typography>
                </div>
            </form>
        </>
    );
}
export default EducationDetails;