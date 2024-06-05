import './styles/basicinfo.css'
import React from "react";

function BasicInfo(){

    return(
        <>
        {/*<h5>Basic Information</h5>*/}
            <div id ="title">
                <div className="title">
                    <label>Title</label><br/>
                    <select>
                        <option value="Dr">Dr</option>
                        <option value="Mr.">Mr</option>
                        <option value="Mrs.">Mrs</option>
                        <option value="Ms.">Ms</option>
                    </select>
                </div>
                <br/>
                <div className="given-name">
                    <label className="form__label" htmlFor="given-name">Given Name </label><br/>
                    <input className="form__input" type="text" id="givenname" placeholder="Given Name" required />
                </div>
                <div className="familyname">
                    <label className="form__label" htmlFor="familyname">Family Name </label><br/>
                    <input type="text"  id="FamilyName" className="form__input" placeholder="Family Name" />
                </div>
            </div>

                <div className="date of birth">
                    <label htmlFor="date">Date of Birth</label><br/>
                    <input type="date" name="date" id="date"></input>
                </div><br/>
                <div className="gender">
                    <label>Gender</label><br/>
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>


        </>
    )
}
export default BasicInfo;