// StepperForm.jsx
import React from 'react';
import { makeStyles, Theme, createStyles }
    from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PersonalDetails from "./components/AllAgedCare/PersonalDetails";
import EmploymentDetails from "./components/AllAgedCare/EmploymentDetails";
import OtherPersonalDetails from "./components/AllAgedCare/OtherPersonalDetails";
import CourseDetails from "./components/AllAgedCare/CourseDetails";
import EducationDetails from "./components/AllAgedCare/EducationDetails";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    }),
);
function getSteps() {
    return [<b>Personal Details</b>,
        <b>Course Details</b>,
        <b>Employment Details</b>,
        <b>Other Personal Details</b>,
        <b>Educational Details</b>];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return (
               <PersonalDetails />
            );
        case 1:
            return (
                <CourseDetails />
            );
        case 2:
            return (
               <EmploymentDetails />
            );
        case 3:
            return (
                <OtherPersonalDetails />
            );
        case 4:
            return (
                <EducationDetails />
            );
        default:
            return 'Unknown step';
    }
}

export default function Form() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <h2> All Aged Care-enrolment form</h2>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        color="secondary"
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ?
                                            'Submit' : 'Save and Continue'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Form is submitted</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}