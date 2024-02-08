import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import display from "./display.css";


export default function Display() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div>
            <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={{
                    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h4" color ="blue">Personal Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div id ="title-name">
                        <div className="title">
                            <label>Title</label><br/>
                            <select>
                                <option value="Dr">Dr</option>
                                <option value="Mr.">Mr</option>
                                <option value="Mrs.">Mrs</option>
                                <option value="Ms.">Ms</option>
                            </select>
                        </div>
                        <div className="given-name">
                            <label className="form__label" htmlFor="given-name">*Given Name </label><br/>
                            <input className="form__input" type="text" id="givenname" placeholder="Given Name" />
                        </div>
                        <div className="familyname">
                            <label className="form__label" htmlFor="familyname">Family Name </label><br/>
                            <input type="text"  id="FamilyName" className="form__input" placeholder="Family Name" />
                        </div>
                    </div>
                    <div id = "DOB-Gender">
                        <div className="date of birth">
                            <label htmlFor="date">*Date of Birth</label><br/>
                            <input type="date" name="date" id="date"></input>
                        </div>
                        <div className="gender">
                            <label>Gender</label><br/>
                            <select>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                    </div>
                    <button id ="display-text">Save</button>
                    <button id ="display-sec">Cancel</button>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Default transition using Collapse</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
        </div>
    );
}