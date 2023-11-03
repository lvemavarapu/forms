import React  from 'react';
import { useForm } from "react-hook-form";
import './interviewform.css';
import TextareaAutosize from 'react-textarea-autosize';


function InterviewDetails() {

    const {
        handleSubmit,
        register,
        formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const onChange = (event) => {
        console.log('change', event.target.value);
    };
    const cancel = (e) => {
        // e.preventDefault();
        console.log('Dont submit this');
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-body">
                        <h3>Pre-Qualification Interview Questionnaire</h3>
                        <div id = "test">
                            <div className="interviewername">
                                <label>Interviewer Name </label><br />
                                <input className="form__input"
                                       type="text"
                                       {...register("interviewer name", {
                                    required: "*"})}
                                       placeholder="Interviewer Name"
                                />
                            </div>
                            <div className="interviewerposition">
                                <label className="form__label" htmlFor="interviewerposition">Interviewer Position </label><br />
                                <input type="text" name="" id="lastName" className="form__input" placeholder="Interviewer Position" />
                            </div>
                        </div>
                        <br />
                        <div id = "test">
                            <div className="intervieweename">
                                <label className="form__label" htmlFor="intervieweename">Interviewee Name </label><br />
                                <input className="form__input" type="text" id="firstName" placeholder="Interviewer Name" />
                            </div>
                            <div className="intervieweeposition">
                                <label className="form__label" htmlFor="intervieweeposition">Interviewee Position </label><br />
                                <input type="text" name="" id="lastName" className="form__input" placeholder="Interviewee Position" />
                            </div>
                        </div>
                        <h4>Student Details</h4>
                        <div>
                            <div id = "test">
                                <div className="studentname">
                                    <label className="form__label" htmlFor="studentname">Student Name </label><br />
                                    <input className="form__input" type="text" id="StudentName" placeholder="Student Name" />
                                </div>
                                <div className="company">
                                    <label className="form__label" htmlFor="company">Company</label><br />
                                    <input type="text" name="" id="Company" className="form__input" placeholder="Company" />
                                </div>
                            </div>
                            <div id = "test">
                                <div className="Position">
                                    <label className="form__label" htmlFor="position">Position </label><br />
                                    <input className="form__input" type="text" id="position" placeholder="position" />
                                </div>
                                <div className="experience">
                                    <label className="form__label" htmlFor="years in industry">Years in Industry</label><br />
                                    <input type="number" name="" id="years in industry" className="form__input" placeholder="00" />
                                </div>
                            </div>
                        </div>
                        <div id = "test">
                            <div className="date">
                                <label htmlFor="date">Date </label><br/>
                                <input type="date" name="date" id="date"></input>
                            </div>
                        </div>
                        <div id = "test">
                            <div className="starttime">
                                <label htmlFor="starttime">Start Time</label><br />
                                <input type="time"></input>
                            </div>
                            <div className="finishtime">
                                <label htmlFor="starttime">Finish Time</label><br />
                                <input type="time"></input>
                            </div>

                        </div>

                        <div className="formInput">
                            <label>Email</label><br />
                            <input
                                type="email"
                                {...register("email", {
                                    required: "*",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                                placeholder="someone@email.com"
                            />
                            {errors.email && errors.email.message}
                        </div>
                        <div id ="employment">
                                <label>
                                    Employment status
                                </label><br/>
                                    <select>
                                        <option value="fulltime">Full-time</option>
                                        <option value="partime">Part-time</option>
                                        <option value="casual">Casual</option>
                                    </select>
                                <label>Number of hours </label>
                                <input className="form__input"
                                       type="hours:minutes"
                                       {...register("hours", {
                                           required: "*"})}
                                       placeholder="hours:minutes"
                                />
                        </div><br />
                        <br />
                        {/*TextareaAutosize is dynamic user can resize the textarea*/}
                        <div id="current-qualifications">
                            <label>Current qualifications held  </label><br/>
                                <TextareaAutosize
                                    name="current qual"
                                    type="textarea"
                                   onChange={onChange}
                                    required={true}
                                />{' '}
                        </div>
                        <div id="qualifications-sought">
                            <label>Qualifications Sought:</label><br/>
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="CHC33021 Certificate III in Individual Support (Ageing)"
                                    onChange={onChange}
                                />{' '}
                                CHC33021 Certificate III in Individual Support (Ageing)
                            </label><br/>
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    // value="HLTAID011 Provide First Aid"
                                    onChange={onChange}
                                />{' '}
                                HLTAID011 Provide First Aid
                            </label><br/>
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="HLTHPS006 Assist clients with medication"
                                    onChange={onChange}
                                />{' '}
                                HLTHPS006 Assist clients with medication
                            </label><br/>
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="HLTINFCOV001 Comply with infection prevention and control policies and procedures"
                                    onChange={onChange}
                                />{' '}
                                HLTINFCOV001 Comply with infection prevention and control policies and procedures
                            </label>
                        </div>
                        <h4>References (for candidates seeking RPL)</h4>
                        <div id="references">
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="checkbox1"
                                    onChange={onChange}
                                />{' '}
                                One third party supervisor that holds the same and/or higher level qualification-
                                a copy of this qualification is required.
                                In addition, it is acceptable to provide a Third Party Reference who is
                                supervisor deemed at an equivalent level to the
                                qualification being undertaken.
                            </label><br/>
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="checkbox1"
                                    onChange={onChange}
                                />{' '}
                                One Personal Referee you currently work with/or have worked with.
                                This referee will need to confirm the student’s industry skills
                                and abilities relative to the qualification being undertaken.
                            </label><br/>
                        </div>
                        <h4>Student self-assessment questions</h4>
                        <label> How do you rate your computer skills?</label>
                        <span>1 being poor and 5 being efficient</span>
                        <div id="self-assessment">
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{'    '}
                                1
                            </label>{' '}
                            <label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{' '}
                                2
                            </label><label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{' '}
                                3
                            </label><label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{' '}
                                4
                            </label><label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{' '}
                                5
                            </label><br />
                            <label> How do you rate your English skills?</label>
                            <span>1 being poor and 5 being efficient</span>
                            <div id="self-assessment">
                                <label>
                                    <input
                                        name="qual"
                                        type="checkbox"
                                        value="1"
                                        onChange={onChange}
                                    />{'    '}
                                    1
                                </label>{' '}
                                <label>
                                    <input
                                        name="qual"
                                        type="checkbox"
                                        value="1"
                                        onChange={onChange}
                                    />{' '}
                                    2
                                </label><label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{' '}
                                3
                            </label><label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{' '}
                                4
                            </label><label>
                                <input
                                    name="qual"
                                    type="checkbox"
                                    value="1"
                                    onChange={onChange}
                                />{' '}
                                5
                            </label>

                        </div>
                            <div id="yesorno">
                                <label> Do you have access to reliable internet and email?</label>
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
                                <label> Do you intend to complete your training  within 12 months?</label>
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
                                <label> Do you have have reasonable level of health and fitness
                                    (as\ working in this industry can be physically demanding?</label>
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
                        </div>
                            <div id="button">
                                <button type="button" id ="submit">Submit</button>
                                <button type="button">Cancel</button>
                            </div>

                    </div>
                    </div>
            </form>
        </>
    );
}
export default InterviewDetails;