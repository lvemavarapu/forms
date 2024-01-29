import React, { useState } from "react";

import BasicInfo from "../BasicInfo";
import ContactDetails from "../ContactDetails";
import Address from "../Address";

function PersonalDetails() {
    const [formData, setFormData] = useState({
        BasicInfo: {},
        addressInfo: {},
    });

    const handlePersonalInfoChange = (basicInfo) => {
        setFormData({ ...formData, basicInfo });
    };

    const handleAddressInfoChange = (addressInfo) => {
        setFormData({ ...formData, addressInfo });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
    <>
                <form onSubmit={handleSubmit}>
                    <div className="form-body">
                        {/*<h4> Personal Details</h4>*/}
                    <BasicInfo onChange={handlePersonalInfoChange} />
                    <ContactDetails onChange={handleAddressInfoChange} />
                        <Address onChange={handleAddressInfoChange}  />

                </div>
                </form>
</>
    );
}

export default PersonalDetails;