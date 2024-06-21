import React, { useState } from "react";

import BasicInfo from "../BasicInfo";
import ContactDetails from "../ContactDetails";
import Address from "../Address";
import Button from "@mui/material/Button";

function PersonalDetails() {
    const [formData, setFormData] = useState({
        BasicInfo: {},
        addressInfo: {},
    });

    const handlePersonalInfoChange = (basicInfo) => {
        setFormData({ ...formData, basicInfo });
        console.log("Form Data:", formData);
    };

    const handleAddressInfoChange = (addressInfo) => {
        setFormData({ ...formData, addressInfo });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");

    };

    return (
    <>
                <form onSubmit={handleSubmit}>
                    <div className="form-body">
                    <BasicInfo onChange={handlePersonalInfoChange} />
                    <ContactDetails onChange={handleAddressInfoChange} />
                    <Address onChange={handleAddressInfoChange}  />
                    <Button>Cancel</Button>
                    <Button type={"submit"}>Save</Button>

                </div>
                </form>
</>
    );
}

export default PersonalDetails;