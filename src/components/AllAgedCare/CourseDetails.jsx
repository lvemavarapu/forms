import react, {useState} from 'react';
import '../styles/contactdetails.css';
import'../styles/coursedetails.css';
import React from "react";
import { Typography } from '@mui/material';


function CourseDetails()  {
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
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        onChange={onChange}
                        />
                    <label>CHC33015 Certificate III in Individual Support (Ageing)      $3,000.00</label>

                    <div id ="typography-text">
                    <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mt: 2 }}
                        align="left"
                    >
                        Duration: This course could take you 12 months to complete.
                        You will need to spend approximately 14 hours a week on your studies (not including work placement).
                        The time it takes you to finish the course will depend on your skills and knowledge of the industry.

                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mt: 2 }}
                        align="left"
                    >
                        Work Placement: This course requires a minimum of 120 hours of work placement.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mt: 2 }}
                        align="left"
                    >
                        Entry Requirements: This course has entry requirements. It is important that you.
                    </Typography>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            onChange={onChange}
                        />
                        <label>Have access to the Internet and a computer. Some some basic computer skills in using Microsoft Word,Internet,downloading and
                            uploading documents</label><br />

                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            onChange={onChange}
                        />
                        <label>Have Language, Literacy and Numeracy skills required to study at this level</label>
                    </div>
                    <br />
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        onChange={onChange}
                    />{''}

                    <label>HLTAID011 Provide first aid           $100.00</label><br />
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        onChange={onChange}
                    />
                    <label>HLTHPS006 Assist clients with medication      $275.00</label><br />
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        onChange={onChange}
                    />
                    <label>HLTINFCOV001 Comply with infection prevention and control policies and procedures       $275.00</label><br />

                </div>
            </form>
        </>
    );
}
export default CourseDetails;