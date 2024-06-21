import './App.css';
import Display from "./Display";
import PersonalDetails from "./components/AllAgedCare/PersonalDetails";
// import react from "react";
// import BasicInfo from "./components/BasicInfo";
// import ContactDetails from "./components/ContactDetails";
import EmploymentDetails from "./components/AllAgedCare/EmploymentDetails";
import OtherPersonalDetails from "./components/AllAgedCare/OtherPersonalDetails";
import AAC from "./AllAgedCareForm";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CourseDetails from "./components/AllAgedCare/CourseDetails";
import EducationDetails from "./components/AllAgedCare/EducationDetails";
import StudyUSIFee from "./components/AllAgedCare/StudyUSIFee";
import Accordion from "@mui/material/Accordion";
import AccordionUsage from "./components/Accordion/AccordionUsage";




function App() {
  return (
      <>
          <div className="top-nav">
              <h4>Enrolment Form</h4>
          </div>
      <AccordionUsage />
{/*<PersonalDetails />*/}
{/*/!*         <InterviewDetails />*!/*/}
{/*        <EmploymentDetails />*/}
{/*          <OtherPersonalDetails />*/}
{/*<AAC />*/}
{/*        <CourseDetails />*/}
{/*        <EducationDetails />*/}
{/*        <StudyUSIFee />*/}

</>
);
}

export default App;